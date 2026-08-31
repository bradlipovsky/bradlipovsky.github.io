# Website content guide

The site is designed to make routine updates small and reviewable. Structured facts live in `_data`; narrative pages live in `_pages`.

## Sources of truth

- **Current group and alumni:** `_data/people.yml`
- **Selected publications:** `_data/publications.yml`
- **Homepage news:** `_data/highlights.yml`
- **Long-form professional record:** `files/cv.pdf`
- **Research narrative:** `_pages/research.md`
- **Open-position status:** `_pages/hiring.md`
- **Current courses:** `_pages/teaching.html`

The website roster is the fastest-moving public record. The CV should be reconciled against `_data/people.yml` whenever a new PDF is added.

## Update checklist

### When someone joins, changes role, or leaves

1. Update `_data/people.yml`.
2. Update the CV source and replace `files/cv.pdf`.
3. Check the person's official UW profile and external links.
4. If appropriate, add an alumni destination rather than deleting the person.

### When a paper is published

1. Add it to the CV's complete list.
2. Add strategically important work to `_data/publications.yml` using the DOI URL.
3. Update the homepage metrics if the publication count changes.
4. Add a short homepage highlight only when there is a meaningful story beyond the citation.

### When recruiting status changes

1. Update the status box and review date in `_pages/hiring.md`.
2. Include the appointment type, funding/project, deadline, and authoritative application URL.
3. Remove expired advertisements promptly; do not leave prior admissions-cycle language in place.

### Twice-yearly audit

- Reconcile the website and CV rosters.
- Review the homepage metrics and three highlights.
- Test external links and DOI redirects.
- Confirm title, affiliation, email, CV date, and advertised-opening status.
- Build locally and inspect the homepage, People, Research, Publications, CV, Teaching, and Opportunities pages on desktop and mobile widths.

## Publishing workflow

1. Create a descriptive branch.
2. Preview with `docker compose up --build`.
3. Commit the scoped changes and open a draft pull request.
4. Review the rendered site and content diff.
5. Merge to `master` only after approval; GitHub Pages then publishes the change.
