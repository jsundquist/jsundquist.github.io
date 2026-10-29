import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getSortedPosts } from "@/lib/posts";
import { DATA } from "@/data/resume";

export async function GET(context: APIContext) {
  const posts = await getSortedPosts();
  return rss({
    title: `${DATA.name} — Blog`,
    description: "Thoughts on software development, life, and more.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: new Date(`${post.data.publishedAt}T00:00:00Z`),
      link: `/blog/${post.id}`,
    })),
  });
}
