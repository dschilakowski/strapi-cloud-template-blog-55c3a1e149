import type { Schema, Attribute } from '@strapi/strapi';

export interface PbBrdcrmbsc extends Schema.Component {
  collectionName: 'components_pb_brdcrmbsc';
  info: {
    displayName: 'brdcrmbsc';
    description: '';
  };
  attributes: {
    enabled: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    link: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    separatorColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
  };
}

export interface PbCbttn extends Schema.Component {
  collectionName: 'components_pb_cbttn';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    btnText: Attribute.String;
    btnUrl: Attribute.Text;
    btnRel: Attribute.String;
    btnTarget: Attribute.Enumeration<['_blank', '_self', '_top', '_parent']> &
      Attribute.DefaultTo<'_self'>;
    btnGetParams: Attribute.String;
    btnHrefLang: Attribute.String;
    btnAnchorName: Attribute.String;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'button';
        values: [];
      }>;
    cfgStrButton: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'buttons';
        storeType: 'button';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'bgColors';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgPositionSelect: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'center'>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCccrdn extends Schema.Component {
  collectionName: 'components_pb_cccrdn';
  info: {
    displayName: 'accordion';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'pb.pnl', true>;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'accordion';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgAllToggledByDefault: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgAllowMultiPanelOpen: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgHeadlineType: Attribute.Enumeration<
      ['default', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph']
    > &
      Attribute.DefaultTo<'default'>;
    cfgStrTitleBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColorsTitle';
        storeType: 'color';
        values: [];
      }>;
    cfgStrActiveTitleBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColorsTitle';
        storeType: 'color';
        values: [];
      }>;
    cfgStrInnerHeadlineTitleTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.typographys';
        storeType: 'typography';
        values: [];
      }>;
    cfgStrInnerHeadlineTitleFont: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.fonts';
        storeType: 'font';
        values: [];
      }>;
    cfgStrInnerHeadlineTitleFontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.fontColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrInnerHeadlineTitleActiveFontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.fontColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrPanelBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColorsPanel';
        storeType: 'color';
        values: [];
      }>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCcrds extends Schema.Component {
  collectionName: 'components_pb_ccrds';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'pb.crd', true>;
    cfgCardColumnsAmount: Attribute.Enumeration<
      ['none', 'colAmount-2', 'colAmount-3', 'colAmount-4', 'colAmount-6']
    > &
      Attribute.DefaultTo<'colAmount-2'>;
    cfgCardAlignment: Attribute.Enumeration<
      ['center', 'flex-start', 'flex-end', 'space-between', 'space-evenly']
    > &
      Attribute.DefaultTo<'flex-start'>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'bgColors';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
    cfgImageMaxHeight: Attribute.Enumeration<['small', 'medium', 'big']> &
      Attribute.DefaultTo<'medium'>;
    cfgCardWidth: Attribute.Enumeration<
      ['cardwidth-100', 'cardwidth-95', 'cardwidth-90', 'cardwidth-85']
    > &
      Attribute.DefaultTo<'cardwidth-100'>;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationCardHover: Attribute.Enumeration<
      ['none', 'hover-floating', 'hover-zoom-in']
    > &
      Attribute.DefaultTo<'none'>;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'cards';
        values: [];
      }>;
    cfgStrInnerButtonButton: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'button.buttons';
        storeType: 'button';
        values: [];
      }>;
    cfgCardButtonAlignment: Attribute.Enumeration<
      ['center', 'flex-start', 'flex-end']
    > &
      Attribute.DefaultTo<'center'>;
  };
}

