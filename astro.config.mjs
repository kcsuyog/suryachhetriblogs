import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: process.env.URL || "https://suryachhetriblogs.netlify.app",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })],
});
