import { Common } from "@strapi/types/dist/types";

export const FILE_MODEL_UID: Common.UID.ContentType = "plugin::pabu.pbfile";
export const PAGE_MODULE_UID: Common.UID.ContentType = "plugin::pabu.pbpage";
export const FORM_MODULE_UID: Common.UID.ContentType = "plugin::pabu.pbform";
export const FORMENTRY_MODULE_UID: Common.UID.ContentType =
  "plugin::pabu.pbformentry";
export const NAVIGATION_MODULE_UID: Common.UID.ContentType =
  "plugin::pabu.pbnavigation";
export const DYNAMICLIST_MODULE_UID: Common.UID.ContentType =
  "plugin::pabu.pbdynamiclist";
export const STORE_MODULE_UID: Common.UID.ContentType = "plugin::pabu.str";
export const CESSTR_MODULE_UID: Common.UID.ContentType = "plugin::pabu.cesstr";
export const GLOBAL_MODULE_UID: Common.UID.ContentType = "plugin::pabu.glbl";
export const LICENSE_MODULE_UID: Common.UID.ContentType =
  "plugin::pabu.pblicense";
export const EMAIL_SETTING_MODULE_UID: Common.UID.ContentType =
  "plugin::pabu.pbemailsetting";
export const CMS_SETTING_MODULE_UID: Common.UID.ContentType =
  "plugin::pabu.pbcmssetting";
export const CMS_ROOT_PAGE_URL = "/";
export const CMS_ROOT_PAGE_NAME = "root";
export const CMS_SEARCH_PAGE_URL = "search";
export const CMS_SEARCH_PAGE_NAME = "Search";
export const SITEMAP_EXCLUDED_URLS = ["user/login", "htaccess"];
export const HARDCODED_MOBILE_SCALING_FACTOR = 0.5;
export const HARDCODED_TABLET_SCALING_FACTOR = 0.7;
export const MEDIA_MANAGER_ROOT_FOLDER = "pb_media_manager";

/* Defaults */
export const TYPOGRAPHY_P_DEFAULT_SETTING = {
  __component: "pb.stypgrphy",
  strname: "paragraph (default)",
  htmlElement: "p",
  fontSize: { mobile: 14, desktop: 16 },
  lineHeight: "1.2",
  fontWeight: 400,
  additionalCss: "letter-spacing: normal; text-transform: none;",
  marginRichText: 6,
};

export const TYPOGRAPHY_H1_DEFAULT_SETTING = {
  __component: "pb.stypgrphy",
  strname: "h1 (default)",
  htmlElement: "h1",
  fontSize: { mobile: 21, desktop: 42 },
  lineHeight: "1.2",
  fontWeight: 600,
  additionalCss: "letter-spacing: normal; text-transform: none;",
  marginRichText: 6,
};

export const TYPOGRAPHY_H2_DEFAULT_SETTING = {
  __component: "pb.stypgrphy",
  strname: "h2 (default)",
  htmlElement: "h2",
  fontSize: { mobile: 18, desktop: 32 },
  lineHeight: "1.2",
  fontWeight: 600,
  additionalCss: "letter-spacing: normal; text-transform: none;",
  marginRichText: 6,
};

export const TYPOGRAPHY_H3_DEFAULT_SETTING = {
  __component: "pb.stypgrphy",
  strname: "h3 (default)",
  htmlElement: "h3",
  fontSize: { mobile: 16, desktop: 24 },
  lineHeight: "1.2",
  fontWeight: 600,
  additionalCss: "letter-spacing: normal; text-transform: none;",
  marginRichText: 6,
};

export const TYPOGRAPHY_H4_DEFAULT_SETTING = {
  __component: "pb.stypgrphy",
  strname: "h4 (default)",
  htmlElement: "h4",
  fontSize: { mobile: 14, desktop: 20 },
  lineHeight: "1.2",
  fontWeight: 600,
  additionalCss: "letter-spacing: normal; text-transform: none;",
  marginRichText: 6,
};

export const TYPOGRAPHY_H5_DEFAULT_SETTING = {
  __component: "pb.stypgrphy",
  strname: "h5 (default)",
  htmlElement: "h5",
  fontSize: { mobile: 14, desktop: 18 },
  lineHeight: "1.2",
  fontWeight: 600,
  additionalCss: "letter-spacing: normal; text-transform: none;",
  marginRichText: 6,
};

export const TYPOGRAPHY_H6_DEFAULT_SETTING = {
  __component: "pb.stypgrphy",
  strname: "h6 (default)",
  htmlElement: "h6",
  fontSize: { mobile: 14, desktop: 16 },
  lineHeight: "1.2",
  fontWeight: 600,
  additionalCss: "letter-spacing: normal; text-transform: none;",
  marginRichText: 6,
};

