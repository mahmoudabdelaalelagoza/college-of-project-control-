# articles sections

Composition: [page.tsx](page.tsx). Routes: `/articles`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Article Results | [ArticleResults.tsx](components/ArticleResults.tsx) | [ArticleCard.tsx](../../components/feature/ArticleCard.tsx) |
| The CPCM Journal | [TheCPCMJournal.tsx](components/TheCPCMJournal.tsx) | Page-local |

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

## Editorial release 2026-10-21

The six original English articles, category/excerpt/author metadata, reading times, local cover images and linked primary references are versioned in [journal-articles-2026-10-21.json](../../../../docs/content/journal-articles-2026-10-21.json). Publish with [SUPABASE_PUBLISH_JOURNAL_ARTICLES_20261021.sql](../../../../docs/migration/SUPABASE_PUBLISH_JOURNAL_ARTICLES_20261021.sql) using an authorised Supabase SQL Editor session. The transaction removes only the two verified demo rows (IDs 2 and 3), refuses to overwrite them if their reviewed metadata changed, preserves unrelated content, and supports rerunning the release. CMS rows remain the source used by listing, detail pages and the homepage journal. This file being present does not mean the SQL has been executed.

The six article paths are included in [staticRoutes.ts](../../next/staticRoutes.ts) so direct visits work with the repository static export. Figures, project scenarios and prompts are explicitly fictional learning exercises. APM/GAO/UK Government links support professional principles; the articles do not imply endorsement by these organisations or claim client results.
