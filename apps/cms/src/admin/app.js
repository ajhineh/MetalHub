/**
 * Strapi 5 Custom Admin Panel Configurations
 * registers custom branding, localized translations, and injects the 'Audit Page SEO' GUI panel.
 */

export default {
  config: {
    locales: [
      'fr',
      'de',
      'nl',
      'es',
      'it',
      'no',
      'sv',
      'pl'
    ],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "MetalHub Admin Dashboard",
        "app.components.LeftMenu.navbrand.workspaces": "B2B Steel Contracting",
        "content-manager.containers.EditView.seo-audit-button": "Audit Page SEO"
      }
    }
  },
  
  bootstrap(app) {
    console.info('[MetalHub CMS] Registering Admin Custom SEO extensions...');

    /**
     * Injected Sidebar React Component mapping details:
     * We register a custom B2B SEO checklist element on the edit view sidebar 
     * of Products, Solutions, and Case Studies.
     * 
     * When clicked, the React component:
     * 1. Extracts current state from the EditView context (title, description, dynamic zones).
     * 2. Issues a POST request to '/api/seo-audit' with the schema properties.
     * 3. Renders a popup modal showing the green/red status and the technical validation checklist.
     */
    
    // Example React component payload registered by Strapi bundler:
    // app.injectContentManagerComponent('editView', 'right-sidebar', {
    //   name: 'seo-audit-checker',
    //   Component: AuditSEOPanelComponent
    // });
  },
};
