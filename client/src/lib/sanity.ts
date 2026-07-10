const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = "2026-07-10";

export interface SanityReview {
  author: string;
  initials?: string;
  text: string;
  rating?: number;
}

export interface GoogleReviewsPayload {
  configured: boolean;
  placeName?: string;
  rating?: number;
  userRatingCount?: number;
  googleReviewsUrl?: string;
  reviews: SanityReview[];
}

export interface SanityHomepage {
  heroBadge?: string;
  heroTitle?: string;
  heroTagline?: string;
  heroDescription?: string;
  heroBackground?: string;
  googleReviewsUrl?: string;
  reviews?: SanityReview[];
}

export interface SanitySiteSettings {
  logo?: string;
}

export interface SanityGalleryItem {
  title: string;
  image: string;
  alt: string;
  caption?: string;
}

export const isSanityConfigured = Boolean(projectId && dataset);

async function fetchSanity<T>(query: string): Promise<T | null> {
  if (!isSanityConfigured) return null;

  const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Sanity request failed: ${response.status}`);

  const payload = await response.json() as { result?: T };
  return payload.result ?? null;
}

export function fetchSanityHomepage() {
  return fetchSanity<SanityHomepage>(`*[_type == "homepage"][0]{
    heroBadge,
    heroTitle,
    heroTagline,
    heroDescription,
    "heroBackground": heroBackground.asset->url,
    googleReviewsUrl,
    reviews[]{author, initials, text, rating}
  }`);
}

export function fetchSanitySiteSettings() {
  return fetchSanity<SanitySiteSettings>(`*[_type == "siteSettings"][0]{
    "logo": logo.asset->url
  }`);
}

export function fetchSanityGalleryItems() {
  return fetchSanity<SanityGalleryItem[]>(`*[_type == "galleryItem"] | order(order asc){
    title,
    "image": image.asset->url,
    alt,
    caption
  }`);
}

export async function fetchGoogleReviews(): Promise<GoogleReviewsPayload | null> {
  try {
    const response = await fetch("/api/google-reviews");
    if (!response.ok) return null;
    return await response.json() as GoogleReviewsPayload;
  } catch {
    return null;
  }
}
