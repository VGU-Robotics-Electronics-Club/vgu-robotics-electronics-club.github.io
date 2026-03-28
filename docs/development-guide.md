# Developer Guide

This site is a Jekyll static website with a mixed content model:

- Pages such as Home, About, Activities, Projects, Materials, Publications, and Achievements are rendered from top-level HTML files.
- Long-form content lives in Jekyll collections.
- Structured club data lives in YAML files under `_data/`.
- The admin UI at `admin/` is powered by Static CMS.

## How the site works

The rendering flow is:

1. Jekyll reads the collection files and data files.
2. The layouts in `_layouts/` turn that content into pages.
3. The collection listing pages sort and display the content.
4. Jekyll writes the generated site to `_site/`.

The important config files are:

- `_config.yml`: Jekyll site config, collections, permalinks, and defaults.
- `admin/config.yml`: CMS collections, data schemas, and media locations.
- `Gemfile`: local Ruby dependencies for Jekyll and the build server.

## Collections

The collections are configured in `_config.yml` and their content is stored in these folders:

- `_activities/` -> `/activities/:slug/`
- `_workshops/` -> `/workshops/:slug/`
- `_projects/` -> `/projects/:slug/`
- `_materials/` -> `/materials/:slug/`

Each collection defaults to the `post` layout through `_config.yml`.

## Page map

The main public pages pull content from different sources:

- `index.html` shows the home page and previews the latest activities.
- `about.html` builds the leadership and member sections from the newest `*_members.yml` file in `_data/`.
- `activities.html` shows both activities and workshops, each from its own collection.
- `projects.html` shows the projects collection and uses the `members` and `description` fields when available.
- `materials.html` shows only materials entries where `publish: true`.
- `achievements.html` renders grouped achievement data from `_data/achievements.yml`.
- `publications.html` renders publication records from `_data/publications.yml`.

### Layouts

- `_layouts/default.html` provides the shared shell, navigation, theme toggle, and footer.
- `_layouts/page.html` is used by static pages.
- `_layouts/post.html` is used by collection entries.

## Data files

The site uses YAML data files for content that is more structured than a normal post:

- `_data/2024_members.yml`
- `_data/2025_members.yml`
- `_data/achievements.yml`
- `_data/publications.yml`

These files are consumed directly by the About, Achievements, and Publications pages.

## CMS setup

The CMS is configured in `admin/config.yml` and loaded by `admin/index.html`.

Key points:

- Backend: `git-gateway`
- Workflow mode: `editorial_workflow`
- Authentication: Netlify Identity
- Media files: stored under `assets/images/`

The workflow mode means content can move through draft, review, and publish states instead of being pushed live immediately.

## Theme and navigation

`_layouts/default.html` handles the shared site shell:

- Global navigation and footer
- Tailwind and custom CSS loading
- Theme persistence with localStorage
- Netlify Identity bootstrap for the admin area

Because this layout wraps most pages, changes to navigation or global scripts usually belong there.

## Local development

Recommended commands:

```bash
bundle install
bundle exec jekyll serve
```

Useful notes:

- `webrick` is included so `jekyll serve` works on modern Ruby versions.
- Jekyll writes build output to `_site/`; do not edit files there.
- When changing collection content or data files, refresh the browser after Jekyll rebuilds.

## Adding or changing content

- Use the CMS for normal content updates when possible.
- Edit `_data/` only when you need a schema-level change or a bulk update that is easier in YAML.
- Keep image paths consistent with the folder structure under `assets/images/`.
- If you add a new collection, update both `_config.yml` and `admin/config.yml`.

## Member import script

`import_members.py` appends member rows from `_data/2025_data.csv` into `_data/2025_members.yml`.

Use it carefully:

- It appends data rather than replacing existing content.
- Check the CSV headers before running it.
- Review the YAML output after import to avoid duplicates.
