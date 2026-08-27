# Schema

> AI-generated synthesis from Charlotte Ledoux's public writing. Not authored or endorsed by her. No paid templates are included.

This page defines how the offline wiki is maintained.

## Source hierarchy
1. Raw files in [../substack](../substack/INDEX.md) are authoritative for public statements.
2. This wiki is a derivative compiled layer for review and navigation.
3. [../public-governance-guide.md](../public-governance-guide.md) is a local synthesis aid, not a replacement for the raw posts.

## Provenance rules
- Every substantive wiki page must say it is AI-generated synthesis from Charlotte Ledoux's public writing.
- Every substantive assertion must cite a local raw path plus the original public Substack URL.
- Distinguish public statement from synthesis/inference.
- Preserve French/English terms where Charlotte used them.
- Do not add paid-template content, client outcomes, or external evidence.

## Page conventions
- Use relative Markdown links between wiki pages.
- Link raw source files with `../substack/<file>.md`.
- Keep titles and quoted phrases in their original language.
- Prefer one durable concept page over many tiny pages.

## Refresh process
1. Re-read the raw public corpus.
2. Update the relevant wiki pages locally.
3. Record the change in [LOG](./LOG.md).
4. Review the diff against the raw sources.
5. Commit only the reviewed markdown.

## Runtime boundary
Runtime answers or drafts stay outside this compiled layer and never write back automatically.
