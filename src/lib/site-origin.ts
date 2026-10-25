/**
 * Absolute origin for sitemap and RSS links.
 * Set `SITE_ORIGIN` (no trailing slash) to override. Otherwise use the Vercel
 * production host when the platform provides it, and fall back to this
 * deployment: https://excelhero-website.vercel.app
 */
const DEPLOYMENT_ORIGIN = "https://excelhero-website.vercel.app";

function strip(origin: string) {
  return origin.replace(/\/$/, "");
}

export function siteOrigin(): string {
  const configured = process.env.SITE_ORIGIN?.trim();
  if (configured) return strip(configured);
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }
  return DEPLOYMENT_ORIGIN;
}
