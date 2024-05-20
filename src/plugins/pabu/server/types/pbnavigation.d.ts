export interface PbNavigationUpdateData {
  id: number;
  name: string;
  logoUrl: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  pages: NavPageElement[];
  logo: any;
  localizations: any[];
}

export interface NavPageElement {
  __component: string;
  id: number;
  pageId: number;
  subPages: any[];
  name: string;
  externalUrl: string;
  page: PageDetails;
}

export interface PageDetails {
  id: string;
  name: string;
  url: string;
  published: boolean;
  draftId: number;
  version?: string;
  seoSettings?: string;
  hasNavigation?: boolean;
  hasBreadcrumbs?: boolean;
  hasFooter?: boolean;
  isPrivate?: boolean;
  permission?: any; // change later
  isDefault: boolean;
  createdAt?: string;
  updatedAt?: string;
  locale?: string;
  isUndeletable: any; // change later
  isSeoTitlePageTitle?: boolean;
  isPrivateDefault?: any; // change later
  canonicalLinkUrl: string | null;
  content: Array<any>;
  localizations: Array<any>;
}