export const BUTTON_DEFAULT_SETTING = {
  __component: "pb.sbttn",
  strname: "button (default)",
  fontSize: { mobile: 14, desktop: 16 },
  lineHeight: "1.2",
  fontWeight: 600,
  border: "border: 1px solid #6c757d; border-radius: 5;",
  buttonWidth: { minWidth: 100, maxWidth: 350 },
  buttonPadding: { horizontal: 25, vertical: 5 },
  additionalCss: "letter-spacing: normal; text-transform: none;",
  additionalCssHover: "letter-spacing: normal; text-transform: none;",
};

export const LINK_DEFAULT_SETTING = {
  __component: "pb.slnk",
  strname: "link (default)",
  fontSize: { mobile: 14, desktop: 16 },
  fontWeight: 600,
  lineHeight: "1.2",
  additionalCss: "letter-spacing: normal; text-transform: none;",
  additionCssHover: "text-decoration: underline;",
};

export const RICHTEXT_STORE_DEFAULT_SETTING = {
  __component: "pb.srchtxt",
  strname: "richtext editor (default)",
  bold: true,
  italic: true,
  underlined: true,
  crossedout: false,
  link: true,
  subscript: false,
  superscript: false,
  alignleft: true,
  alignright: true,
  aligncenter: true,
  indentationreduce: true,
  indentationincrease: true,
  listbullet: true,
  listnumber: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  html: true,
  colors: true,
};

// Note: Keep this global (glbl) DEFAULT always updated.
export const GLOBAL_DEFAULT = {
  responsive: {
    id: 1,
    breakpoints: {
      wqhd: 3840,
      mobile: 768,
      tablet: 1366,
      desktop: 2560,
    },
  },
  layout: {
    id: 1,
    containerWidth: "100%",
    containerBgColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    scalingfactorSpaceX: {
      wqhd: 1.25,
      mobile: 0.5,
      tablet: 0.75,
      desktop: 1,
    },
    scalingfactorSpaceY: {
      wqhd: 1.25,
      mobile: 0.5,
      tablet: 0.75,
      desktop: 1,
    },
    verticalpadding: 30,
    verticalpaddingafterfirstelement: 30,
    verticalpaddingbeforefooter: 30,
    scalingfactorVerticalPadding: {
      wqhd: 1.25,
      mobile: 0.5,
      tablet: 0.75,
      desktop: 1,
    },
  },
  navigation: {
    id: 1,
    spaceX: { store: "str", values: [], storeType: "spaceX" },
    spaceY: { store: "str", values: [], storeType: "spaceY" },
    mobileNavDrawerWidth: "80%",
    mobileDrawerDropDirection: "left",
    linkTopLevel: { store: "str", storeType: "link", values: [] },
    linkLevel2: {
      store: "str",
      storeType: "link",
      values: [],
    },
    linkLevel3: {
      store: "str",
      storeType: "link",
      values: [],
    },
    bgColor: {
      store: "str",
      storeType: "color",
      values: [],
    },
    bgColorLinks: {
      store: "str",
      storeType: "color",
      values: [],
    },
    linkActiveColor: {
      store: "str",
      storeType: "color",
      values: [],
    },
    logoMaxHeight: {
      mobile: 50,
      desktop: 80,
    },
    onlyMobileNavigation: false,
    showSearch: true,
    showLanguageSwitch: true,
    showAllNavItems: false,
    additionalCss:
      ".navigation {}\n.navigation-desktop {}\n.navigation-desktop > .navigation-desktop-logo {}\n.navigation-desktop > nav {}\n.navigation-desktop > .navigation-desktop-action-group {}\n\n.navigation-mobile {}\n.navigation-mobile > .navigation-mobile-logo {}\n.navigation-mobile > .navigation-mobile-action-group {}\n.navigation-mobile-menu {}\n.navigation-mobile-header {}\n.navigation-mobile-menu > nav {}\n.navigation-mobile-menu > nav > .navigation-item {}\n.navigation-search {}",
  },
  footer: {
    id: 1,
    footerType: "default",
    bgColor: { store: "str", values: [], storeType: "color" },
    richtext: { store: "cesstr", values: [], storeType: "richtext" },
    fontColor: { store: "str", values: [], storeType: "color" },
    fontSize: 18,
    spaceX: { store: "str", values: [], storeType: "spaceX" },
    verticalSpace: { top: 0, bottom: 0 },
    linkFontColor: { store: "str", values: [], storeType: "color" },
    linkFontColorHover: {
      store: "str",
      values: [],
      storeType: "color",
    },
    copyrightTextJson: { cn: "", de: "", en: "" },
    socialMediaWidth: 290,
    socialMediaTitleType: "paragraph",
    repeatableElementWidth: 290,
    footerElementsAlignmentLeft: false,
    footerCol: { spaceX: 0, spaceY: 0 },
    border: "border: 0px solid #000000;",
    additionalCss: "",
  },
  seo: {
    id: 1,
    dailySitemapActive: false,
    disableImageOptimization: false,
    openExternalLinksInNewTab: false,
  },
  logo: {
    id: 1,
    favicon32x32: null,
    favicon64x64: null,
    favicon128x128: null,
    favicon192x192: null,
    androidicon: null,
    appletouchicon120x120: null,
    appletouchicon152x152: null,
    appletouchicon167x167: null,
    appletouchicon180x180: null,
  },
  forms: {
    id: 1,
    richtext: { store: "cesstr", values: [], storeType: "richtext" },
  },
  search: {
    id: 1,
    searchEnabled: true,
    searchPlaceholder: "",
    navSearchIconColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    navSearchIconRight: true,
    searchBarBgColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchBarFontColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchBarSearchIconColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchBarCloseIconColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchBarBgHoverColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchBarMaxWidth: 0,
  },
  searchresults: {
    id: 1,
    spaceX: {
      store: "str",
      values: [],
      storeType: "spaceX",
    },
    spaceY: {
      store: "str",
      values: [],
      storeType: "spaceY",
    },
    hlFontSize: { mobile: 30, desktop: 42 },
    hlStyle: "h1",
    subhlFontSize: { mobile: 24, desktop: 38 },
    subhlStyle: "h2",
    cthlFontSize: { mobile: 24, desktop: 32 },
    cthlStyle: "h2",
    rlFontColor: { store: "str", values: [], storeType: "color" },
    rlFontColorActive: {
      store: "str",
      values: [],
      storeType: "color",
    },
    sfBorderColor: { store: "str", values: [], storeType: "color" },
    contentTypeDivider: "1px solid #000",
    marginBetweenContentType: 15,
    elementSpace: { x: 20, y: 10 },
    listElementSpaceY: 6,
    searchFilterBgColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchFilterBorderColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchFilterDropdownBgColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchFilterDropdownBgColorHover: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchFilterDropdownFontColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchFilterChipBgColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchFilterChipFontColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchFilterBorderHoverColor: {
      store: "str",
      values: [],
      storeType: "color",
    },
    searchFilterChipBorder: "border: 1px solid #000",
  },
  multilanguage: {
    id: 1,
    languageSwitchEnabled: true,
    bgColor: { store: "str", values: [], storeType: "color" },
    borderColor: { store: "str", values: [], storeType: "color" },
    fontColor: { store: "str", values: [], storeType: "color" },
    hoverBgColor: { store: "str", values: [], storeType: "color" },
    hoverFontColor: { store: "str", values: [], storeType: "color" },
  },
  animation: {
    id: 1,
    triggerGap: 100,
    animationsMobile: false,
    triggerInitialAnimation: false,
  },
  scrolling: { id: 1, scrollEffect: "auto" },
  scrolltotop: {
    id: 1,
    enabled: false,
    bgColor: { store: "str", values: [], storeType: "color" },
    arrowColor: { store: "str", values: [], storeType: "color" },
    width: { wqhd: 70, mobile: 40, tablet: 50, desktop: 60 },
    height: { wqhd: 70, mobile: 40, tablet: 50, desktop: 60 },
    borderRadius: { wqhd: 35, mobile: 20, tablet: 25, desktop: 30 },
    scrollEffect: "auto",
    icon: null,
  },
  captchatype: { id: 1, formCaptchaType: "none" },
};