export interface PbCcrsl extends Schema.Component {
  collectionName: 'components_pb_ccrsls';
  info: {
    displayName: 'carousel';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'pb.crslsld', true>;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'carousel';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'bgColors';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgStrContainerColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'containerColors';
        values: [];
      }>;
    cfgStrBorderColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'borderColors';
        values: [];
      }>;
    cfgStrInnerHeadlineTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.typographys';
        storeType: 'typography';
        values: [];
      }>;
    cfgStrInnerHeadlineFont: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.fonts';
        storeType: 'font';
        values: [];
      }>;
    cfgStrInnerHeadlineFontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.fontColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrInnerSubheadlineTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'subheadline.typographys';
        storeType: 'typography';
        values: [];
      }>;
    cfgStrInnerSubheadlineFont: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'subheadline.fonts';
        storeType: 'font';
        values: [];
      }>;
    cfgStrInnerSubheadlineFontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'subheadline.fontColors';
        storeType: 'color';
        values: [];
      }>;
    cfgHeadlineType: Attribute.Enumeration<
      ['default', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph']
    > &
      Attribute.DefaultTo<'default'>;
    cfgSubheadlineType: Attribute.Enumeration<
      ['default', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph']
    > &
      Attribute.DefaultTo<'default'>;
    cfgStrInnerButtonButton: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'button.buttons';
        storeType: 'button';
        values: [];
      }>;
    cfgShowTitleInMobile: Attribute.Boolean & Attribute.DefaultTo<true>;
    cfgShowHeadlineInMobile: Attribute.Boolean & Attribute.DefaultTo<true>;
    cfgShowTextInMobile: Attribute.Boolean & Attribute.DefaultTo<true>;
    cfgShowButtonInMobile: Attribute.Boolean & Attribute.DefaultTo<true>;
    cfgUseHighestImageQuality: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
    cfgShadowLayerBottom: Attribute.Enumeration<
      ['default', 'with-layer', 'without-layer']
    > &
      Attribute.DefaultTo<'default'>;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCfrm extends Schema.Component {
  collectionName: 'components_pb_cfrm';
  info: {
    displayName: 'form';
    description: '';
  };
  attributes: {
    cfgSelectFormId: Attribute.Integer & Attribute.DefaultTo<0>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'form';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgStrInnerButtonSubmitButton: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'button.buttons';
        storeType: 'button';
        values: [];
      }>;
    cfgStrInnerButtonFileUploadButton: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'button.buttons';
        storeType: 'button';
        values: [];
      }>;
    cfgStrInnerButtonBackButton: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'button.buttons';
        storeType: 'button';
        values: [];
      }>;
    cfgStrInnerTypographyInputTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'inputTypography';
        storeType: 'typography';
        values: [];
      }>;
    cfgStrInnerTypographyInputLabelTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'inputLabelTypography';
        storeType: 'typography';
        values: [];
      }>;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCgllry extends Schema.Component {
  collectionName: 'components_pb_cgllry';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'pb.gllrysld', true>;
    cfgStrLayout: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'layouts';
        storeType: 'layout';
        values: [];
      }>;
    cfgUseHighestImageQuality: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'gallery';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgStrHoverColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'hoverColors';
        storeType: 'color';
        values: [];
      }>;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbChdln extends Schema.Component {
  collectionName: 'components_pb_chdln';
  info: {
    displayName: 'headline';
    description: '';
  };
  attributes: {
    primaryHeadline: Attribute.String;
    secondaryHeadline: Attribute.Text;
    cfgHeadlineAlignPrimary: Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Attribute.DefaultTo<'left'>;
    cfgHeadlineAlignSecondary: Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Attribute.DefaultTo<'left'>;
    cfgCustomClassName: Attribute.String;
    cfgAnchorName: Attribute.String;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'headline';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'bgColors';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgHeadlineTypePrimary: Attribute.Enumeration<
      ['default', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph']
    > &
      Attribute.DefaultTo<'default'>;
    cfgStrTypographyPrimary: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'typographys';
        storeType: 'color';
        values: [1];
      }>;
    cfgStrFontPrimary: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'font';
        settingsField: 'fonts';
        values: [];
      }>;
    cfgStrFontColorPrimary: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'fontColors';
        storeType: 'color';
        values: [];
      }>;
    cfgHeadlineTypeSecondary: Attribute.Enumeration<
      ['default', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph']
    > &
      Attribute.DefaultTo<'default'>;
    cfgStrTypographySecondary: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'color';
        settingsField: 'typographys';
        values: [];
      }>;
    cfgStrFontSecondary: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'font';
        settingsField: 'fonts';
        values: [];
      }>;
    cfgStrFontColorSecondary: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'fontColors';
        storeType: 'color';
        values: [];
      }>;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCmg extends Schema.Component {
  collectionName: 'components_pb_cmg';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    cfgHasOverlay: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgHideCaption: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgCaptionTextAlign: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'center'>;
    cfgCustomClassName: Attribute.String;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'image';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'bgColors';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgStrTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'typographys';
        storeType: 'typography';
        values: [];
      }>;
    cfgUseHighestImageQuality: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgAnchorName: Attribute.String;
    cfgImageObjectFit: Attribute.Enumeration<
      ['objectfit-contain', 'objectfit-cover', 'objectfit-none']
    > &
      Attribute.DefaultTo<'objectfit-contain'>;
    cfgImageIgnoresMaxWidth: Attribute.Boolean & Attribute.DefaultTo<false>;
    imgCaption: Attribute.String;
    img: Attribute.Media;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCmgtckr extends Schema.Component {
  collectionName: 'components_pb_cmgtckr';
  info: {
    displayName: 'image ticker';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'pb.mgtckrsld', true>;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'image ticker';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgStrSideShadowColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'sideShadowColors';
        storeType: 'color';
        values: [];
      }>;
    cfgIsStatic: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgEndlessLoop: Attribute.Boolean & Attribute.DefaultTo<true>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCmltmd extends Schema.Component {
  collectionName: 'components_pb_cmltmd';
  info: {
    displayName: 'multimedia';
    description: '';
  };
  attributes: {
    youtubeUrl: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    audio: Attribute.Media;
    video: Attribute.Media;
    videoTn: Attribute.Media;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'multimedia';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'bgColors';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCmscfgmdl extends Schema.Component {
  collectionName: 'components_pb_cmscfgmdl';
  info: {
    displayName: 'config modal settings';
    description: '';
  };
  attributes: {
    cfgmodalsort: Attribute.Component<'pb.cmscfgmdlsrt', true>;
  };
}

export interface PbCmscfgmdlsrt extends Schema.Component {
  collectionName: 'components_pb_cmscfgmdlsrt';
  info: {
    displayName: 'config modal sort';
    description: '';
  };
  attributes: {
    contentelementname: Attribute.String;
    sort: Attribute.JSON &
      Attribute.DefaultTo<{
        tabName1: ['cfgField1', 'cfgField2'];
        tabName2: ['cfgField3', 'cfgField4'];
      }>;
  };
}

export interface PbCmsrcptchv2 extends Schema.Component {
  collectionName: 'components_pb_cmsrcptchv2';
  info: {
    displayName: 'google recaptcha v2';
    description: '';
  };
  attributes: {
    recaptchav2publickey: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    recaptchav2privatekey: Attribute.Password;
  };
}

export interface PbCptchtpc extends Schema.Component {
  collectionName: 'components_pb_cptchtpc';
  info: {
    displayName: 'captcha type';
    description: '';
  };
  attributes: {
    formCaptchaType: Attribute.Enumeration<['none', 'googlerecaptchav2']> &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCrchtxt extends Schema.Component {
  collectionName: 'components_pb_crchtxt';
  info: {
    displayName: 'richtext';
    description: '';
  };
  attributes: {
    richTextContent: Attribute.RichText;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'richtext';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbCrd extends Schema.Component {
  collectionName: 'components_pb_crds';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    richTextContent: Attribute.RichText;
    linkUrl: Attribute.Text;
    linkText: Attribute.String;
    img: Attribute.Media;
    imgTitle: Attribute.String;
    linkRel: Attribute.String;
    linkTarget: Attribute.Enumeration<['_blank', '_self', '_top', '_parent']> &
      Attribute.DefaultTo<'_self'>;
    linkGetParams: Attribute.String;
    linkHrefLang: Attribute.String;
    linkAnchor: Attribute.String;
    cfgCardImageObjectFit: Attribute.Enumeration<
      ['contain', 'cover', 'coverTop', 'coverBottom']
    > &
      Attribute.DefaultTo<'cover'>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'bgColorsCards';
        values: [];
      }>;
  };
}

export interface PbCrdsc extends Schema.Component {
  collectionName: 'components_pb_crdsc';
  info: {
    displayName: 'crdsc';
    description: '';
  };
  attributes: {
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceCardsY: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<15>;
    bgColorPrimary: Attribute.Relation<
      'pb.crdsc',
      'oneToOne',
      'plugin::pabu.str'
    >;
    bgColorSecondary: Attribute.Relation<
      'pb.crdsc',
      'oneToOne',
      'plugin::pabu.str'
    >;
    cardBgColor: Attribute.Relation<'pb.crdsc', 'oneToOne', 'plugin::pabu.str'>;
    border: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border: 1px solid #6c757d; border-radius: 5;'>;
    boxShadow: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'1px 1px 5px rgb(0 0 0 / 35%)'>;
    shadowEnabled: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    imageMaxHeight: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        small: 75;
        medium: 125;
        big: 175;
      }>;
    minHeightImageContainer: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
    textPadding: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        left: 3;
        right: 3;
      }>;
    buttonStyle: Attribute.Enumeration<['primary', 'secondary', 'default']> &
      Attribute.DefaultTo<'primary'>;
    buttonMargin: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        top: 5;
        bottom: 5;
      }>;
  };
}

export interface PbCrslsld extends Schema.Component {
  collectionName: 'components_pb_crslsld';
  info: {
    displayName: 'carouselslide';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    secondHeadline: Attribute.Text;
    richTextContent: Attribute.RichText;
    linkUrl: Attribute.Text;
    linkText: Attribute.String;
    img: Attribute.Media;
    imgTitle: Attribute.String;
    linkRel: Attribute.String;
    linkTarget: Attribute.Enumeration<['_blank', '_self', '_top', '_parent']> &
      Attribute.DefaultTo<'_self'>;
    linkGetParams: Attribute.String;
    linkHrefLang: Attribute.String;
    linkAnchor: Attribute.String;
  };
}

export interface PbCsbttn extends Schema.Component {
  collectionName: 'components_pb_csbttn';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    buttons: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
  };
}

export interface PbCsccrdn extends Schema.Component {
  collectionName: 'components_pb_csccrdn';
  info: {
    displayName: 'accordion';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    panelMargin: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<10>;
    titleHeading: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    > &
      Attribute.DefaultTo<'h3'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColorsTitle: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColorsPanel: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    headline: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    richtext: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    textPadding: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        left: 0;
        right: 0;
      }>;
    border: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border: 1px solid #00000020; border-radius: 0;'>;
  };
}

