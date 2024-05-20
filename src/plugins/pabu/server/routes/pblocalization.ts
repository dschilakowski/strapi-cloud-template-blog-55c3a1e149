const pbLocalizationPublicRoutes = {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/locale/available-locales",
      handler: "pblocalization.availableLocales",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};

export { pbLocalizationPublicRoutes };
