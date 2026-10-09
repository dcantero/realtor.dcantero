import { Link } from "react-router";

import { Cta } from "~/components/ui/Cta";
import { Separator } from "~/components/ui/Separator";
import type { Post } from "~/content/types";

export function formatPostDate(post: Post): string {
  if (post.status === "coming-soon" || !post.publishedAt) return "Coming Soon";
  return new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const smallCta = "px-3 py-2.5 text-xs tracking-[1px]";

export function ArticleCard({ post }: { post: Post }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="m-[30px] flex w-[550px] max-w-full rounded-[20px] bg-surface shadow-card transition-transform duration-300 hover:-translate-y-[15px] max-md:block max-md:w-[350px]">
      <Link to={href} className="block h-[300px] shrink-0 max-md:h-[150px]" tabIndex={-1} aria-hidden>
        <img
          src={post.coverImage}
          alt=""
          className="h-full w-[200px] rounded-[20px] object-cover opacity-50 max-md:w-full max-md:opacity-70"
          style={{ objectPosition: post.coverPosition ?? "0 40%" }}
        />
      </Link>
      <div className="m-5 mb-[25px]">
        <div className="flex justify-between text-xs text-muted">
          <span>{formatPostDate(post)}</span>
          <span className="pr-5">{post.readingMinutes} min</span>
        </div>
        <h2 className="mt-2.5 mb-[5px] text-2xl font-bold capitalize max-md:text-xl">
          <Link to={href} className="transition-colors duration-300 hover:text-gray-500">
            {post.title}
          </Link>
        </h2>
        <Separator className="mx-0 mt-0 mb-2.5 w-[75px]" />
        <p className="mr-2.5 mb-2.5 text-[15px] text-muted">{post.excerpt}</p>
        <div className="mt-2.5 flex flex-wrap gap-2.5">
          {post.guideUrl ? (
            <Cta href={post.guideUrl} external className={smallCta}>
              Download Guide
            </Cta>
          ) : (
            <span
              aria-disabled
              className={`inline-block cursor-not-allowed rounded-[5px] border border-line bg-surface uppercase text-muted shadow-card ${smallCta}`}
            >
              Guide Coming Soon
            </span>
          )}
          <Cta to={href} className={smallCta}>
            Read Article
          </Cta>
        </div>
      </div>
    </article>
  );
}
