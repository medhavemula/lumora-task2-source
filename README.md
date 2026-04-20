# Lumora — Task 2

## Templating Engine
**Nunjucks** — templates use `{% extends %}`, `{% block %}`, and `{% include %}` for layout inheritance and partials.

## Bundler
**Vite** — handles multi-page builds, asset bundling, and compiles `.njk` templates to static HTML via a custom plugin.

## Folder Structure
Lumoratask2/

src/

templates/

layout.njk          ← base layout

partials/

navbar.njk

footer.njk

assets/

style.css

index.html            ← uses {% extends "layout.njk" %}

about.html

contact.html

dist/                   ← compiled output (deployed to GitHub Pages)

## How to Run
```bash
npm install
npm run dev      # development server
npm run build    # compile to dist/
```

## Live Demo
https://medhavemula.github.io/lumora-task2/

## Source Code
https://github.com/medhavemula/lumora-task2-source
