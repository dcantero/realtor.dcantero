import { data, Link } from "react-router";

import type { Route } from "./+types/blog-post";
import { formatPostDate } from "~/components/ArticleCard";
import { Cta } from "~/components/ui/Cta";
import { Separator } from "~/components/ui/Separator";
import { getPost } from "~/content/posts.server";
import { pageMeta } from "~/lib/meta";

export const meta: Route.MetaFunction = ({ matches, loaderData }) =>
  pageMeta(matches, loaderData?.post.title, loaderData?.post.excerpt);

export async function loader({ params }: Route.LoaderArgs) {
  const post = await getPost(params.slug);
  if (!post) throw data(null, { status: 404 });
  return { post };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  return (
    <article className="mx-auto my-10 w-[800px] max-w-[85%]">
      <Link to="/blog" className="text-sm uppercase tracking-[1px] text-link hover:text-brand">
        ← All resources
      </Link>
      <div className="mt-6 flex justify-between text-xs text-muted">
        <span>{formatPostDate(post)}</span>
        <span>{post.readingMinutes} min read</span>
      </div>
      <h1 className="mt-2 text-4xl font-bold capitalize">{post.title}</h1>
      <Separator className="mx-0 mt-3 mb-6 w-[75px]" />
      <img
        src={post.coverImage}
        alt=""
        className="mb-8 h-[300px] w-full rounded-[20px] object-cover"
        style={{ objectPosition: post.coverPosition ?? "center" }}
      />

      {post.body?.kind === "html" && (
        <div className="prose-invert space-y-4" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      )}
      {post.body?.kind === "markdown" && (
        // TODO: render markdown once the content source is chosen.
        <pre className="whitespace-pre-wrap font-body">{post.body.markdown}</pre>
      )}
      {!post.body && (
        <div className="rounded-[20px] border border-line bg-surface p-8 shadow-card">
          <p className="text-lg">{post.excerpt}</p>
          <p className="mt-6 text-muted">
            This article is coming soon. In the meantime, feel free to reach out with any
            questions.
          </p>
          <div className="mt-6">
            <Cta to="/contact">Contact Me</Cta>
          </div>
        </div>
      )}
    </article>
  );
}
