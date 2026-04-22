export function withBase(path: string) {
  if (!path) return import.meta.env.BASE_URL;
  if (/^(https?:)?\/\//.test(path) || /^(mailto:|tel:)/.test(path)) return path;

  const [pathnameWithSearch = "", hash = ""] = path.split("#");
  const [pathname = "", search = ""] = pathnameWithSearch.split("?");
  const normalizedPath = pathname.replace(/^\/+/, "");
  const isRoot = normalizedPath.length === 0;
  const hasFileExtension = /\.[a-z0-9]+$/i.test(normalizedPath);
  const needsTrailingSlash = !isRoot && !hasFileExtension && !normalizedPath.endsWith("/");
  const routePath = isRoot ? "" : `${normalizedPath}${needsTrailingSlash ? "/" : ""}`;
  const basePath = `${import.meta.env.BASE_URL}${routePath}`;
  const query = search ? `?${search}` : "";
  const fragment = hash ? `#${hash}` : "";

  return `${basePath}${query}${fragment}`;
}
