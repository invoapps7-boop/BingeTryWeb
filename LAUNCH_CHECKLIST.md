# Style BFF launch checklist

- Replace every `[FILL_*]` value: founders, bios, headshots, social URLs, approved brand assets, privacy terms, Team ID, Android SHA-256, analysis and email endpoints, and Apple product-page IDs.
- Confirm Style Profile, shopping, widget, streak, referral, men, plus-size and modest-dressing feature status.
- Replace placeholder legal pages with counsel-approved privacy and terms text.
- Confirm photo retention, training, deletion and export answers.
- Run the full Lighthouse CI suite and fix any route below 95.
- Validate JSON-LD in Schema.org and Google Rich Results tools.
- Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Request indexing for `/`, `/pricing/`, `/press/`, and `/compare/doppl-alternatives/`.
- Verify the domain in Pinterest and enable Rich Pins.
- Add Style BFF to AlternativeTo as a Doppl alternative, Product Hunt, G2 and Capterra.
- When the domain moves, set `SITE_URL=https://stylebff.app`, rebuild, attach the domain, and deploy `redirects.map.txt` at the old host.
