# Style BFF content guide

## Voice

Write to “you” in short sentences. Use concrete situations: a closet, a selfie, a wedding, a 9am pitch. Sound warm, direct, honest and specific. Default to US spelling and write the name exactly as “Style BFF”. The category is “AI personal stylist”; digital closet and virtual try-on are features.

Do not use “revolutionary”, “seamless”, “elevate”, “unleash”, “empower”, “effortless”, “curated” as filler, or “AI-powered” as a standalone adjective. Do not invent user counts, ratings, testimonials, release status or competitor weaknesses.

## Frontmatter

Every article, answer and comparison outline includes `title`, `description`, `slug`, `primaryKeyword`, `secondaryKeywords`, `intent`, `cluster`, `author`, `datePublished`, `status` and a nested `seo` object. Keep `datePublished: null` and `status: outline` until founder review. Titles stay at or under 60 characters and descriptions at or under 155 characters.

## Publishing

Add a new outline through `scripts/generate-outlines.mjs` or follow an existing MDX file. Source every statistic and dated competitor fact. Add at least one feature link, one answer or comparison link and one pillar link. Change `status` to `published` only after prose, sources, screenshots, author and legal claims are reviewed. Update `dateModified` only for a substantive edit, not punctuation or formatting.

## Features

Mark a feature LIVE only after it is released on both advertised platforms. SOON features belong on `/roadmap/` and must not be described as available elsewhere.
