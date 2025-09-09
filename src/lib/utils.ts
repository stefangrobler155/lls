export function normalizeUrl(url?: string): string | undefined {
  if (!url) return undefined;

  try {
    const parsed = new URL(url);
    return parsed.pathname; // "/services/weddings"
  } catch {
    return url; // already relative
  }
}