# Brad Lipovsky — personal research website

This repository contains the Jekyll source for [bradlipovsky.github.io](https://bradlipovsky.github.io/).

## Preview locally

The reproducible preview environment uses Docker, so no system Ruby setup is required:

```bash
docker compose up --build
```

Open <http://localhost:4000>. The development server watches the working tree and refreshes after edits.

To build the production site without starting a server:

```bash
docker build -t brad-lipovsky-site .
docker run --rm brad-lipovsky-site bundle exec jekyll build
```

## Content

Core pages are in `_pages/`; people, selected publications, and current highlights are maintained in `_data/`. See [CONTENT.md](CONTENT.md) for the update checklist and source-of-truth policy.

GitHub Pages publishes the repository root from `master`. Development work should happen on a branch and be merged only after review.
