import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

type GoogleReview = {
  author: string;
  initials: string;
  text: string;
  rating: number;
  relativeTime?: string;
};

let reviewsCache: { expiresAt: number; body: unknown } | null = null;

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Uses Places API (New) server-side so the Google API key is never sent to a visitor.
  // The endpoint deliberately returns only the fields the review component needs.
  app.get("/api/google-reviews", async (_req, res) => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      res.status(503).json({ configured: false, reviews: [] });
      return;
    }

    if (reviewsCache && reviewsCache.expiresAt > Date.now()) {
      res.setHeader("Cache-Control", "public, max-age=900");
      res.json(reviewsCache.body);
      return;
    }

    try {
      const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,googleMapsUri,reviews",
        },
      });

      if (!response.ok) throw new Error(`Google Places returned ${response.status}`);
      const place = await response.json() as {
        displayName?: { text?: string };
        rating?: number;
        userRatingCount?: number;
        googleMapsUri?: string;
        reviews?: Array<{ authorAttribution?: { displayName?: string }; text?: { text?: string }; rating?: number; relativePublishTimeDescription?: string }>;
      };
      const reviews: GoogleReview[] = (place.reviews ?? []).map((review) => {
        const author = review.authorAttribution?.displayName || "Google reviewer";
        return { author, initials: initials(author), text: review.text?.text || "", rating: review.rating || 5, relativeTime: review.relativePublishTimeDescription };
      }).filter((review) => review.text);
      const body = { configured: true, placeName: place.displayName?.text, rating: place.rating, userRatingCount: place.userRatingCount, googleReviewsUrl: place.googleMapsUri, reviews };
      reviewsCache = { body, expiresAt: Date.now() + 15 * 60 * 1000 };
      res.setHeader("Cache-Control", "public, max-age=900");
      res.json(body);
    } catch (error) {
      console.error("Unable to load Google reviews", error);
      res.status(502).json({ configured: true, reviews: [] });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
