# Style BFF SEO + AEO audit

## 2026-10-08 AI visibility follow-up

The 7 October 2026 AI visibility report sampled two India category questions and found that Style BFF was not named, while a named-brand prompt returned “not recognised”. The site now publishes a single, consistent India-focused entity description and two useful, indexable answer pages:

- `/india/` explains what Style BFF is, that it is available on iOS and Android in India, and the documented workflow.
- `/answers/best-fashion-styling-apps-in-india/` answers the category intent without claiming that Style BFF is universally best.
- `/answers/wardrobe-management-services-in-india/` distinguishes the app’s AI workflow from human stylists and tailoring services.

The Organization schema now includes the India service area and the product topics it documents. These pages are linked from the global footer so crawlers and readers can discover them without an external backlink. The report also recommends independent coverage and trusted profiles; those cannot be manufactured by on-site code and remain a marketing/PR workstream requiring factual review and outreach.

Audit date: 2026-10-01  
Production origin: `https://stylebff.ai`  
Scope: crawl/index controls, canonicals, metadata, structured data, information architecture, answer readiness, trust, feeds, social previews, performance and validation automation.

## Executive summary

The site has a strong visual brand, clear product positioning and useful question-led content. Google already indexes the domain: a live `site:stylebff.ai` query on 2026-10-01 returned the homepage plus the sitemap, blog, answers, download, support, rename, glossary and comparison pages. The main problem was not a total indexing block; it was contradictory publishing signals and weak control of which URLs Google could choose. App gateways, tracking variants, deep links and a redirect page were indexable, while the human sitemap and AI crawler file exposed material that the XML sitemap correctly treated as unfinished. The RSS feed existed but contained no posts, and structured data advertised a site-search action that did not exist.

This implementation fixes those technical contradictions and adds automated regression checks. The generated result now has 64 indexable canonical routes and 75 `noindex` HTML outputs (including the copied 404), with exact agreement between indexable canonicals and the XML sitemap. The RSS feed contains 34 published articles. Seven representative templates score 100 for Lighthouse SEO; performance scores 100 in the local Lighthouse CI run, with LCP at or below the configured 2-second gate.

The largest remaining constraints are editorial and operational rather than technical: the privacy policy, terms, founder/about information and several expert-topic pages are still placeholders; first-party claims such as “7,000+ people” and “71 countries” need internal evidence; Google Search Console and analytics measurement are not configured in this repository; and Google Software App rich-result eligibility requires a real review or aggregate rating, which must not be invented.

## Findings and actions

| Priority | Area | Finding | Action |
| --- | --- | --- | --- |
| Critical | Index control | The build ignored `noindex: true`, leaving app gateways and deep-link routes indexable. | Fixed the generator so explicit `noindex` is honored. App, campaign, redirect, 404 and deep-link routes now use `noindex,follow`. |
| Critical | Canonicals | Campaign downloads, app gateways and redirect URLs self-canonicalized, allowing duplicate intent pages to compete. | Added canonical overrides to `/download/` or `/support/` as appropriate. |
| High | Sitemaps | The HTML sitemap listed all generated routes, including unreviewed editorial outlines. | Limited both XML and HTML sitemaps to reviewed, indexable canonical URLs. |
| High | AEO corpus | `llms-full.txt` contained every draft question plus placeholder answers. | Limited the file to verified product facts, published FAQs and five reviewed answer pages; added citation guidance and practical product limits. |
| High | RSS | `rss.xml` had a channel but no items. | Added 34 published blog items, canonical GUIDs, language, self-link and build date. |
| High | Structured data | `WebSite` schema advertised a search endpoint that the site does not implement. | Removed the misleading `SearchAction`. |
| High | Entity consistency | Organization, website and app nodes did not share stable identifiers and the homepage lacked a page entity. | Added stable `@id` references, publisher relationships, support contact, app entity and homepage `WebPage`. |
| Medium | Breadcrumbs | Breadcrumb schema omitted Home and exposed raw URL slugs as names. | Added Home, readable labels and stable breadcrumb identifiers. |
| Medium | Article schema | Articles lacked a consistent URL, image, description and publisher relationship. | Enriched published Article and BlogPosting nodes with canonical URL, social image, description, language and entity references. |
| Medium | FAQ schema | FAQ markup was automatically repeated on many commercial and article pages. Google no longer offers general FAQ rich results for sites like this. | Kept visible FAQs for readers, but limited automatic FAQPage markup to the dedicated FAQ page. |
| Medium | Social metadata | The homepage lacked `og:url`, locale, site name and Twitter image alt text. | Added complete Open Graph/Twitter identity and theme metadata. |
| Medium | Freshness | Source labels used a hard-coded date unrelated to the build date. | Derived the visible review date from the configured last-updated date. Sitemap entries now support per-page dates. |
| Medium | Internal discovery | The homepage footer omitted the FAQ and editorial standards and duplicated About as “Our story.” | Added the FAQ and editorial policy and replaced the duplicate with the BingeTry rename page. |
| Medium | Regression safety | The prior test only checked for a title, description, parseable JSON-LD and broken links. | Added checks for robots, canonicals, Open Graph identity, one H1, duplicate indexable metadata, sitemap/canonical parity, phantom search actions, RSS inventory and unpublished AI-crawler content. |
| Medium | Author transparency | Published guides used an organization byline without explaining who maintains the content. | Added a visible Style BFF editorial-team bio to every published blog and comparison article, linked to editorial standards. |
| Medium | Image delivery | Repeated brand images used a 201 KB JPEG even though an optimized WebP already existed. | Replaced repeated JPEG usage with the 5 KB WebP and added automated checks for alt attributes, dimensions and non-WebP content images. The QR code remains a lossless PNG to preserve scan reliability. |
| Medium | Crawl access | `User-agent: *` already allowed Google, but crawler-specific intent was not obvious. | Added explicit `Googlebot` and `Googlebot-Image` allow rules while preserving the sitemap declaration. |

