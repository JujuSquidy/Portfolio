# Portfolio

A personal portfolio website built with **React** and **Vite**. The project is structured so that every visual element is an isolated component with its own styles, making the codebase easy to navigate, extend, and maintain.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [File Reference](#file-reference)
  - [Root Files](#root-files)
  - [public/](#public)
  - [src/](#src)
    - [styles/](#srcstyles)
    - [data/](#srcdata)
    - [hooks/](#srchooks)
    - [components/](#srccomponents)
- [Customisation Guide](#customisation-guide)

---

## Getting Started

**Prerequisites:** Node.js 18 or later and npm.

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:5173)
npm run dev
```

---

## Available Scripts

| Command         | Description                                      |
|-----------------|--------------------------------------------------|
| `npm run dev`   | Starts Vite's local development server with HMR  |
| `npm run build` | Compiles and bundles the app into `dist/`         |
| `npm run preview` | Serves the production build locally            |
| `npm run lint`  | Runs ESLint across all `.js` and `.jsx` files    |

---

## Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   ├── Skills.css
│   │   │   ├── SkillBar.jsx
│   │   │   └── SkillBar.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.css
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectCard.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## File Reference

### Root Files

| File | Purpose |
|------|---------|
| `index.html` | The single HTML entry point. Vite injects the compiled JS bundle here. The `<div id="root">` is where React mounts. |
| `vite.config.js` | Vite configuration. Currently only registers the React plugin (`@vitejs/plugin-react`). |
| `eslint.config.js` | ESLint flat-config setup with rules for React hooks and fast-refresh compatibility. |
| `package.json` | Declares all dependencies, dev-dependencies, and npm scripts. |
| `.gitignore` | Prevents build artifacts, `node_modules`, and environment files from being tracked by Git. |

---

### `public/`

Static files served directly at the root URL without transformation by Vite.

| File | Purpose |
|------|---------|
| `public/favicon.svg` | SVG favicon shown in browser tabs. Replace with a personal logo. |

---

### `src/`

All application source code lives here.

#### `src/styles/`

Global stylesheets that are not scoped to a single component.

| File | Purpose |
|------|---------|
| `src/styles/variables.css` | CSS custom properties (design tokens) for colours, typography, spacing, shadows, transitions, and layout breakpoints. Every component references these variables, so changing a value here updates the entire site. |
| `src/styles/global.css` | CSS reset, base element defaults, reusable utility classes (`.container`, `.section`, `.highlight`, `.btn`), scrollbar styling, and focus-ring styles. Imported once at the top of `App.jsx`. |

---

#### `src/data/`

Plain JavaScript modules that export static data arrays. Keeping content separate from components makes it easy to update information without touching presentation logic.

| File | Purpose |
|------|---------|
| `src/data/projects.js` | Array of project objects. Each object has `id`, `title`, `description`, `tags`, `liveUrl`, `repoUrl`, and `featured`. Add, remove, or edit entries here to update the Projects section. |
| `src/data/skills.js` | Array of skill-group objects. Each group has a `category` string and an `items` array of `{ name, level }` objects, where `level` is a percentage (0–100). |

---

#### `src/hooks/`

Custom React hooks that encapsulate reusable stateful logic.

| File | Purpose |
|------|---------|
| `src/hooks/useActiveSection.js` | Uses `IntersectionObserver` to track which page section is currently visible in the viewport. Returns the `id` of the active section. Used by the Navbar to highlight the current link. |

---

#### `src/components/`

Each component lives in its own folder alongside its scoped CSS file.

---

##### `Navbar/`

| File | Purpose |
|------|---------|
| `Navbar.jsx` | Fixed top navigation bar. Reads scroll position to apply a frosted-glass background after 20 px of scrolling. Uses `useActiveSection` to highlight the current section link. Includes a hamburger button that toggles a full-screen mobile menu on narrow viewports. |
| `Navbar.css` | Styles for the navbar, navigation links (including animated underline), hamburger button animation, and the mobile slide-in menu. |

---

##### `Hero/`

| File | Purpose |
|------|---------|
| `Hero.jsx` | Full-viewport landing section. Displays a greeting, the owner's name and job title, a short tagline, and two call-to-action buttons linking to the Projects and Contact sections. Also renders an animated scroll indicator at the bottom. |
| `Hero.css` | Styles for the hero layout, `clamp()`-based responsive font sizes, the `.btn` and `.btn--primary` / `.btn--outline` shared button variants, and the bounce animation for the scroll indicator. |

---

##### `About/`

| File | Purpose |
|------|---------|
| `About.jsx` | Biography section with a placeholder avatar, several paragraphs of personal background, a detail panel (location, education, availability), and a "Download Resume" button. Replace the initials in the avatar and the text content with real information. |
| `About.css` | Two-column grid layout that collapses to a single column on mobile. Styles for the gradient avatar, detail panel, availability badge, and resume button. |

---

##### `Skills/`

| File | Purpose |
|------|---------|
| `Skills.jsx` | Iterates over `src/data/skills.js` and renders a `SkillBar` for each skill, grouped by category. |
| `Skills.css` | Alternating background colour for the section, responsive auto-fill grid for skill groups, and card styling for each group. |
| `SkillBar.jsx` | Single skill row consisting of a label, a percentage value, and an animated progress bar. Accepts `name` and `level` props. Uses a CSS custom property `--target-width` to drive the fill animation. The `<div>` acting as the progress bar carries ARIA `progressbar` semantics. |
| `SkillBar.css` | Thin progress track, gradient fill, and a CSS `@keyframes` animation that grows the bar from zero to its target width on first render. |

---

##### `Projects/`

| File | Purpose |
|------|---------|
| `Projects.jsx` | Renders an auto-fill responsive grid of `ProjectCard` components sourced from `src/data/projects.js`. |
| `Projects.css` | CSS Grid layout for the project card grid. |
| `ProjectCard.jsx` | Individual project card displaying the title, description, technology tags, and links to the live demo and source repository. A "Featured" badge is conditionally rendered. All links open in a new tab with `rel="noreferrer"`. |
| `ProjectCard.css` | Card surface with border, hover lift and glow effect, tag pills, animated link underlines, and the featured badge. |

---

##### `Contact/`

| File | Purpose |
|------|---------|
| `Contact.jsx` | Two-column layout with contact channel links on the left and a form on the right. The form manages its own state (`name`, `email`, `message`) and a submission status (`idle`, `loading`, `success`, `error`). The `handleSubmit` function contains a placeholder `setTimeout`; replace it with a real `fetch` call to a back-end endpoint or a service such as Formspree. |
| `Contact.css` | Grid layout, form field styles (focus ring, placeholder colour), submit button disabled state, and coloured feedback banners for success and error states. |

---

##### `Footer/`

| File | Purpose |
|------|---------|
| `Footer.jsx` | Site footer with the logo, a repeated navigation list, social media links, and a copyright notice that reads the current year dynamically. Update the social `href` values and the copyright name to match real details. |
| `Footer.css` | Horizontal flex layout for the top row that wraps and centres on small screens. Styles for social link buttons with hover border highlight. |

---

### `src/App.jsx`

Root component that imports the global stylesheet and composes all sections in order: `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, `Footer`. This is the single file to edit when adding, removing, or reordering sections.

### `src/main.jsx`

React DOM entry point. Creates the root and renders `<App />` inside `<StrictMode>`.

---

## Customisation Guide

1. **Personal information** — Update `src/components/Hero/Hero.jsx`, `src/components/About/About.jsx`, and `src/components/Footer/Footer.jsx` with a real name, title, bio, location, and social links.
2. **Projects** — Edit `src/data/projects.js`. Each entry is one card in the grid.
3. **Skills** — Edit `src/data/skills.js`. Adjust categories, skill names, and percentage levels.
4. **Design tokens** — All colours, fonts, and spacing live in `src/styles/variables.css`. Change the `--color-primary` value to rebrand the entire site in one edit.
5. **Avatar** — Replace the initials `<div>` in `About.jsx` with an `<img>` tag pointing to a real photo.
6. **Resume** — Place a `cv.pdf` file inside the `public/` directory so the download link in `About.jsx` resolves correctly.
7. **Contact form** — Replace the `setTimeout` in `Contact.jsx` with a `fetch` POST to a real endpoint.
8. **Favicon** — Replace `public/favicon.svg` with a personal logo.
