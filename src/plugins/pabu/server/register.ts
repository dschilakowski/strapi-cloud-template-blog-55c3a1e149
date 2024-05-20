import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {
  // register phase
  console.log("Register: customField: store-values");
  strapi.customFields.register({
    name: "store-values",
    type: "json",
    plugin: "pabu",
    inputSize: {
      default: 6,
      isResizable: false,
    },
  });

  console.log("Register: customField: grouped-values");
  strapi.customFields.register({
    name: "grouped-values",
    type: "json",
    plugin: "pabu",
    inputSize: {
      default: 12,
      isResizable: false,
    },
  });

  console.log("Register: customField: string-value");
  strapi.customFields.register({
    name: "string-value",
    type: "string",
    plugin: "pabu",
    inputSize: {
      default: 6,
      isResizable: false,
    },
  });

  console.log("Register: customField: integer-value");
  strapi.customFields.register({
    name: "integer-value",
    type: "integer",
    plugin: "pabu",
    inputSize: {
      default: 6,
      isResizable: false,
    },
  });

  console.log("Register: customField: boolean-value");
  strapi.customFields.register({
    name: "boolean-value",
    type: "boolean",
    plugin: "pabu",
    inputSize: {
      default: 6,
      isResizable: false,
    },
  });

  console.log("Register: customField: text-value");
  strapi.customFields.register({
    name: "text-value",
    type: "text",
    plugin: "pabu",
    inputSize: {
      default: 12,
      isResizable: false,
    },
  });

  console.log("Register: customField: json-value");
  strapi.customFields.register({
    name: "json-value",
    type: "json",
    plugin: "pabu",
    inputSize: {
      default: 6,
      isResizable: false,
    },
  });

  console.log("Register: customField: hex-color");
  strapi.customFields.register({
    name: "hex-color",
    type: "string",
    plugin: "pabu",
    inputSize: {
      default: 6,
      isResizable: false,
    },
  });
};
