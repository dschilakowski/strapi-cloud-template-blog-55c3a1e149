import { Strapi } from "@strapi/strapi";
import { CmsSettings } from "../types/pbcmssetting";

export default ({ strapi }: { strapi: Strapi }) => ({
  async getCmsSettings(ctx: any) {
    let response = {} as CmsSettings;
    try {
      response = await strapi
        .plugin("pabu")
        .service("pbcmssettings")
        .getCmsSettings();
    } catch (error) {
      console.log("[getCmsSettings] failed to get cmsSettings exception:");
      console.log(error);
    }
    return response;
  },
});
