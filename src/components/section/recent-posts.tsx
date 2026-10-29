import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { slugifyTag } from "@/lib/utils";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export interface RecentPost {
  id: string;
  title: string;
  publishedAt: string;
  summary: string;
  tags?: string[];
  readingTime: number;
}

export default function RecentPosts({ posts }: { posts: RecentPost[] }) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-bold">{DATA.sections.recentPosts.heading}</h2>
          <a
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all posts
          </a>
        </div>
      </BlurFade>
      <div className="flex flex-col gap-6">
        {posts.map((post, id) => (
          <BlurFade key={post.id} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
            <a
              href={`/blog/${post.id}`}
              className="group flex flex-col gap-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <p className="tracking-tight text-lg font-medium">
                {post.title}
                <ChevronRight
                  className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                  aria-hidden
                />
              </p>
              <p className="text-xs text-muted-foreground">
                {post.publishedAt} · {post.readingTime} min read
              </p>
              <p className="text-sm text-muted-foreground">{post.summary}</p>
            </a>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {post.tags.map((tag) => (
                  <a key={tag} href={`/blog/tag/${slugifyTag(tag)}`}>
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-medium hover:bg-secondary/70 transition-colors"
                    >
                      {tag}
                    </Badge>
                  </a>
                ))}
              </div>
            )}
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