export interface PbCscrds extends Schema.Component {
  collectionName: 'components_pb_cscrds';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    richtext: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    button: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColorsCards: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    border: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border: 1px solid black; border-radius: 8px;'>;
    imageBorder: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border-top-left-radius: 8px; border-top-right-radius: 8px;'>;
    shadow: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);'>;
    showImage: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    imageHeight: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        small: 100;
        medium: 150;
        big: 200;
      }>;
    spaceCards: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        x: 0;
        y: 50;
      }>;
    textMargin: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        top: 8;
        right: 8;
        bottom: 8;
        left: 8;
      }>;
    buttonMargin: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        top: 8;
        right: 8;
        bottom: 8;
        left: 8;
      }>;
  };
}

export interface PbCscrsl extends Schema.Component {
  collectionName: 'components_pb_cscrsl';
  info: {
    displayName: 'carousel';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    width: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'100%'>;
    height: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 300;
        tablet: 400;
        desktop: 500;
        wqhd: 600;
      }>;
    headline: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    subheadline: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    richtext: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    button: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    arrows: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    containerColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    borderColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    headlineheading: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    > &
      Attribute.DefaultTo<'h2'>;
    subheadlineheading: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    > &
      Attribute.DefaultTo<'h3'>;
    alignmentX: Attribute.Enumeration<['left', 'right', 'center']> &
      Attribute.DefaultTo<'center'>;
    alignmentY: Attribute.Enumeration<['top', 'center', 'bottom']> &
      Attribute.DefaultTo<'center'>;
    shadowLayerBottom: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    captionContainerTransparentPercentage: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<50>;
    captionContainerBorderTop: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    captionContainerBorderRight: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    captionContainerBorderBottom: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    captionContainerBorderLeft: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    captionContainerBorder: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border: 1px solid #6c757d; border-radius: 5px;'>;
    captionContainerOffset: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
    captionContainerHeadingsAlign: Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Attribute.DefaultTo<'center'>;
    captionContainerPadding: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        x: 10;
        y: 10;
      }>;
    captionContainerWidth: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'50%'>;
    captionContainerHeightPercentage: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<50>;
    buttonPlacement: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
    buttonMarginTop: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
    intervalMS: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<3000>;
  };
}

export interface PbCsfrm extends Schema.Component {
  collectionName: 'components_pb_csfrm';
  info: {
    displayName: 'form';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    maxWidth: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 470;
        tablet: 680;
        desktop: 992;
        wqhd: 1200;
      }>;
    headlineheading: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    > &
      Attribute.DefaultTo<'h3'>;
    headlineEnabled: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    formFieldInputSpace: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        aboveInput: 5;
        belowInput: 20;
      }>;
    inputBgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    inputBorder: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border: 3px solid #d2d4da; border-radius: 6px;'>;
    inputBorderHover: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border: 3px solid rgba(0, 0, 0, 0.87); border-radius: 6px;'>;
    border: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border: 1px solid #000000;'>;
    inputLabelTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    inputTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    button: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    additionalCss: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    additionalCssHover: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
  };
}

export interface PbCsgllry extends Schema.Component {
  collectionName: 'components_pb_csgllry';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    arrows: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    layouts: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'default,masonry,grid'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    hoverColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    imgHeight: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 200;
        tablet: 300;
        desktop: 400;
        wqhd: 600;
      }>;
    showThumbnails: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    showFullscreenButton: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    showPlayButton: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    fullScreenIconColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    fullScreenIconFilterCss: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'drop-shadow(0px 3px 2px rgba(134, 134, 134, 0.6))'>;
    masonryColumnCount: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 1;
        tablet: 3;
        desktop: 5;
        wqhd: 5;
      }>;
    masonryMaxWidthPercent: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<75>;
    masonrySpaceBetween: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<2>;
    gridImageSize: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        width: 100;
        height: 100;
      }>;
    gridMaxWidthPercent: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<75>;
    gridSpaceBetween: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<2>;
    gridColumnCount: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 1;
        tablet: 3;
        desktop: 4;
        wqhd: 5;
      }>;
  };
}

export interface PbCshdln extends Schema.Component {
  collectionName: 'components_pb_cshdln';
  info: {
    displayName: 'headline';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    headlineheading: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    > &
      Attribute.DefaultTo<'h2'>;
    subheadlineheading: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    > &
      Attribute.DefaultTo<'h3'>;
    typographys: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    fonts: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    fontColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    spacerHeadline: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
  };
}

export interface PbCsmg extends Schema.Component {
  collectionName: 'components_pb_csmg';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    typographys: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    maxWidthImagePX: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<600>;
    maxHeightImage: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 200;
        tablet: 300;
        desktop: 400;
        wqhd: 500;
      }>;
  };
}

export interface PbCsmgtckr extends Schema.Component {
  collectionName: 'components_pb_csmgtckr';
  info: {
    displayName: 'image ticker';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    imageTickerHeight: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 80;
        tablet: 90;
        desktop: 100;
        wqhd: 120;
      }>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    sideShadowColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    imageMarginRight: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
    slideSpeedScalingFactor: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<5>;
    opacity: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'0.6'>;
  };
}

