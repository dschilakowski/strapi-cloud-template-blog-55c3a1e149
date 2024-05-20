declare module "@strapi/design-system/*";
declare module "@strapi/design-system";
declare module "@strapi/icons";
declare module "@strapi/icons/*";
declare module "@strapi/helper-plugin";

export interface StrapiUploadFile {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: {
    [key: string]: StrapiUploadFileFormat;
  };
  hash: string;
  ext?: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  folderPath?: string;
  createdAt: string;
  updatedAt: string;
  localizations?: {
    [locale: string]: StrapiUploadFileLocalization;
  };
  pbFile?: PbFile;
}

declare type StrapiUploadFileFormat = {
  name: string;
  hash: string;
  ext?: string;
  mime: string;
  path?: string;
  width?: number;
  height?: number;
  size: number;
  url: string;
};

export interface StrapiUploadFileLocalization {
  alternativeText: string;
  caption?: string;
  title?: string;
  description?: string;
  isStrapiDefault: boolean;
}

export interface StrapiUploadFolder {
  id: number;
  name: string;
  pathId: number;
  path: string;
  createdAt: string;
  updatedAt: string;
}

export interface PbFile {
  id: number;
  fileId: number;
  name: string;
  alternativeText: string;
  caption: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  localizations?: PbFile[];
}

export interface PbFileLocalizations {
  [locale: string]: {
    alternativeText: string;
    caption: string;
    title: string;
    isStrapiDefault: boolean;
  };
}

/* TODO: */
export interface Str extends StoreType {
  setting: Array<StrGoogleFont | any>;
}
export interface Cesstr extends StoreType {
  setting: Array</* CesstrHeadline | */ any>;
}

/* General-Part that all storeTypes share: */
export interface StoreType {
  id: number;
  name: string;
  type: string;
  struuid: string;
}

/* General-Part that all storeTypeSettingComponents share: */
export interface StoreTypeSettingComponent {
  id: number;
  strname: string;
  strinfo: string;
}

export interface StrGoogleFont extends StoreTypeSettingComponent {
  googleFontCssImport: string;
  googleFontFamily: string;
  defaultLineHeight: string;
}

export interface CesstrHeadline extends StoreTypeSettingComponent {
  /* TODO: final result in json (int) or type for strapi (json) */
  // spaceX: string;
  // spaceY: string;
  // headlineheading: string;
  // subheadlineheading: string;
  // typographys: string;
  // fontColors: string;
  // bgColors: string;
  // spacerHeadline: integer;
}

export interface PbFileResponse {
  breadcrumb: string;
  parents: Array<StrapiUploadFolder>;
  folders: Array<StrapiUploadFolder>;
  files: Array<StrapiUploadFile>;
}
