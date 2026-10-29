import { getCollection } from "astro:content";

export async function getSortedPosts() {
  const posts = await getCollection("blog");
  return [...posts].sort(
    (a, b) =>
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime(),
  );
}

export function readingTime(body: string = "") {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