export interface PbCsmltmd extends Schema.Component {
  collectionName: 'components_pb_csmltmd';
  info: {
    displayName: 'multimedia';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    mediaMaxWidth: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 300;
        tablet: 400;
        desktop: 600;
        wqhd: 600;
      }>;
  };
}

export interface PbCspcr extends Schema.Component {
  collectionName: 'components_pb_cspcr';
  info: {
    displayName: 'spacer';
    description: '';
  };
  attributes: {
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'spacer';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgIsDoubledHeight: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgAnchorName: Attribute.String;
    cfgCustomClassName: Attribute.String;
  };
}

export interface PbCsprtr extends Schema.Component {
  collectionName: 'components_pb_csprtr';
  info: {
    displayName: 'separator';
    description: '';
  };
  attributes: {
    cfgSeparatorTemplate: Attribute.Enumeration<
      [
        'shape-divider',
        'shape-triangle',
        'shape-skewed',
        'shape-waves',
        'shape-waves-opacity'
      ]
    > &
      Attribute.DefaultTo<'shape-divider'>;
    cfgShapeFlip: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgShapeHeight: Attribute.Enumeration<
      ['shape-height-small', 'shape-height-medium', 'shape-height-large']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'shape-height-medium'>;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'separator';
        values: [];
      }>;
    cfgStrBgColorTop: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrBgColorBottom: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'bgColors';
        storeType: 'color';
        values: [];
      }>;
  };
}

export interface PbCsrchrslts extends Schema.Component {
  collectionName: 'components_pb_csrchrslts';
  info: {
    displayName: 'searchresults';
    description: '';
  };
  attributes: {};
}

export interface PbCsrchtxt extends Schema.Component {
  collectionName: 'components_pb_csrchtxt';
  info: {
    displayName: 'richtext';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    richtext: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    fontColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    link: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    ptypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    h1typography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    h2typography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    h3typography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    h4typography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    h5typography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    h6typography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    textPadding: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        left: 0;
        right: 0;
      }>;
  };
}

export interface PbCsspcr extends Schema.Component {
  collectionName: 'components_pb_csspcr';
  info: {
    displayName: 'spacer';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    height: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 15;
        tablet: 20;
        desktop: 30;
        wqhd: 45;
      }>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
  };
}

export interface PbCssprtr extends Schema.Component {
  collectionName: 'components_pb_cssprtr';
  info: {
    displayName: 'separator';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    shapeHeight: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        small: 30;
        medium: 60;
        large: 120;
      }>;
  };
}

export interface PbCstwi extends Schema.Component {
  collectionName: 'components_pb_cstwi';
  info: {
    displayName: 'text with image';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    headline: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    richtext: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    button: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColors: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    maxWidthImage: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 300;
        tablet: 400;
        desktop: 500;
        wqhd: 600;
      }>;
    headlineheading: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    > &
      Attribute.DefaultTo<'h2'>;
    spacerHeadlineRichtext: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
    spacerMiddle: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<20>;
    spacerButton: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<20>;
    maxHeightImage: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 200;
        tablet: 300;
        desktop: 400;
        wqhd: 500;
      }>;
    ratio1: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'8/4'>;
    ratio2: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'7/5'>;
    ratio3: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'5/7'>;
    ratio4: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'4/8'>;
  };
}

export interface PbCtwi extends Schema.Component {
  collectionName: 'components_pb_ctwi';
  info: {
    displayName: 'text with image';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    richTextContent: Attribute.RichText;
    btnUrl: Attribute.Text;
    btnText: Attribute.String;
    youtubeUrl: Attribute.String;
    img: Attribute.Media;
    btnRel: Attribute.String;
    btnTarget: Attribute.Enumeration<['_blank', '_self', '_top', '_parent']> &
      Attribute.DefaultTo<'_self'>;
    btnGetParams: Attribute.String;
    btnHrefLang: Attribute.String;
    btnAnchorName: Attribute.String;
    cfgStrContentElementSetting: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'text with image';
        values: [];
      }>;
    cfgStrBackgroundColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'cesstr';
        storeType: 'color';
        settingsField: 'bgColors';
        values: [];
      }>;
    cfgStrBackground: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        storeType: 'background';
        values: [];
      }>;
    cfgStrInnerHeadlineTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.typographys';
        storeType: 'typography';
        values: [];
      }>;
    cfgStrInnerHeadlineFont: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.fonts';
        storeType: 'font';
        values: [];
      }>;
    cfgStrInnerHeadlineFontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'headline.fontColors';
        storeType: 'color';
        values: [];
      }>;
    cfgStrInnerButtonButton: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'button.buttons';
        storeType: 'button';
        values: [];
      }>;
    cfgImageLeft: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgImageTopInsteadOfRight: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgPositionImageOrTextAtTop: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgStrTextToImageRatio: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.json-value'> &
      Attribute.DefaultTo<{
        store: 'str';
        settingsField: 'ratio';
        storeType: 'custom';
        values: [];
      }>;
    cfgAnchorName: Attribute.String;
    cfgHeadlineType: Attribute.Enumeration<
      ['default', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph']
    > &
      Attribute.DefaultTo<'default'>;
    cfgImageObjectFit: Attribute.Enumeration<
      ['objectfit-contain', 'objectfit-cover', 'objectfit-none']
    > &
      Attribute.DefaultTo<'objectfit-contain'>;
    cfgImageIgnoresMaxWidth: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgCustomClassName: Attribute.String;
    cfgAnimationIn: Attribute.Enumeration<
      [
        'none',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight'
      ]
    > &
      Attribute.DefaultTo<'none'>;
    cfgAnimationOut: Attribute.Enumeration<
      [
        'none',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft'
      ]
    > &
      Attribute.DefaultTo<'none'>;
  };
}

