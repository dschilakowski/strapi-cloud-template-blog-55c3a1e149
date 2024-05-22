import { STORE_MODULE_UID } from "../constants";
import pbEntityService from "./pbEntityService";

const fs = require("fs-extra");

const getRootFolder = () => {
  return process.env.NODE_ENV === "development" ? "" : process.cwd() + "/";
};

export default {
  /**
   * Returns the path to the font file. Checks for environment.
   * @param {String} fontName e.g. "TimesNewRoman"
   * @returns
   */
  getFontFilePath(fontName) {
    return `${process.env.PABU_PUBLIC_FRONTEND_URL}/api/assets/fonts/${fontName}/${fontName}.ttf`;
  },

  /**
   * Copy strapi strapiFileObject into /public/assets/fonts
   * @param {String} fileName name inside the fonts directory.
   * @param {Object} strapiFileObject which copy to fonts directory
   */
  async copyFontFile(fileName, strapiFileObject) {
    // Note: In the current state we only allow .ttf-Font-Files.
    // TODO: This might change in the future.
    if (!strapiFileObject || strapiFileObject.ext !== ".ttf") {
      strapi.log.error(
        `Missing or incorrect fontFile (${strapiFileObject?.ext})`
      );
      return;
    }
    const path = `${getRootFolder()}public/assets/fonts/${fileName}`;
    const filePath = `${path}/${fileName}${strapiFileObject.ext}`;
    try {
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
      }
      if (fs.existsSync(filePath)) {
        fs.removeSync(filePath);
      }
      fs.copyFileSync(
        `${getRootFolder()}public${strapiFileObject.url}`,
        filePath
      );
    } catch (error) {
      strapi.log.error(
        `error while trying to create ${getRootFolder()}public/assets/fonts/${fileName}`
      );
      strapi.log.debug(error);
    }
  },
  /**
   * Compares uploaded fonts from store with name of directories in public/assets/fonts.
   * Removes unused fonts.
   */
  async cleanFonts() {
    // TODO: store TSd
    // const storeFontEntries: Array<StoreEntry> | null =
    const storeFontEntries: Array<any> | null = (await pbEntityService.findMany(
      STORE_MODULE_UID,
      {
        fields: ["*"],
        filters: {
          name: {
            $startsWith: "font:",
          },
        },
        sort: {},
        populate: "pb-deep",
      }
    )) as any;

    if (!storeFontEntries) {
      return;
    }

    let storeFontNames: Array<String> = [];
    for (const storeFont of storeFontEntries) {
      if (storeFont.setting[0] && storeFont.setting[0].fontName) {
        storeFontNames.push(storeFont.setting[0].fontName);
      }
    }

    const path = `${getRootFolder()}public/assets/fonts/`;
    const directories = fs.readdirSync(path);

    for (const directory of directories) {
      if (!storeFontNames.includes(directory)) {
        strapi.log.info(`Removed unused font-Folder: ${directory}.`);
        fs.remove(`${path}/${directory}`);
      }
    }
  },
};
