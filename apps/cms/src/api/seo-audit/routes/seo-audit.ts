export default {
  routes: [
    {
      method: 'POST',
      path: '/seo-audit',
      handler: 'seo-audit.audit',
      config: {
        auth: false, // Set to false to allow admin client access without explicit API token authorization checks
        policies: [],
        middlewares: [],
      },
    },
  ],
};
