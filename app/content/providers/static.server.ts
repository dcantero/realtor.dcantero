import type { ContentProvider, Post } from "../types";

/**
 * Placeholder provider: the four "coming soon" resource cards from the old
 * site, hardcoded. Replace with an MDX / CMS / database provider when the
 * blog source is decided.
 */
const posts: Post[] = [
  {
    slug: "improving-your-credit-asap",
    title: "Improving Your Credit ASAP",
    excerpt:
      "Bad credit is as helpful as a snorkel in a desert: you'll have a harder time getting a loan, and if you're looking to rent, landlords won't even look your way.",
    coverImage: "/images/blog/improving-your-credit-asap.jpg",
    publishedAt: null,
    readingMinutes: 5,
    status: "coming-soon",
    guideUrl: null,
    body: null,
  },
  {
    slug: "first-time-home-buyer-faq",
    title: "First Time Home Buyer FAQ",
    excerpt:
      "How do I know if I'm ready to buy a home? What is the first step in the home-buying process? How much can I afford to spend on a home? These are all great questions to ask!",
    coverImage: "/images/blog/first-time-home-buyer-faq.jpg",
    publishedAt: null,
    readingMinutes: 5,
    status: "coming-soon",
    guideUrl: null,
    body: null,
  },
  {
    slug: "repairs-before-listing",
    title: "Should I Make Repairs Before Listing My Home?",
    excerpt:
      "What repairs should be made to your home before selling? Which repairs make the most sense to help the selling price?",
    coverImage: "/images/blog/repairs-before-listing.jpg",
    publishedAt: null,
    readingMinutes: 5,
    status: "coming-soon",
    guideUrl: null,
    body: null,
  },
  {
    slug: "how-much-is-my-home-worth",
    title: "How Much Is My Home Worth?",
    excerpt:
      "A home's value is determined by a few factors, the most prominent being comparables, which are similar homes sold recently in your area.",
    coverImage: "/images/blog/how-much-is-my-home-worth.jpg",
    coverPosition: "80% 0",
    publishedAt: null,
    readingMinutes: 5,
    status: "coming-soon",
    guideUrl: null,
    body: null,
  },
];

export const staticProvider: ContentProvider = {
  async listPosts() {
    return posts;
  },
  async getPost(slug) {
    return posts.find((p) => p.slug === slug) ?? null;
  },
};
