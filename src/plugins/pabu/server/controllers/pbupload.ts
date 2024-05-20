import { Strapi } from "@strapi/strapi";
import { ChunkUploadProgress } from "../types/pbupload";

export default ({ strapi }: { strapi: Strapi }) => ({
  async cmsChunkUpload(ctx: any) {
    let response = {} as ChunkUploadProgress;
    try {
      response = await strapi
        .plugin("pabu")
        .service("pbupload")
        .pbUploadChunk(ctx.request.body);
    } catch (error) {
      console.log("[cmsChunkUpload] failed to upload chunk unhandled exception:");
      console.log(error);
      response.status = "failed";
    }
    return response;
  },
});