export interface PbFrmbl extends Schema.Component {
  collectionName: 'components_pb_frmbl';
  info: {
    displayName: 'checkbox';
    icon: 'check';
  };
  attributes: {
    fieldLabel: Attribute.String;
    cfgFieldIsMandatory: Attribute.Boolean & Attribute.DefaultTo<false>;
    fieldValue: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgFieldCustomErrorMessage: Attribute.String;
    fieldRichTextDescription: Attribute.RichText;
    cfgFieldName: Attribute.String;
    cfgIsLabelFieldName: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PbFrmdt extends Schema.Component {
  collectionName: 'components_pb_frmdt';
  info: {
    displayName: 'date';
    icon: 'calendar-alt';
  };
  attributes: {
    fieldLabel: Attribute.String;
    cfgFieldPlaceholder: Attribute.String;
    cfgFieldIsMandatory: Attribute.Boolean & Attribute.DefaultTo<false>;
    fieldValue: Attribute.Date;
    cfgFieldCustomErrorMessage: Attribute.String;
    cfgFieldName: Attribute.String;
    cfgCalendarStart: Attribute.Date;
    cfgMaxDaysPast: Attribute.Integer;
    cfgMaxDaysFuture: Attribute.Integer;
    cfgNotAllowedDatesStart: Attribute.Date;
    cfgNotAllowedDatesEnd: Attribute.Date;
    cfgIsLabelFieldName: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PbFrmfl extends Schema.Component {
  collectionName: 'components_pb_frmfl';
  info: {
    displayName: 'file';
    icon: 'question';
  };
  attributes: {
    fieldLabel: Attribute.String;
    cfgFieldPlaceholder: Attribute.String;
    cfgFieldIsMandatory: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgFieldName: Attribute.String;
    cfgFieldCustomErrorMessage: Attribute.String;
    cfgFieldAllowedFileEndings: Attribute.String;
    fieldValue: Attribute.JSON;
    cfgFieldMaxFileSizeInMB: Attribute.Integer;
    cfgIsLabelFieldName: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PbFrmml extends Schema.Component {
  collectionName: 'components_pb_frmml';
  info: {
    displayName: 'email';
    icon: 'envelope';
  };
  attributes: {
    fieldLabel: Attribute.String;
    cfgFieldPlaceholder: Attribute.String;
    cfgFieldIsMandatory: Attribute.Boolean & Attribute.DefaultTo<false>;
    fieldValue: Attribute.Email;
    cfgFieldCustomErrorMessage: Attribute.String;
    cfgFieldName: Attribute.String;
    cfgIsLabelFieldName: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PbFrmnm extends Schema.Component {
  collectionName: 'components_pb_frmnm';
  info: {
    displayName: 'dropdown';
    icon: 'list';
  };
  attributes: {
    fieldLabel: Attribute.String;
    cfgFieldPlaceholder: Attribute.String;
    cfgFieldIsMandatory: Attribute.Boolean & Attribute.DefaultTo<false>;
    fieldDropdownValues: Attribute.JSON;
    cfgFieldCustomErrorMessage: Attribute.String;
    cfgFieldName: Attribute.String;
    fieldValue: Attribute.String;
    cfgIsLabelFieldName: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PbFrmsc extends Schema.Component {
  collectionName: 'components_pb_frmsc';
  info: {
    displayName: 'frmsc';
    description: '';
  };
  attributes: {
    richtext: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
  };
}

export interface PbFrmstr extends Schema.Component {
  collectionName: 'components_pb_frmstr';
  info: {
    displayName: 'string';
    icon: 'list-ol';
  };
  attributes: {
    fieldLabel: Attribute.String;
    cfgFieldPlaceholder: Attribute.String;
    cfgFieldIsMandatory: Attribute.Boolean & Attribute.DefaultTo<false>;
    fieldValue: Attribute.String;
    cfgFieldCharactersMax: Attribute.Integer;
    cfgFieldCharactersMin: Attribute.Integer;
    cfgFieldCustomErrorMessage: Attribute.String;
    cfgFieldCustomRegex: Attribute.String;
    cfgFieldName: Attribute.String;
    cfgFieldNoLetters: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgFieldNoNumbers: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgFieldNoSpecialCharacters: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgFieldNoWhitespaceCharacters: Attribute.Boolean &
      Attribute.DefaultTo<false>;
    cfgIsLabelFieldName: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PbFrmtxt extends Schema.Component {
  collectionName: 'components_pb_frmtxt';
  info: {
    displayName: 'text';
    icon: 'book';
  };
  attributes: {
    fieldLabel: Attribute.String;
    cfgFieldIsMandatory: Attribute.Boolean & Attribute.DefaultTo<false>;
    fieldValue: Attribute.Text;
    cfgFieldPlaceholder: Attribute.String;
    cfgFieldCustomErrorMessage: Attribute.String;
    cfgFieldCharactersMax: Attribute.Integer;
    cfgFieldCharactersMin: Attribute.Integer;
    cfgFieldName: Attribute.String;
    cfgFieldNoSpecialCharacters: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgFieldNoLetters: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgFieldNoNumbers: Attribute.Boolean & Attribute.DefaultTo<false>;
    cfgIsLabelFieldName: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PbFtrc extends Schema.Component {
  collectionName: 'components_pb_ftrc';
  info: {
    displayName: 'ftrc';
    description: '';
  };
  attributes: {
    footerType: Attribute.Enumeration<['default', 'sticky', 'parallax']> &
      Attribute.DefaultTo<'default'>;
    bgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    richtextFooter: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    verticalSpace: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        top: 0;
        bottom: 0;
      }>;
    copyrightTextJson: Attribute.JSON &
      Attribute.DefaultTo<{
        de: '';
        en: '';
        cn: '';
      }>;
    socialMediaWidth: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<290>;
    socialMediaTitleType: Attribute.Enumeration<
      ['paragraph', 'h2', 'h3', 'h4', 'h5', 'h6']
    > &
      Attribute.DefaultTo<'paragraph'>;
    repeatableElementWidth: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<290>;
    footerElementsAlignmentLeft: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    footerCol: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        spaceX: 0;
        spaceY: 0;
      }>;
    border: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border: 0px solid #000000;'>;
    additionalCss: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<''>;
  };
}

export interface PbGllrysld extends Schema.Component {
  collectionName: 'components_pb_gllrysld';
  info: {
    displayName: 'galleryslide';
    description: '';
  };
  attributes: {
    youtubeUrl: Attribute.String;
    img: Attribute.Media;
    vid: Attribute.Media;
    vtn: Attribute.Media;
  };
}

export interface PbLgc extends Schema.Component {
  collectionName: 'components_pb_lgc';
  info: {
    displayName: 'lgc';
    description: '';
  };
  attributes: {
    favicon32x32: Attribute.Media;
    favicon64x64: Attribute.Media;
    favicon128x128: Attribute.Media;
    favicon192x192: Attribute.Media;
    androidicon: Attribute.Media;
    appletouchicon120x120: Attribute.Media;
    appletouchicon152x152: Attribute.Media;
    appletouchicon167x167: Attribute.Media;
    appletouchicon180x180: Attribute.Media;
  };
}

export interface PbLsttem extends Schema.Component {
  collectionName: 'components_pb_lsttems';
  info: {
    displayName: 'lsttem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    richTextContent: Attribute.RichText;
    imgCaption: Attribute.String;
    linkUrl: Attribute.String;
    linkText: Attribute.String;
    linkAnchor: Attribute.String;
    videoUrl: Attribute.String;
    cfgLinkCanonical: Attribute.Boolean;
    itemType: Attribute.Enumeration<
      ['gallery', 'multimedia', 'image', 'richtext', 'link']
    > &
      Attribute.DefaultTo<'multimedia'>;
    cfgSettings: Attribute.JSON;
    img: Attribute.Media;
    vid: Attribute.Media;
    vtn: Attribute.Media;
    aud: Attribute.Media;
    doc: Attribute.Media;
    linkRel: Attribute.String;
    linkTarget: Attribute.Enumeration<['_blank', '_self', '_top', '_parent']> &
      Attribute.DefaultTo<'_self'>;
    linkGetParams: Attribute.String;
    linkHrefLang: Attribute.String;
    nestedlistitems: Attribute.Component<'pb.nstdlsttem', true>;
  };
}

export interface PbLytc extends Schema.Component {
  collectionName: 'components_pb_lytc';
  info: {
    displayName: 'lytc';
    description: '';
  };
  attributes: {
    containerWidth: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'100%'>;
    containerBgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    scalingfactorSpaceX: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 0.5;
        tablet: 0.75;
        desktop: 1;
        wqhd: 1.25;
      }>;
    scalingfactorSpaceY: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 0.5;
        tablet: 0.75;
        desktop: 1;
        wqhd: 1.25;
      }>;
    verticalpadding: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<30>;
    verticalpaddingafterfirstelement: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<30>;
    verticalpaddingbeforefooter: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<30>;
    scalingfactorVerticalPadding: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 0.5;
        tablet: 0.75;
        desktop: 1;
        wqhd: 1.25;
      }>;
  };
}

export interface PbMgc extends Schema.Component {
  collectionName: 'components_pb_mgc';
  info: {
    displayName: 'mgc';
    description: '';
  };
  attributes: {
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    maxWidthImage: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<600>;
    maxHeightImage: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 200;
        tablet: 300;
        desktop: 400;
        wqhd: 500;
      }>;
    captionFontSize: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<10>;
    bgColorPrimary: Attribute.Relation<
      'pb.mgc',
      'oneToOne',
      'plugin::pabu.str'
    >;
    bgColorSecondary: Attribute.Relation<
      'pb.mgc',
      'oneToOne',
      'plugin::pabu.str'
    >;
  };
}

export interface PbMgtckrsld extends Schema.Component {
  collectionName: 'components_pb_mgtckrsld';
  info: {
    displayName: 'imagetickerslide';
    description: '';
  };
  attributes: {
    imageUrl: Attribute.String;
    img: Attribute.Media;
    linkRel: Attribute.String;
    linkTarget: Attribute.Enumeration<['_blank', '_self', '_top', '_parent']> &
      Attribute.DefaultTo<'_self'>;
    linkGetParams: Attribute.String;
    linkHrefLang: Attribute.String;
    linkAnchor: Attribute.String;
  };
}

export interface PbMlc extends Schema.Component {
  collectionName: 'components_pb_mlc';
  info: {
    displayName: 'email: config';
    icon: 'mail-bulk';
    description: '';
  };
  attributes: {
    fromAddress: Attribute.String;
    replyAddress: Attribute.String;
  };
}

export interface PbMltlnggc extends Schema.Component {
  collectionName: 'components_pb_mltlnggc';
  info: {
    displayName: 'mltlnggc';
    description: '';
  };
  attributes: {
    languageSwitchEnabled: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    bgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    borderColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    fontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    hoverBgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    hoverFontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
  };
}

export interface PbMltmdc extends Schema.Component {
  collectionName: 'components_pb_mltmdc';
  info: {
    displayName: 'mltmdc';
    description: '';
  };
  attributes: {
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    imageMaxHeight: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<400>;
    imageMaxWidth: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<615>;
    bgColorPrimary: Attribute.Relation<
      'pb.mltmdc',
      'oneToOne',
      'plugin::pabu.str'
    >;
    bgColorSecondary: Attribute.Relation<
      'pb.mltmdc',
      'oneToOne',
      'plugin::pabu.str'
    >;
  };
}

export interface PbNmtnc extends Schema.Component {
  collectionName: 'components_pb_nmtnc';
  info: {
    displayName: 'nmtnc';
    description: '';
  };
  attributes: {
    triggerGap: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<100>;
    animationsMobile: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    triggerInitialAnimation: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
  };
}

export interface PbNstdlsttem extends Schema.Component {
  collectionName: 'components_pb_nstdlsttems';
  info: {
    displayName: 'nstdlsttem';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    richTextContent: Attribute.RichText;
    imgCaption: Attribute.String;
    linkUrl: Attribute.String;
    linkText: Attribute.String;
    linkAnchor: Attribute.String;
    videoUrl: Attribute.String;
    itemType: Attribute.Enumeration<
      ['gallery', 'multimedia', 'image', 'richtext', 'link']
    > &
      Attribute.DefaultTo<'image'>;
    img: Attribute.Media;
    vid: Attribute.Media;
    vtn: Attribute.Media;
    doc: Attribute.Media;
    aud: Attribute.Media;
    imgTitle: Attribute.String;
    linkRel: Attribute.String;
    linkTarget: Attribute.Enumeration<['_blank', '_self', '_top', '_parent']> &
      Attribute.DefaultTo<'_self'>;
    linkGetParams: Attribute.String;
    linkHrefLang: Attribute.String;
  };
}

export interface PbNvgtnc extends Schema.Component {
  collectionName: 'components_pb_nvgtnc';
  info: {
    displayName: 'nvgtnc';
    description: '';
  };
  attributes: {
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    linkTopLevel: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    linkLevel2: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    linkLevel3: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    bgColorLinks: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    linkActiveColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    logoMaxHeight: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 0;
        desktop: 0;
      }>;
    onlyMobileNavigation: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    showSearch: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    showLanguageSwitch: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    mobileNavDrawerWidth: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'80%'>;
    mobileDrawerDropDirection: Attribute.Enumeration<
      ['top', 'left', 'right', 'bottom']
    > &
      Attribute.DefaultTo<'left'>;
    showAllNavItems: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    additionalCss: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<'.navigation {}\n.navigation-desktop {}\n.navigation-desktop > .navigation-desktop-logo {}\n.navigation-desktop > nav {}\n.navigation-desktop > .navigation-desktop-action-group {}\n\n.navigation-mobile {}\n.navigation-mobile > .navigation-mobile-logo {}\n.navigation-mobile > .navigation-mobile-action-group {}\n.navigation-mobile-menu {}\n.navigation-mobile-header {}\n.navigation-mobile-menu > nav {}\n.navigation-mobile-menu > nav > .navigation-item {}\n.navigation-search {}'>;
  };
}

export interface PbNvtm extends Schema.Component {
  collectionName: 'components_pb_nvtm';
  info: {
    displayName: 'nvtm';
    icon: 'apps';
  };
  attributes: {
    pageId: Attribute.Integer;
    subPages: Attribute.JSON;
    name: Attribute.String;
    externalUrl: Attribute.Text;
    page: Attribute.Relation<'pb.nvtm', 'oneToOne', 'plugin::pabu.pbpage'>;
  };
}

export interface PbPnl extends Schema.Component {
  collectionName: 'components_pb_pnl';
  info: {
    displayName: 'panel';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    richTextContent: Attribute.RichText;
  };
}

export interface PbRspnsvc extends Schema.Component {
  collectionName: 'components_pb_rspnsvc';
  info: {
    displayName: 'rspnsvc';
    description: '';
  };
  attributes: {
    breakpoints: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 768;
        tablet: 1366;
        desktop: 2560;
        wqhd: 3840;
      }>;
  };
}

export interface PbSbckgrnd extends Schema.Component {
  collectionName: 'components_pb_sbckgrnd';
  info: {
    displayName: 'background';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    backgroundImage: Attribute.Media;
    additionalCss: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<''>;
    additionalCssHover: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<''>;
  };
}

export interface PbSbttn extends Schema.Component {
  collectionName: 'components_pb_sbttn';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    font: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    lineHeight: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'1.2'>;
    fontSize: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 14;
        desktop: 16;
      }>;
    fontWeight: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<600>;
    buttonColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    buttonColorHover: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    fontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    fontColorHover: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    border: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'border: 1px solid #6c757d; border-radius: 5;'>;
    buttonWidth: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        minWidth: 100;
        maxWidth: 350;
      }>;
    buttonPadding: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        horizontal: 25;
        vertical: 5;
      }>;
    additionalCss: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<'text-transform: none;'>;
    additionalCssHover: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<'border: 1px solid #000000; border-radius: 0;'>;
  };
}

export interface PbSc extends Schema.Component {
  collectionName: 'components_pb_sc';
  info: {
    displayName: 'sc';
    description: '';
  };
  attributes: {
    disableImageOptimization: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    openExternalLinksInNewTab: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    fallbackOpenGraphImage: Attribute.Media;
    twitterSiteContent: Attribute.String;
    twitterCardContent: Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Attribute.DefaultTo<'summary_large_image'>;
  };
}

export interface PbSclr extends Schema.Component {
  collectionName: 'components_pb_sclr';
  info: {
    displayName: 'color';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::pabu.hex-color'> &
      Attribute.DefaultTo<'#000000'>;
    valueAttribute: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'color'>;
  };
}

export interface PbScrllngc extends Schema.Component {
  collectionName: 'components_pb_scrllngc';
  info: {
    displayName: 'scrllngc';
    description: '';
  };
  attributes: {
    scrollEffect: Attribute.Enumeration<['auto', 'instant', 'smooth']> &
      Attribute.DefaultTo<'auto'>;
  };
}

export interface PbScrllttpc extends Schema.Component {
  collectionName: 'components_pb_scrllttpc';
  info: {
    displayName: 'scrllttpc';
    description: '';
  };
  attributes: {
    enabled: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    bgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    arrowColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    width: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 40;
        tablet: 50;
        desktop: 60;
        wqhd: 70;
      }>;
    height: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 40;
        tablet: 50;
        desktop: 60;
        wqhd: 70;
      }>;
    borderRadius: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 20;
        tablet: 25;
        desktop: 30;
        wqhd: 35;
      }>;
    icon: Attribute.Media;
    scrollEffect: Attribute.Enumeration<['auto', 'instant', 'smooth']> &
      Attribute.DefaultTo<'auto'>;
  };
}

