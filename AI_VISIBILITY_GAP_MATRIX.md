# AI visibility gap matrix

Updated 2026-10-09 against the AI Discovery Audit supplied for Style BFF.

| Audit signal | Evidence | Remediation | Verification |
|---|---|---|---|
| Brand not named in India category answers | The audit tested personal-styling and wardrobe-management questions and returned no Style BFF result. | Added indexable India landing and answer pages with direct, bounded answers; linked them from the footer and sitemap. | `node scripts/check.mjs`; inspect `/india/` and both `/answers/` routes in `dist/`. |
| Brand not recognised when named | The audit response said it had no reliable information about Style BFF. | Made the entity description consistent across homepage, India page, Organization JSON-LD, `llms.txt`, store links and the public LinkedIn company profile. | Search rendered HTML for `Style BFF`, `BingeTry`, iOS, Android, India; validate JSON-LD in generated pages. |
| Too few independent references | The audit found AGI Hunt, AppBrain and first-party pages, but category sources did not mention Style BFF. | Added verified public references to the India page and `sameAs` only for the official LinkedIn company profile. | Confirm links return 200; do not label a source as editorial coverage unless it independently mentions Style BFF. |
| Website access | The audit marked robots and page access ready. | Preserved explicit Googlebot and AI-crawler allow rules, canonical URLs, sitemap index and `llms.txt`. | `node scripts/check.mjs`; HTTP checks after deployment. |
| Product catalogue check | The audit marked this not applicable because Style BFF is an app, not a retail catalogue. | Kept the site product-led and avoided inventing a shoppable catalogue or product feed. | Review schema for `MobileApplication` and inspect `/download/`. |
| External authority / backlinks | The audit recommends trusted profiles and independent category coverage. | Prepared clear, source-linked copy and a press-ready factual base; outreach, reviews and backlinks remain human marketing work. | Track actual mentions in Search Console and repeat the same prompts after coverage is published. |

## What cannot honestly be automated

No code change can force Claude, ChatGPT, Google or a publisher to recommend Style BFF. A score of 100 cannot be guaranteed. Independent mentions, app-store reviews, founder/profile approval and editorial backlinks require real third parties and must not be fabricated. The repeat test should be run after Google has crawled the new URLs and after genuine external coverage exists.
