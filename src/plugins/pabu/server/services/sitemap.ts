import { CMS_ROOT_PAGE_URL, SITEMAP_EXCLUDED_URLS } from "../constants";
import { PbPage } from "../types/pbpage";
import pbEntityService from "./pbEntityService";

export type PbSeo = {
  dailySitemapActive: boolean;
  disableImageOptimization: boolean;
  openExternalLinksInNewTab: boolean;
};

/**
 * creates a sitemap.xml if daily sitemap creation is activated
 * @returns true if sitemap was created, else false
 */
export const createSitemap = async () => {
  console.log("[PB] daily sitemap creation started");
  const seoSettings: PbSeo | null = (await pbEntityService.findOne(
    "pb.sc" as any,
    1,
    {}
  )) as any;

  if (!seoSettings) {
    console.log("[PB] error while creating sitemap. Unable to get SEO data");
    return false;
  }

  if (!seoSettings.dailySitemapActive) {
    console.log("[PB] daily sitemap creation deactivated");
    return false;
  }

  if (!process.env.PABU_PUBLIC_FRONTEND_URL) {
    console.log(
      "[PB] error while creating sitemap. process.env.PABU_PUBLIC_FRONTEND_URL missing"
    );
    return false;
  }

  const frontendDomain =
    process.env.PABU_PUBLIC_FRONTEND_URL.charAt(
      process.env.PABU_PUBLIC_FRONTEND_URL.length - 1
    ) === "/"
      ? process.env.PABU_PUBLIC_FRONTEND_URL.slice(0, -1)
      : process.env.PABU_PUBLIC_FRONTEND_URL;

  if (!frontendDomain) {
    console.log(
      "[PB] error while creating sitemap. CORS_PUBLIC_NEXTJS_URL missing"
    );
    return false;
  }

  let pages: Array<PbPage> | null = (await pbEntityService.findMany(
    "plugin::pabu.pbpage",
    {
      fields: ["*"],
      filters: {
        published: true,
        isPrivate: false,
      },
      sort: {
        url: "asc",
      },
      populate: "pb-deep",
    }
  )) as any;

  if (!pages) {
    console.log("[PB] error while creating sitemap. Unable to read pages");
    return false;
  }

  // move root page to first place.
  pages.sort((a, b) => {
    if (a.url === CMS_ROOT_PAGE_URL) return -1;
    else return 0;
  });

  // remove unwanted pages
  pages = pages.filter(
    (page) =>
      !page.seoSettings?.includes("noindex") &&
      !SITEMAP_EXCLUDED_URLS.some((excludedUrl) =>
        page.url.startsWith(excludedUrl)
      )
  );

  // create sitemap string
  let urlsToXML = "";
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    urlsToXML += `
    <url>
      <loc>${frontendDomain}/${
      page.url !== CMS_ROOT_PAGE_URL ? page.url : ""
    }</loc>
      <lastmod>${new Date(page.updatedAt).toISOString().slice(0, 10)}</lastmod>
    </url>`;
  }

  const finalXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlsToXML}
    </urlset>
  `;

  // create sitemap.xml file
  const fileCreated = await strapi
    .service("plugin::pabu.file")
    .createOrUpdateFile("assets", "sitemap", "xml", finalXML, false, false);

  if (!fileCreated) {
    console.log("[PB] error while creating sitemap. Unable to create file");
    return false;
  }

  console.log("[PB] sitemap successfully created");
  return true;
};
