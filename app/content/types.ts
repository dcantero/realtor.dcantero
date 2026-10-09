export type PostStatus = "coming-soon" | "published";

export type PostBody =
  | { kind: "html"; html: string }
  | { kind: "markdown"; markdown: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** Path under /public or an absolute URL. */
  coverImage: string;
  /** CSS object-position for the cover crop, e.g. "80% 0". */
  coverPosition?: string;
  /** ISO date, or null until published. */
  publishedAt: string | null;
  readingMinutes: number;
  status: PostStatus;
  /** Optional downloadable guide (PDF etc.). */
  guideUrl: string | null;
  /** Null until the article is written. */
  body: PostBody | null;
}

/**
 * The seam between the site and wherever posts live. Implement this once for
 * MDX files, a headless CMS, or a database, then point `posts.server.ts` at it.
 */
export interface ContentProvider {
  listPosts(): Promise<Post[]>;
  getPost(slug: string): Promise<Post | null>;
}
