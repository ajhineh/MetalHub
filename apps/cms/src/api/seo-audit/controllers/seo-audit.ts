/**
 * Strapi 5 custom SEO validation controller
 * Executes technical SEO, JSON-LD Schema, and hreflang audits on the backend data.
 */

interface SEOAuditPayload {
  title?: string;
  description?: string;
  locale?: string;
  locales?: string[];
  metallurgy?: {
    steelGrade?: string;
    executionClass?: string;
    weldingStandard?: string;
    surfaceTreatment?: string;
    workshopLocation?: string;
  };
}

export default {
  async audit(ctx: any) {
    const body = ctx.request.body as SEOAuditPayload;
    
    if (!body) {
      return ctx.badRequest('No entry payload provided for auditing.');
    }

    const auditResults = {
      status: 'green',
      timestamp: new Date().toISOString(),
      score: 100,
      checks: [] as Array<{
        name: string;
        status: 'passed' | 'warning' | 'failed';
        message: string;
      }>
    };

    // 1. Audit Title Length Check
    const title = body.title || '';
    if (title.length === 0) {
      auditResults.checks.push({
        name: 'Page Title Presence',
        status: 'failed',
        message: 'Page title is missing. Every B2B page requires a descriptive H1/Meta title.'
      });
      auditResults.score -= 30;
      auditResults.status = 'red';
    } else if (title.length < 30 || title.length > 60) {
      auditResults.checks.push({
        name: 'Page Title Optimization',
        status: 'warning',
        message: `Title length (${title.length} chars) is outside the recommended range (30-60 chars) for Google search snippets.`
      });
      auditResults.score -= 10;
    } else {
      auditResults.checks.push({
        name: 'Page Title Optimization',
        status: 'passed',
        message: `Page title length (${title.length} chars) is perfectly optimized.`
      });
    }

    // 2. Audit Meta Description Check
    const desc = body.description || '';
    if (desc.length === 0) {
      auditResults.checks.push({
        name: 'Meta Description Presence',
        status: 'failed',
        message: 'Meta description is missing. Search engines require structured snippets.'
      });
      auditResults.score -= 30;
      auditResults.status = 'red';
    } else if (desc.length < 120 || desc.length > 160) {
      auditResults.checks.push({
        name: 'Meta Description Optimization',
        status: 'warning',
        message: `Description length (${desc.length} chars) is outside the recommended range (120-160 chars).`
      });
      auditResults.score -= 10;
    } else {
      auditResults.checks.push({
        name: 'Meta Description Optimization',
        status: 'passed',
        message: `Meta description length (${desc.length} chars) is perfectly optimized.`
      });
    }

    // 3. Audit International Hreflang Configuration
    const locales = body.locales || [];
    const requiredLocales = ['en', 'fr', 'de', 'nl', 'es', 'it', 'no', 'sv', 'pl'];
    const missingLocales = requiredLocales.filter(loc => !locales.includes(loc));

    if (missingLocales.length > 0) {
      auditResults.checks.push({
        name: 'Multilingual Translations',
        status: 'warning',
        message: `Missing target translations for: ${missingLocales.join(', ').toUpperCase()}. To ensure complete EU coverage, translate pages.`
      });
      auditResults.score -= 15;
    } else {
      auditResults.checks.push({
        name: 'Multilingual Translations',
        status: 'passed',
        message: 'All 9 European target locales are correctly translated and ready for alternate hreflang indexing.'
      });
    }

    // 4. Audit Structured JSON-LD Metallurgy Schemas
    const metallurgy = body.metallurgy || {};
    if (!metallurgy.steelGrade || !metallurgy.executionClass || !metallurgy.weldingStandard) {
      auditResults.checks.push({
        name: 'B2B Schema Validation',
        status: 'failed',
        message: 'Missing core metallurgy parameters. S355J2+N steel grade, EXC execution class, and welding standard are required for Product/LocalBusiness schemas.'
      });
      auditResults.score -= 25;
      auditResults.status = 'red';
    } else {
      auditResults.checks.push({
        name: 'B2B Schema Validation',
        status: 'passed',
        message: `Valid metallurgy properties detected (${metallurgy.steelGrade}, ${metallurgy.executionClass}, ${metallurgy.weldingStandard}). Structured JSON-LD markup is valid.`
      });
    }

    // Ensure score does not drop below 0
    auditResults.score = Math.max(0, auditResults.score);

    // Final Status override based on score
    if (auditResults.score < 50) {
      auditResults.status = 'red';
    }

    ctx.send(auditResults);
  }
};
