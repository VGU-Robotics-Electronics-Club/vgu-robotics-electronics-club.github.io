# VGU Robotics & Electronics Club Website

Website for the VGU Robotics & Electronics Club (REC), built with Jekyll and deployed as a Git-based content site.

## What is in this repo

- Public pages live at the repository root, such as `index.html`, `about.html`, `activities.html`, `projects.html`, `materials.html`, `publications.html`, and `achievements.html`.
- Collection content lives in `_activities/`, `_workshops/`, `_projects/`, and `_materials/`.
- Structured club data lives in `_data/`.
- Shared templates live in `_layouts/`.
- The CMS lives in `admin/` and uses Static CMS with Netlify Identity and Git Gateway.
- Frontend assets live in `assets/`.

## Quick start

1. Install Ruby and Bundler.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve`.
4. Open the local site URL printed by Jekyll, usually `http://127.0.0.1:4000`.

## Content model

- Activities, workshops, projects, and materials are Jekyll collections.
- Members, achievements, and publications are stored as YAML data files under `_data/`.
- Materials are only shown on the public site when `publish: true`.
- The public CMS entry point is `/admin/`.

## Documentation

- [Developer guide](docs/development-guide.md)
- [Content guide](docs/content-guide.md)
