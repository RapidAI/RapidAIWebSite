interface ContentEntryLike {
  id: string;
}

export function orderContentEntriesByFile<T extends ContentEntryLike>(entries: T[]) {
  return [...entries].sort((a, b) => a.id.localeCompare(b.id, "zh-CN", { numeric: true }));
}
