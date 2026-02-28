import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0];
const isCi = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPages = repository?.toLowerCase().endsWith(".github.io");
const siteFromEnv = process.env.PUBLIC_SITE_URL;
const site =
  siteFromEnv ??
  (isCi && owner && repository
    ? isUserOrOrgPages
      ? `https://${repository}`
      : `https://${owner}.github.io`
    : undefined);

export default defineConfig({
  integrations: [tailwind()],
  site,
  base: isCi && repository && !isUserOrOrgPages ? `/${repository}` : "/",
});