export const BODY_SELECTOR = ".am-pabu";

// replaces old .ql-editor
export const RICHTEXT_CONTENT_SELECTOR = ".pb-richtext";

export const CES_STORE_DEFAULTS_STRUUIDS = {
  cshdln: "7c382c89-f0fb-4d5a-aa7c-667d887aca1c",
  csrchtxt: "883e99af-aef1-48e1-a692-5565cf04af98",
  csbttn: "348e6c97-40f1-4f4d-978f-50e35e11bba8",
  csfrm: "2c65c8f1-6895-4076-8a84-6e84a44f1d36",
  cssprtr: "e72e8419-be3f-42d2-8d72-176755c672e1",
  csspcr: "fb3648c0-c2b1-43e6-8333-ab6f710d57d9",
  csgllry: "2ad50d10-a3b7-471d-9cb7-8cd5e352d7dc",
  csmg: "2ab0f444-96f4-4ea0-9157-0be0e61f7cde",
  csmltmd: "d00e5bb1-bbf2-412f-a773-d9b6fe59d6be",
  cscrsl: "c3aa15b4-5d8b-404c-a003-7e94a43de660",
  csmgtckr: "9947cfab-4e8f-470b-8c8a-a3d5a1d57ba0",
  cstwi: "0275ab3d-8787-40f7-b022-e15beba27c1a",
  cscrds: "44e1338a-6da1-4229-88a6-fb472617a289",
  csccrdn: "9776937b-9593-42a8-be2e-6e13e828edcb",
};

export const DEFAULT_AS_SELECTABLE_VALUE = -1;
