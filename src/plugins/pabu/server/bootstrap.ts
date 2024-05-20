import { Strapi } from "@strapi/strapi";
import { getFullPopulateObject } from "./populateHelper";

export default async ({ strapi }: { strapi: Strapi }) => {
  await strapi.service("plugin::pabu.pblicense").init();
  // bootstrap phase
  strapi.db!.lifecycles.subscribe({
    models: ["plugin::upload.file"],

    async afterCreate(event: any) {
      strapi.log.info(
        `[plugin::pabu.pbfile] create i18n entry for media ${event.result.name}`
      );

      await strapi
        .service("plugin::pabu.pbfile")
        .mediaLibraryCreateEvent(event.result);
    },

    async afterUpdate(event: any) {
      strapi.log.info(
        `[plugin::pabu.pbfile] update i18n entry for media ${event.result.name}`
      );

      await strapi
        .service("plugin::pabu.pbfile")
        .mediaLibraryUpdateEvent(event.result);
    },

    async beforeDelete(event) {
      strapi.log.info(
        `[plugin::pabu.pbfile] delete i18n ${event.params.where.id}`
      );
      await strapi
        .service("plugin::pabu.pbfile")
        .mediaLibraryDeleteEvent(event.params.where.id);
    },

    async beforeDeleteMany(event) {
      strapi.log.info(
        `[plugin::pabu.pbfile] delete i18n ${event.params.where.id}`
      );
      await strapi
        .service("plugin::pabu.pbfile")
        .mediaLibraryDeleteEvent(event.params.where.id);
    },
  });

  // modified version of https://github.com/Barelydead/strapi-plugin-populate-deep
  strapi.db!.lifecycles.subscribe((event) => {
    if (event.action === "beforeFindMany" || event.action === "beforeFindOne") {
      const populate = event.params?.populate;

      if (populate && populate[0] === "pb-deep") {
        const depth = populate[1] ?? 5;
        const modelObject: any = getFullPopulateObject(event.model.uid, depth);
        event.params.populate = modelObject.populate;
      }
    }
  });

  strapi.db!.lifecycles.subscribe(async (event) => {
    if (event.action === "afterFindMany" || event.action === "afterFindOne") {
      // TODO: maybe not only relevant for pb-page
      if (event.model.uid === "plugin::pabu.pbpage") {
        if (event["result"]) {
          await strapi
            .service("plugin::pabu.pbfile")
            .addLocalizationsToMediaObjects(event["result"]);
        }
      }
    }
  });

  await strapi.service("plugin::pabu.settings").createNecessaryFolders();

  const strDefaults = await strapi
    .service("plugin::pabu.str")
    .createDefaultStoreValues();

  const cesstrDefaults = await strapi
    .service("plugin::pabu.cesstr")
    .createDefaultContentElementSettingsStoreValues();

  // Preconfigure the ListViews if defaults were created.
  if (strDefaults) {
    await strapi.service("plugin::pabu.str").initializeStrListView();
  }
  if (cesstrDefaults) {
    await strapi.service("plugin::pabu.cesstr").initializeCesstrListView();
  }

  // Init default global config or regenerate config-global.json & css if strDefaults were created.
  await strapi
    .service("plugin::pabu.glbl")
    .createDefaultGlobalConfig(strDefaults);

  await strapi.service("plugin::pabu.pbpage").init();

  await strapi.service("plugin::pabu.pbsearch").init();

  await strapi.service("plugin::pabu.pbemail").init();

  await strapi.service("plugin::pabu.pbfile").initMediaManagerRootFolder();
};
