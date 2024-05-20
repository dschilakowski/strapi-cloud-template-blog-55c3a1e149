export default {
  afterCreate: async (event) => {
    // Create CSS.
    await strapi.service("plugin::pabu.glbl").createCSS();
  },
  afterUpdate: async (event) => {
    // Create CSS.
    await strapi.service("plugin::pabu.glbl").createCSS();
  },
};