export interface PbSfnt extends Schema.Component {
  collectionName: 'components_pb_sfnt';
  info: {
    displayName: 'font';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    fontName: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'Roboto-Regular'>;
    fontFile: Attribute.Media;
    defaultLineHeight: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'1.2'>;
  };
}

export interface PbSgglfnt extends Schema.Component {
  collectionName: 'components_pb_sgglfnt';
  info: {
    displayName: 'googleFont';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    googleFontCssImport: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<"<style> @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap'); </style>">;
    googleFontFamily: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<"font-family: 'IBM Plex Sans', sans-serif;">;
    defaultLineHeight: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'1.2'>;
  };
}

export interface PbSlnk extends Schema.Component {
  collectionName: 'components_pb_slnk';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    font: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    color: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    fontSize: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 14;
        desktop: 16;
      }>;
    fontWeight: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<600>;
    lineHeight: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'1.2'>;
    colorHover: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    additionalCss: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<''>;
    additionalCssHover: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<'text-decoration: underline; letter-spacing: normal; text-transform: none;'>;
  };
}

export interface PbSrchc extends Schema.Component {
  collectionName: 'components_pb_srchc';
  info: {
    displayName: 'srchc';
    description: '';
  };
  attributes: {
    searchEnabled: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    searchPlaceholder: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    navSearchIconColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    navSearchIconRight: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    searchBarBgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchBarFontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchBarSearchIconColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchBarCloseIconColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchBarBgHoverColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchBarMaxWidth: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
  };
}

