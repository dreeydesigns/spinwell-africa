# Spinwell Sanity Studio

This Studio gives editors one place to update the homepage hero, review fallback cards, Google Reviews link, gallery images, and site logo.

1. Create or select a Sanity project, then provide its **project ID** and **dataset**.
2. In this folder, create `.env` with `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.
3. Run `npm install`, then `npm run dev`.
4. In Sanity's project settings, add the website domain to the CORS origins list.
5. Set the same project ID and dataset as `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` in the website's deployment environment.

The public website intentionally uses no token. Keep write tokens only in Sanity Studio or a trusted server environment.

## Google Reviews

The website reads live reviews through its server endpoint, not from Sanity or the browser. In the website deployment environment set `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`, enable **Places API (New)** in Google Cloud, and restrict the key. The endpoint fetches the rating, review count, Google Maps URL, and current reviews, then caches the response for 15 minutes. While it is not configured, the fallback cards and URL in the Homepage document are shown instead.
