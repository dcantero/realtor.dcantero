import type { Route } from "./+types/blog";
import { ArticleCard } from "~/components/ArticleCard";
import { getPosts } from "~/content/posts.server";
import { pageMeta } from "~/lib/meta";

export const meta: Route.MetaFunction = ({ matches }) =>
  pageMeta(
    matches,
    "Resources",
    "Answers to the most asked questions about buying, selling, and everything real estate.",
  );

export async function loader() {
  return { posts: await getPosts() };
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div className="mx-auto my-10 max-md:mx-[30px]">
        <h1 className="flex justify-center text-[2em] font-bold max-md:justify-start">Helpful Resources</h1>
        <h4 className="flex justify-center text-xl font-extralight max-md:justify-start">
          Read through some of the most asked questions regarding the sale and buying of homes,
          and everything real estate related!
        </h4>
      </div>
      <div className="flex flex-wrap justify-center">
        {loaderData.posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
