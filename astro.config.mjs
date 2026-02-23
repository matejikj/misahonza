import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isCi = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPages = repository?.toLowerCase().endsWith(".github.io");

export default defineConfig({
  integrations: [tailwind()],
  base: isCi && repository && !isUserOrOrgPages ? `/${repository}` : "/",
});
