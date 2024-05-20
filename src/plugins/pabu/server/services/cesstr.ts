import { CESSTR_MODULE_UID, CES_STORE_DEFAULTS_STRUUIDS } from "../constants";
import { sleep } from "../utils/functions";
import pbEntityService from "./pbEntityService";
const { ValidationError } = require("@strapi/utils").errors;

export default {
  /**
   * createDefaultContentElementSettingsStoreValues:
   * Creates contentElementSettings values if there are no entries in the store.
   */
  async createDefaultContentElementSettingsStoreValues() {
    let createdDefaultCesStoreValues = false;
    const cesStoreEntries = await pbEntityService.findMany(CESSTR_MODULE_UID, {
      fields: ["*"],
      filters: {},
      sort: {},
      populate: "pb-deep",
    });

    if (cesStoreEntries) {
      if (cesStoreEntries.length === 0) {
        strapi.log.info(
          "[plugin::pabu.cesstr] Creating default contentElementSettingsStore-Entries..."
        );
      }
      try {
        let defaultCesstrCreated = false;
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.cshdln")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.cshdln",
                  strname: "Headline (default)",
                },
              ],
              struuid: "7c382c89-f0fb-4d5a-aa7c-667d887aca1c",
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        // TBD: defaultContentElementSettings
        // if (!doesCesstrTypeExist(cesStoreEntries, "pb.cshdln")) {
        //   await pbEntityService.create(CESSTR_MODULE_UID, {
        //     data: {
        //       // Make sure to add `skipLifecycle: true` to all default entries.
        //       skipLifecycle: true,
        //       setting: [
        //         {
        //           __component: "pb.cshdln",
        //           strname: "Headline title (default)",
        //         },
        //       ],
        //       struuid: "74def933-f046-4a7f-9e9c-6979c9196824",
        //     },
        //   });
        //   defaultCesstrCreated = true;
        // await sleep(250);
        // }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.csrchtxt")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.csrchtxt",
                  strname: "Richtext (default)",
                },
              ],
              struuid: "883e99af-aef1-48e1-a692-5565cf04af98",
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.csbttn")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.csbttn",
                  strname: "Button (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["csbttn"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.csfrm")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.csfrm",
                  strname: "Form (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["csfrm"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.cssprtr")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.cssprtr",
                  strname: "Separator (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["cssprtr"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.csspcr")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.csspcr",
                  strname: "Spacer (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["csspcr"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.csgllry")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.csgllry",
                  strname: "Gallery (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["csgllry"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.csmg")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.csmg",
                  strname: "Image (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["csmg"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.csmltmd")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.csmltmd",
                  strname: "Multimedia (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["csmltmd"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.cscrsl")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.cscrsl",
                  strname: "Carousel (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["cscrsl"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.csmgtckr")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.csmgtckr",
                  strname: "Image Ticker (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["csmgtckr"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.cstwi")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.cstwi",
                  strname: "Text with Image (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["cstwi"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.cscrds")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.cscrds",
                  strname: "Cards (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["cscrds"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }
        if (!doesCesstrTypeExist(cesStoreEntries, "pb.csccrdn")) {
          await pbEntityService.create(CESSTR_MODULE_UID, {
            data: {
              // Make sure to add `skipLifecycle: true` to all default entries.
              skipLifecycle: true,
              setting: [
                {
                  __component: "pb.csccrdn",
                  strname: "Accordion (default)",
                },
              ],
              struuid: CES_STORE_DEFAULTS_STRUUIDS["csccrdn"],
            },
          });
          defaultCesstrCreated = true;
          await sleep(250);
        }

        // Regenerates Settings & CSS if a default entry was created.
        if (defaultCesstrCreated) {
          await strapi
            .service("plugin::pabu.settings")
            .regenerateSettingsJSONs(["cesstr"]);
          createdDefaultCesStoreValues = true;
        }
      } catch (error) {
        strapi.log.error(
          "[plugin::pabu.cesstr] Could not create default contentElementSettingsStore Entries.",
          error
        );
      }
    }
    return createdDefaultCesStoreValues;
  },
  /**
   * getAllCesStoreEntriesOfType:
   * Returns all contentElementSettingsStoreEntries by storeType (richtext, headline) by matching with
   * store.name (startswith: ${storeType}:)
   * @returns {Promise<Array<any>}
   */
  async getAllCesStoreEntriesOfType(storeType: string) {
    const storeEntries = await pbEntityService.findMany(CESSTR_MODULE_UID, {
      fields: ["*"],
      filters: {
        name: {
          $startsWith: `${storeType}:`,
        },
      },
      sort: {},
      populate: "pb-deep",
    });
    return storeEntries ? storeEntries : [];
  },
  async initializeCesstrListView() {
    const pluginStore = strapi.store({
      // Note: NOT strapi.config.environment!
      environment: "",
      type: "plugin",
      // Note: NOT -!
      name: "content_manager_configuration",
    });

    await pluginStore.set({
      key: "content_types::plugin::pabu.cesstr",
      value: {
        uid: "plugin::pabu.cesstr",
        settings: {
          bulkable: true,
          filterable: true,
          searchable: true,
          pageSize: 50,
          mainField: "name",
          defaultSortBy: "type",
          defaultSortOrder: "ASC",
        },
        metadatas: {
          id: {
            edit: {},
            list: { label: "id", searchable: true, sortable: true },
          },
          name: {
            edit: {
              label: "name",
              description: "",
              placeholder: "",
              visible: true,
              editable: true,
            },
            list: { label: "name", searchable: true, sortable: true },
          },
          type: {
            edit: {
              label: "type",
              description: "",
              placeholder: "",
              visible: true,
              editable: true,
            },
            list: { label: "type", searchable: true, sortable: true },
          },
          struuid: {
            edit: {
              label: "struuid",
              description: "",
              placeholder: "",
              visible: true,
              editable: true,
            },
            list: { label: "struuid", searchable: true, sortable: true },
          },
          setting: {
            edit: {
              label: "setting",
              description: "",
              placeholder: "",
              visible: true,
              editable: true,
            },
            list: { label: "setting", searchable: false, sortable: false },
          },
          createdAt: {
            edit: {
              label: "createdAt",
              description: "",
              placeholder: "",
              visible: false,
              editable: true,
            },
            list: { label: "createdAt", searchable: true, sortable: true },
          },
          updatedAt: {
            edit: {
              label: "updatedAt",
              description: "",
              placeholder: "",
              visible: false,
              editable: true,
            },
            list: { label: "updatedAt", searchable: true, sortable: true },
          },
          createdBy: {
            edit: {
              label: "createdBy",
              description: "",
              placeholder: "",
              visible: false,
              editable: true,
              mainField: "firstname",
            },
            list: { label: "createdBy", searchable: true, sortable: true },
          },
          updatedBy: {
            edit: {
              label: "updatedBy",
              description: "",
              placeholder: "",
              visible: false,
              editable: true,
              mainField: "firstname",
            },
            list: { label: "updatedBy", searchable: true, sortable: true },
          },
        },
        layouts: {
          edit: [
            [
              { name: "name", size: 6 },
              { name: "type", size: 6 },
            ],
            [{ name: "struuid", size: 6 }],
            [{ name: "setting", size: 12 }],
          ],
          list: ["id", "name", "type", "updatedAt"],
        },
      },
    });

    strapi.log.info("Initialized ListView: pabu.cesstr");
  },

  /**
   * isDefaultCeSetting:
   * Returns true if the entry is the default CeSetting (cesstr-Entry) of its type.
   * @returns {boolean}
   */
  async isDefaultCeSetting(cesstrId) {
    const cesstrEntry: any = await pbEntityService.findOne(
      CESSTR_MODULE_UID,
      cesstrId,
      {
        fields: ["*"],
        filters: {},
        sort: {},
        populate: "pb-deep",
      }
    );
    if (
      cesstrEntry &&
      cesstrEntry.setting &&
      CES_STORE_DEFAULTS_STRUUIDS[
        cesstrEntry.setting[0].__component.replace("pb.", "")
      ] === cesstrEntry.struuid
    ) {
      return true;
    }
    return false;
  },

  /**
   * preventDeleteDefault:
   * Throws a validationError if the cesstrId belongs to a default CE-Setting.
   * @returns
   */
  async preventDeleteDefault(cesstrId: number) {
    if (
      await strapi.service("plugin::pabu.cesstr").isDefaultCeSetting(cesstrId)
    ) {
      throw new ValidationError(
        `Default Content-Element-Setting (id: ${cesstrId}) can't be deleted.`
      );
    }
  },

  /**
   * preventDeleteDefaults:
   * Throws a validationError if array includes a cesstrId that belongs to a default CE-Setting.
   * @returns
   */
  async preventDeleteDefaults(cesstrIds: Array<number>) {
    let defaultCeSettings: Array<number> = [];
    for (const cesstrId of cesstrIds) {
      if (
        await strapi.service("plugin::pabu.cesstr").isDefaultCeSetting(cesstrId)
      ) {
        defaultCeSettings.push(cesstrId);
      }
    }
    if (defaultCeSettings.length > 0) {
      throw new ValidationError(
        `Selection includes default Content-Element-Settings (ids: ${defaultCeSettings.join(
          ", "
        )}) that can't be deleted.`
      );
    }
  },
};

/**
 * doesCesstrTypeExist:
 * Returns true if cesstr of this type (__component:-Value) does exist.
 * @returns {boolean}
 */
const doesCesstrTypeExist = (cesstrs: Array<any>, cesstrType: string) => {
  return cesstrs.find(
    (cesstr) =>
      cesstr.setting &&
      cesstr.setting[0] &&
      cesstr.setting[0].__component === cesstrType
  )
    ? true
    : false;
};
