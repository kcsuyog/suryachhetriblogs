import rss from "@astrojs/rss";
import { publishedPosts } from "../lib/posts";
import type { APIContext } from "astro";
export async function GET(context: APIContext) {
  return rss({
    title: "सूर्यका शब्दहरू",
    description: "सिकाइ, यात्रा र अनुभवका नेपाली कथाहरू।",
    site: context.site!,
    items: (await publishedPosts()).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
    customData: "<language>ne</language>",
  });
}