## AEO assessment

### What is already strong

- Every published generated page opens with a concise answer directly below its H1.
- Product FAQs use natural user questions and give direct, bounded answers.
- Comparison pages link to primary product sources and state that pricing and availability can change.
- Virtual try-on copy consistently explains that the render is a styling preview, not a fit guarantee.
- The site has dedicated answer, comparison, feature, FAQ, glossary and editorial-standard hubs.

### What still limits citation and trust

- The About and Press pages are not publication-ready because founder names, bios and approved facts are missing.
- Privacy, Terms and Delete Account remain legal placeholders and correctly stay `noindex`. They must be approved before the site should be treated as fully launch-ready.
- “7,000+ people” and “71 countries” are first-party claims. Keep a dated internal evidence file or public methodology so those claims can be defended and updated.
- Styling and color-analysis articles use an organization byline. For expert guidance, add a named reviewer with relevant credentials, a short bio and a review date.
- Do not publish the 25 draft answer pages, 17 glossary entries or seasonal color outline until each adds original, reviewed value. Mass-publishing thin pages would weaken the site rather than improve coverage.

## Search appearance and schema limits

The app entity now includes its platforms, official install URLs, publisher and a truthful free offer. It is useful machine-readable product information, but it is **not yet eligible for Google's Software App rich result** because Google requires `name`, `offers.price`, and either a real `aggregateRating` or a real `review`. No rating or review was fabricated. Add one only when it is visible on the page and supported by genuine source data.

FAQ content remains useful for people and answer engines, but general FAQ rich results are no longer a realistic search-display target for this type of site. The strategy should be strong visible answers, source-backed claims and clear entities—not schema volume.

## Performance and delivery

Local Lighthouse CI results across Home, Features, Color Analysis, How It Works, Compare, Blog and Download:

- SEO: 100 on all seven templates
- Performance: 100 on all seven templates
- Accessibility: 95–100
- Best Practices: 96–100
- Homepage LCP: approximately 1.9 seconds in the audited local run

The repository contains about 171 MB of assets, including many 6–11 MB GIF/Lottie variants. Unused files do not affect page transfer, but they slow deployments and increase maintenance risk. The active homepage animation should be watched on real mobile field data; local Lighthouse is not a substitute for Chrome UX Report data.

## Measurement and launch checklist

1. Verify the domain in Google Search Console and Bing Webmaster Tools, then submit `https://stylebff.ai/sitemap.xml`.
2. After deployment, use URL Inspection for `/`, `/features/`, `/download/`, `/faq/` and two representative blog posts.
3. Add privacy-respecting analytics or connect the existing custom analytics events to a real provider. Measure store clicks, completed profile starts and indexed landing-page conversions.
4. Obtain approved Privacy, Terms, retention, training-use and deletion language; then remove `noindex` only after legal review.
5. Approve founder/team bios and first-party claim evidence. Publish About and Press only after that review.
6. Validate the deployed homepage and download page in Google's Rich Results Test and Schema.org Validator.
7. Monitor Coverage, duplicate canonical selection, branded vs non-branded queries, answer-page impressions and store-click conversion monthly.
8. Use per-page `lastModified` dates when future edits are material; do not change dates solely to appear fresh.

## Decisions that should not be automated

- Do not remove `noindex` from the 404, app gateways, campaign variants, deep-link handlers or unfinished legal/editorial drafts. Those directives prevent search results such as “Open in Style BFF” from competing with the homepage. Remove `noindex` only after a page is complete, unique and intended to rank.
- The current build is already pre-rendered into complete HTML files. Search engines receive headings, copy, metadata and structured data without running JavaScript. Migrating to a server framework would not solve the observed indexing problem and would be incompatible with the current GitHub Pages deployment unless hosting changes too.
- A Forbes backlink cannot be created or guaranteed by a technical change. It must be earned through independent editorial coverage. Do not buy links, fabricate a contributor post or misrepresent a relationship. The prerequisite is a complete press kit, named founders, verifiable traction evidence and an actual newsworthy story.

## Sources used for audit criteria

- Google Search Central: [Crawling and indexing](https://developers.google.com/search/docs/crawling-indexing)
- Google Search Central: [Canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- Google Search Central: [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- Google Search Central: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Google Search Central: [Software app structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- Google Search Central: [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- Google Search Central: [Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)

## Validation completed

- Production origin, robots, sitemap, social image, RSS and AI crawler file returned HTTP 200 during the audit.
- App Store and Google Play URLs returned HTTP 200; Apple's URL resolves to the current Style BFF listing.
- Build generated 138 routes / 139 HTML files.
- Automated audit passed for 64 indexable canonical routes and sitemap parity.
- TypeScript, generated-site checks and Lighthouse CI passed.
