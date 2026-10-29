import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import type { Contributions } from "@/lib/github-contributions";

const BLUR_FADE_DELAY = 0.04;

// GitHub's contribution palette, light and dark variants
const LEVEL_CLASSES = [
  "bg-[#ebedf0] dark:bg-[#21262d]",
  "bg-[#9be9a8] dark:bg-[#0e4429]",
  "bg-[#40c463] dark:bg-[#006d32]",
  "bg-[#30a14e] dark:bg-[#26a641]",
  "bg-[#216e39] dark:bg-[#39d353]",
];

export default function GithubActivity({
  contributions,
}: {
  contributions: Contributions;
}) {
  const { days, total } = contributions;
  const firstWeekday = days.length > 0 ? new Date(`${days[0].date}T00:00:00Z`).getUTCDay() : 0;

  return (
    <div className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="text-xl font-bold">{DATA.sections.githubActivity.heading}</h2>
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            @jsundquist
          </a>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <div className="overflow-x-auto pb-2">
          <div
            className="grid w-max gap-[3px]"
            style={{
              gridTemplateRows: "repeat(7, 10px)",
              gridAutoFlow: "column",
              gridAutoColumns: "10px",
            }}
            role="img"
            aria-label={`${total} contributions in the last year`}
          >
            {days.map((day, index) => (
              <div
                key={day.date}
                title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                className={`rounded-[2px] ring-1 ring-inset ring-black/5 dark:ring-white/5 ${LEVEL_CLASSES[day.level]}`}
                style={{
                  gridRow: index === 0 ? firstWeekday + 1 : undefined,
                }}
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {total.toLocaleString("en-US")} contributions in the last year
        </p>
      </BlurFade>
    </div>
  );
}
