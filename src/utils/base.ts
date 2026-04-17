export function withBase(path: string) {
  if (!path) return import.meta.env.BASE_URL;
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
