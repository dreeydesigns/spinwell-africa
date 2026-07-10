# Spinwell Sanity Studio

This Studio gives editors one place to update the homepage hero, review cards, Google Reviews link, and site logo.

1. Create or select a Sanity project, then provide its **project ID** and **dataset**.
2. In this folder, create `.env` with `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.
3. Run `npm install`, then `npm run dev`.
4. In Sanity's project settings, add the website domain to the CORS origins list.
5. Set the same project ID and dataset as `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` in the website's deployment environment.

The public website intentionally uses no token. Keep write tokens only in Sanity Studio or a trusted server environment.