export interface PbSrchrsltsc extends Schema.Component {
  collectionName: 'components_pb_srchrsltsc';
  info: {
    displayName: 'srchrsltsc';
    description: '';
  };
  attributes: {
    spaceX: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    spaceY: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    h1Typography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    h2Typography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    ctTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    resultTypography: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    resultLink: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    contentTypeDivider: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'1px solid #000'>;
    marginBetweenContentType: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<15>;
    elementSpace: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        x: 20;
        y: 10;
      }>;
    listElementSpaceY: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<6>;
    searchTermSpace: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
    searchSummarySpace: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
    searchFilterSpace: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<0>;
    searchFilterBgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchFilterBorderColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchFilterDropdownBgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchFilterDropdownBgColorHover: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchFilterDropdownFontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchFilterChipBgColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchFilterChipFontColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
    searchFilterChipBorder: Attribute.String &
      Attribute.DefaultTo<'border: 1px solid #000'>;
    searchFilterBorderHoverColor: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.store-values'>;
  };
}

export interface PbSrchtxt extends Schema.Component {
  collectionName: 'components_pb_srchtxt';
  info: {
    displayName: 'richtext';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    bold: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    italic: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    underlined: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    crossedout: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    link: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    subscript: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    superscript: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    alignleft: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    alignright: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    aligncenter: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    indentationreduce: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    indentationincrease: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    listbullet: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    listnumber: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    h1: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    h2: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    h3: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    h4: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    h5: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    h6: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    html: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
    colors: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<true>;
  };
}

