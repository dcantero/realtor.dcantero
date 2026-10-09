import { staticProvider } from "./providers/static.server";
import type { ContentProvider } from "./types";

// Swap this one line to change where blog posts come from.
const provider: ContentProvider = staticProvider;

export const getPosts = () => provider.listPosts();
export const getPost = (slug: string) => provider.getPost(slug);
