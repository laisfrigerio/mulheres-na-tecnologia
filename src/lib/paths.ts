/**
 * Get the base URL for the application
 * In GitHub Pages: /mulheres-na-tecnologia/
 * In local development: /
 */
export const getBasePath = (): string => {
  const base = import.meta.env.BASE_URL || "/";
  return base.endsWith("/") ? base : `${base}/`;
};

/**
 * Resolve an image path considering the base URL
 * Converts /images/... to {base}images/...
 */
export const resolveImagePath = (path: string): string => {
  if (!path) return "";
  // If it's already an absolute URL or data URL, return as is
  if (path.startsWith("http") || path.startsWith("data:")) {
    return path;
  }

  const basePath = getBasePath();
  // Remove leading slash if path has one, to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${basePath}${cleanPath}`;
};
