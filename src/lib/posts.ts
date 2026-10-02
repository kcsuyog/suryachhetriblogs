import { getCollection, type CollectionEntry } from "astro:content";
export const categories = ["सिकाइ", "यात्रा", "अनुभव"] as const;
export const categorySlug = {
  सिकाइ: "learning",
  यात्रा: "travel",
  अनुभव: "experience",
};
export const publishedPosts = async () =>
  (await getCollection("posts"))
    .filter((post) => !post.data.draft && post.data.date <= new Date())
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
export const formatDate = (date: Date) =>
  date.toLocaleDateString("ne-NP", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
export const readingTime = (post: CollectionEntry<"posts">) =>
  `${Math.max(1, Math.ceil((post.body || "").split(/\s+/).length / 160)).toLocaleString("ne-NP")} मिनेट`;
