module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'change-me-in-production'),
    },
  },
  seo: {
    enabled: true,
  },
  'strapi-advanced-sitemap': {
    enabled: true,
  },
  'strapi-llm-translator': {
    enabled: true,
  },
});