export interface PbSrrws extends Schema.Component {
  collectionName: 'components_pb_srrws';
  info: {
    displayName: 'arrows';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    leftArrow: Attribute.Media;
    rightArrow: Attribute.Media;
    arrowSize: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 50;
        tablet: 75;
        desktop: 100;
      }>;
    hideArrowsOnMobile: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    hideArrowsOnTablet: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    hideArrowsOnDesktop: Attribute.Boolean &
      Attribute.CustomField<'plugin::pabu.boolean-value'> &
      Attribute.DefaultTo<false>;
    arrowSvgFilterCssAttribute: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'drop-shadow(0px 3px 2px rgba(134, 134, 134, 0.6))'>;
  };
}

export interface PbSspcx extends Schema.Component {
  collectionName: 'components_pb_sspcx';
  info: {
    displayName: 'spaceX';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    spaceX: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'>;
    valueAttribute: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'spaceX'>;
  };
}

export interface PbSspcy extends Schema.Component {
  collectionName: 'components_pb_sspcy';
  info: {
    displayName: 'spaceY';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    spaceY: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'>;
    valueAttribute: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'spaceY'>;
  };
}

export interface PbStypgrphy extends Schema.Component {
  collectionName: 'components_pb_stypgrphy';
  info: {
    displayName: 'typography';
    description: '';
  };
  attributes: {
    strname: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'>;
    strinfo: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<''>;
    htmlElement: Attribute.Enumeration<
      ['unspecified', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    > &
      Attribute.DefaultTo<'unspecified'>;
    font: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    color: Attribute.JSON & Attribute.CustomField<'plugin::pabu.store-values'>;
    fontSize: Attribute.JSON &
      Attribute.CustomField<'plugin::pabu.grouped-values'> &
      Attribute.DefaultTo<{
        mobile: 21;
        desktop: 42;
      }>;
    lineHeight: Attribute.String &
      Attribute.CustomField<'plugin::pabu.string-value'> &
      Attribute.DefaultTo<'1.2'>;
    fontWeight: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<600>;
    marginRichText: Attribute.Integer &
      Attribute.CustomField<'plugin::pabu.integer-value'> &
      Attribute.DefaultTo<6>;
    additionalCss: Attribute.Text &
      Attribute.CustomField<'plugin::pabu.text-value'> &
      Attribute.DefaultTo<'letter-spacing: normal; text-transform: none;'>;
  };
}

export interface PbTmpltc extends Schema.Component {
  collectionName: 'components_pb_tmpltc';
  info: {
    displayName: 'email: templateconfig';
    description: '';
  };
  attributes: {
    templateName: Attribute.String;
    emailSubject: Attribute.String;
    optionalRecipients: Attribute.Text;
    emailTemplateString: Attribute.Text;
    category: Attribute.Enumeration<['system', 'form']> &
      Attribute.DefaultTo<'system'>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pb.brdcrmbsc': PbBrdcrmbsc;
      'pb.cbttn': PbCbttn;
      'pb.cccrdn': PbCccrdn;
      'pb.ccrds': PbCcrds;
      'pb.ccrsl': PbCcrsl;
      'pb.cfrm': PbCfrm;
      'pb.cgllry': PbCgllry;
      'pb.chdln': PbChdln;
      'pb.cmg': PbCmg;
      'pb.cmgtckr': PbCmgtckr;
      'pb.cmltmd': PbCmltmd;
      'pb.cmscfgmdl': PbCmscfgmdl;
      'pb.cmscfgmdlsrt': PbCmscfgmdlsrt;
      'pb.cmsrcptchv2': PbCmsrcptchv2;
      'pb.cptchtpc': PbCptchtpc;
      'pb.crchtxt': PbCrchtxt;
      'pb.crd': PbCrd;
      'pb.crdsc': PbCrdsc;
      'pb.crslsld': PbCrslsld;
      'pb.csbttn': PbCsbttn;
      'pb.csccrdn': PbCsccrdn;
      'pb.cscrds': PbCscrds;
      'pb.cscrsl': PbCscrsl;
      'pb.csfrm': PbCsfrm;
      'pb.csgllry': PbCsgllry;
      'pb.cshdln': PbCshdln;
      'pb.csmg': PbCsmg;
      'pb.csmgtckr': PbCsmgtckr;
      'pb.csmltmd': PbCsmltmd;
      'pb.cspcr': PbCspcr;
      'pb.csprtr': PbCsprtr;
      'pb.csrchrslts': PbCsrchrslts;
      'pb.csrchtxt': PbCsrchtxt;
      'pb.csspcr': PbCsspcr;
      'pb.cssprtr': PbCssprtr;
      'pb.cstwi': PbCstwi;
      'pb.ctwi': PbCtwi;
      'pb.frmbl': PbFrmbl;
      'pb.frmdt': PbFrmdt;
      'pb.frmfl': PbFrmfl;
      'pb.frmml': PbFrmml;
      'pb.frmnm': PbFrmnm;
      'pb.frmsc': PbFrmsc;
      'pb.frmstr': PbFrmstr;
      'pb.frmtxt': PbFrmtxt;
      'pb.ftrc': PbFtrc;
      'pb.gllrysld': PbGllrysld;
      'pb.lgc': PbLgc;
      'pb.lsttem': PbLsttem;
      'pb.lytc': PbLytc;
      'pb.mgc': PbMgc;
      'pb.mgtckrsld': PbMgtckrsld;
      'pb.mlc': PbMlc;
      'pb.mltlnggc': PbMltlnggc;
      'pb.mltmdc': PbMltmdc;
      'pb.nmtnc': PbNmtnc;
      'pb.nstdlsttem': PbNstdlsttem;
      'pb.nvgtnc': PbNvgtnc;
      'pb.nvtm': PbNvtm;
      'pb.pnl': PbPnl;
      'pb.rspnsvc': PbRspnsvc;
      'pb.sbckgrnd': PbSbckgrnd;
      'pb.sbttn': PbSbttn;
      'pb.sc': PbSc;
      'pb.sclr': PbSclr;
      'pb.scrllngc': PbScrllngc;
      'pb.scrllttpc': PbScrllttpc;
      'pb.sfnt': PbSfnt;
      'pb.sgglfnt': PbSgglfnt;
      'pb.slnk': PbSlnk;
      'pb.srchc': PbSrchc;
      'pb.srchrsltsc': PbSrchrsltsc;
      'pb.srchtxt': PbSrchtxt;
      'pb.srrws': PbSrrws;
      'pb.sspcx': PbSspcx;
      'pb.sspcy': PbSspcy;
      'pb.stypgrphy': PbStypgrphy;
      'pb.tmpltc': PbTmpltc;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
