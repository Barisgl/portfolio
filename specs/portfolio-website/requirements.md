# Requirements — Personal CV & Data Analytics Portfolio
**Owner:** Barış Gül  
**Version:** 1.0  
**Status:** Draft — Awaiting Owner Approval  
**Date:** 2026-11-14

---

## 1. Project Overview

A bilingual (English / German) personal portfolio website for Barış Gül — Supply Chain Analyst and Data Analytics professional based in Ingolstadt, Germany. The site combines an online CV with a dynamic, interactive project showcase. Visitors can explore real Power BI dashboards, Tableau visualisations, SQL scripts, and Python analyses directly on the site.

**Core principle:** *Show what you know. Demonstrate what you can do.*

---

## 2. Assumptions & Open Decisions

| ID | Assumption / Decision | Status |
|---|---|---|
| A-01 | Default language is **English**; German is the second language. | Confirmed |
| A-02 | URL structure: `domain.com/en/` and `domain.com/de/` | Confirmed |
| A-03 | Content is managed via **JSON/MDX files in the repository** for MVP; a database (Supabase) may be added in a later phase. | Confirmed |
| A-04 | The CV PDF is a **static file** uploaded to the repository and served for download. | TBD — owner to confirm |
| A-05 | Power BI reports are embedded via **Power BI Publish to Web** (public iframe embed). | TBD — owner to confirm sharing is enabled |
| A-06 | Tableau dashboards are embedded via **Tableau Public** iframe embed. | TBD — owner to confirm |
| A-07 | Domain name is TBD; deployment target is **Vercel**. | TBD |
| A-08 | No admin UI in MVP; content is updated by editing files and pushing to GitHub. | Confirmed |
| A-09 | No contact form in MVP; contact is via LinkedIn/email links only. | TBD — owner to confirm |
| A-10 | The interactive SQL playground is **out of scope for MVP** (noted in requirements doc section 10). | Confirmed |

---

## 3. User Stories & Acceptance Criteria

### 3.1 Navigation & Language

---

**REQ-001 — Language Switcher**  
*As a visitor, I want to switch between English and German so that I can read the site in my preferred language.*

Acceptance Criteria:
- A language toggle (EN / DE) is visible on every page in the navigation bar.
- Switching language updates all UI labels, navigation items, and content without a full page reload where possible.
- The selected language persists across page navigation during the same session.
- Each language version has its own URL path (`/en/` and `/de/`).
- If a translation is missing for a content item, the English version is displayed as a fallback.

---

**REQ-002 — Responsive Navigation**  
*As a visitor on any device, I want clear navigation so that I can reach any section of the site easily.*

Acceptance Criteria:
- A navigation bar is present on every page with links to: Home, About, Experience, Education, Skills, Projects.
- On mobile screens (< 768 px), the navigation collapses into a hamburger menu.
- The active page link is visually highlighted.
- Navigation renders correctly on mobile, tablet, and desktop viewports.

---

### 3.2 Homepage

---

**REQ-003 — Hero Section**  
*As a recruiter visiting the homepage, I want to immediately understand who Barış is and what he does so that I can decide whether to explore further.*

Acceptance Criteria:
- The hero section displays: full name ("Barış Gül"), professional title ("Supply Chain Analyst | Supply Chain Analytics"), location ("Ingolstadt, Germany"), and a short professional summary.
- A profile photo is displayed (placeholder used until owner provides final image).
- Two clear call-to-action buttons are present: "View Projects" and "Download CV".
- The hero section is fully visible without scrolling on a 1280 px desktop screen.

---

**REQ-004 — Featured Projects on Homepage**  
*As a visitor, I want to see highlighted projects on the homepage so that I can quickly understand the type of work Barış does.*

Acceptance Criteria:
- A maximum of 3 featured projects are displayed as cards on the homepage.
- Each card shows: project title, one-line description, and technology tags (e.g. Power BI, SQL).
- Clicking a project card navigates to that project's detail page.
- Featured projects are configurable (marked in content files).

---

**REQ-005 — Skills Overview on Homepage**  
*As a recruiter, I want a quick overview of key technical skills on the homepage.*

Acceptance Criteria:
- Key skill categories are displayed (e.g. Power BI, SQL, Python, SAP, Tableau).
- Each skill is shown as a badge or icon-label combination.
- The section links to the full Skills page.

---

**REQ-006 — Social & Professional Links**  
*As a visitor, I want links to Barış's LinkedIn and GitHub so that I can explore his professional profiles.*

Acceptance Criteria:
- LinkedIn and GitHub icon links are present in the homepage hero section and in the site footer.
- Links open in a new browser tab.
- Links are present in both language versions.

---

### 3.3 About / Profile Page

---

**REQ-007 — Professional Profile Page**  
*As a recruiter, I want to read a detailed professional profile so that I can evaluate Barış's background and career direction.*

Acceptance Criteria:
- The page displays: personal introduction, professional summary, career objectives, spoken languages (Deutsch C1, Englisch B2), and a CV download button.
- All content is available in both English and German.
- The CV download button triggers download of the PDF file.
- The profile photo is displayed on this page.

---

### 3.4 Work Experience

---

**REQ-008 — Work Experience Timeline**  
*As a hiring manager, I want to see Barış's work history in a clear chronological format so that I can evaluate his career progression.*

Acceptance Criteria:
- Each experience entry shows: company name, job title, location, employment period (start–end or "Present"), key responsibilities, and technologies used.
- Entries are ordered chronologically, most recent first.
- The following entries are included:
  - Rohde & Schwarz — Werkstudent, Supply Chain Management (03/2026–Present)
  - Siemens — Data Analyst, Talent Programme (09/2023–09/2025)
  - adidas — Data Analyst (09/2023–09/2025, within talent programme)
  - Schäfer — Generative AI Engineer (09/2023–09/2025, within talent programme)
  - Icterra — Data Analyst (10/2022–05/2023)
  - Data Scientist Training — USA (09/2021–08/2022)
  - Wirtschaftsingenieur in Production — Turkey (06/2017–02/2019)
- All content is available in both English and German.
- Each entry may optionally link to a related project.

---

### 3.5 Education & Courses

---

**REQ-009 — Education Section**  
*As a recruiter, I want to see Barış's academic qualifications so that I can assess his formal education.*

Acceptance Criteria:
- Each education entry shows: institution name, degree/programme, duration, and relevant topics.
- The following entries are included at minimum:
  - M.Sc. Digitaler Einkauf und Nachhaltiges Supply Chain Management — TH Ingolstadt (10/2025–present)
  - B.Sc. Wirtschaftsingenieurwesen — Uludağ Üniversitesi (09/2013–07/2018)
- All content is available in both English and German.

---

**REQ-010 — Courses Section**  
*As a data analyst, I want to see which courses and certifications Barış has completed so that I can understand his technical depth.*

Acceptance Criteria:
- Each course entry shows: course name, institution/platform, topics covered, skills acquired, and optionally a certificate link.
- Courses can be linked to related projects (e.g. "Database Management" course links to "SQL Customer Analysis" project).
- All content is available in both English and German.

---

### 3.6 Technical Skills

---

**REQ-011 — Skills Page**  
*As a hiring manager, I want to see Barış's technical skills organised by category so that I can quickly assess fit for a role.*

Acceptance Criteria:
- Skills are grouped into categories: Data Analysis, Databases, Business Intelligence, Programming, Tools & Platforms, Supply Chain & Business.
- The following skills are present at minimum: SAP, Power BI, SQL, Python, Excel (Power Query), Snowflake, Tableau, Databricks, GitHub, VS Code.
- Each skill card/badge links to relevant projects that demonstrate it (where a project exists).
- Skill proficiency levels are only shown if the owner explicitly provides them; otherwise levels are omitted.
- All category labels and descriptions are available in both English and German.

---

### 3.7 Project Showcase — Core

---

**REQ-012 — Project Gallery Page**  
*As a visitor, I want to browse all projects in one place so that I can find projects relevant to my interests.*

Acceptance Criteria:
- All projects are listed as cards on the Projects gallery page.
- Each card shows: project title, short description, category (Power BI / Tableau / SQL / Python), and technology tags.
- Projects can be filtered by category (Power BI, Tableau, SQL, Python) without a full page reload.
- Clicking a project card navigates to that project's detail page.
- The gallery is available in both English and German.

---

**REQ-013 — Project Detail Page**  
*As a data analyst, I want to read the full detail of a project so that I can understand the problem, method, and results.*

Acceptance Criteria:
- Each project has its own URL (e.g. `/en/projects/supply-chain-reporting-transformation`).
- The detail page includes all of the following sections where data is provided:
  - Project Name & short description
  - Business Problem
  - Objectives
  - Dataset description
  - Methodology
  - Technologies used (as tags)
  - Implementation summary
  - Results & findings
  - Business Insights
  - GitHub repository link (opens in new tab)
  - Live Demo / embedded dashboard (if available)
- All content is available in both English and German.
- The page renders correctly on mobile, tablet, and desktop.

---

### 3.8 Project Showcase — Interactive Embeds

---

**REQ-014 — Power BI Dashboard Embedding**  
*As a visitor, I want to view an interactive Power BI dashboard directly on the project page so that I can explore the data without leaving the site.*

Acceptance Criteria:
- Power BI reports published via "Publish to Web" are embedded as iframes on the relevant project detail page.
- The embedded report is interactive (filters, slicers, drill-throughs work within the iframe).
- If a report is not publicly shareable, a static screenshot with a link to the report is shown instead, with a note explaining why embedding is unavailable.
- The following projects include Power BI embeds (subject to sharing permissions):
  - Supply Chain Reporting Transformation (Rohde & Schwarz)
  - Customer Segmentation (Siemens)
  - Marketing Campaign Performance Analytics (adidas)
- The iframe is responsive and resizes correctly on different screen sizes.

---

**REQ-015 — Tableau Dashboard Embedding**  
*As a visitor, I want to view an interactive Tableau dashboard directly on the project page.*

Acceptance Criteria:
- Tableau Public dashboards are embedded via the Tableau JavaScript API or iframe on the relevant project detail page.
- The embedded dashboard is interactive.
- If a dashboard is not on Tableau Public, a screenshot with a link is shown as fallback.
- The embed is responsive.

---

**REQ-016 — SQL Project Display**  
*As a data analyst, I want to read and understand the SQL queries used in a project so that I can evaluate Barış's SQL skills.*

Acceptance Criteria:
- SQL scripts are displayed with syntax highlighting in a code block.
- Each major query or script has a plain-language explanation below or beside it.
- Sample query results are shown in a formatted table.
- A link to the GitHub repository containing the full SQL files is provided.
- Database schema and sample data descriptions are included where relevant.

---

**REQ-017 — Python Project Display**  
*As a data analyst, I want to view Python code, analysis outputs, and visualisations from a project.*

Acceptance Criteria:
- Python code snippets are displayed with syntax highlighting.
- Charts and visualisation outputs (images/screenshots) from the analysis are displayed inline.
- A link to the GitHub repository or Jupyter notebook is provided.
- The project context (dataset, goal, method) is explained in plain language.

---

### 3.9 CV Download

---

**REQ-018 — CV Download**  
*As a recruiter, I want to download Barış's CV as a PDF so that I can share it internally.*

Acceptance Criteria:
- A "Download CV" button is present on the homepage and the About page.
- Clicking the button triggers download of a PDF file named `Baris-Gul-CV.pdf`.
- The CV file is served from the site's static assets (not an external link that could break).
- The button is available in both language versions.

---

### 3.10 Non-Functional Requirements

---

**REQ-019 — Responsive Design**  
Acceptance Criteria:
- All pages render correctly and are fully usable at: 375 px (mobile), 768 px (tablet), 1280 px (desktop), 1920 px (large desktop).
- No horizontal scroll appears on any page at any of the above breakpoints.
- Touch targets on mobile are at least 44 × 44 px.

---

**REQ-020 — Performance**  
Acceptance Criteria:
- Lighthouse Performance score ≥ 85 on desktop for the homepage.
- Largest Contentful Paint (LCP) ≤ 2.5 s on a standard broadband connection.
- Images are served in WebP format and lazy-loaded where below the fold.
- Next.js static generation (SSG) or incremental static regeneration (ISR) is used for all public pages.

---

**REQ-021 — SEO**  
Acceptance Criteria:
- Every page has a unique `<title>` and `<meta name="description">` tag in the active language.
- Open Graph tags (`og:title`, `og:description`, `og:image`) are present for the homepage and each project detail page.
- A `sitemap.xml` is generated and accessible at `/sitemap.xml`.
- A `robots.txt` is present.
- Semantic HTML elements (`<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`) are used throughout.
- Canonical URLs are set per language version.

---

**REQ-022 — Accessibility**  
Acceptance Criteria:
- Lighthouse Accessibility score ≥ 90 on the homepage.
- All images have descriptive `alt` attributes.
- All interactive elements (buttons, links, inputs) are keyboard-navigable and have visible focus states.
- Colour contrast ratio meets WCAG 2.1 AA (minimum 4.5:1 for body text, 3:1 for large text).
- The language switcher announces the language change to screen readers.

---

**REQ-023 — Security**  
Acceptance Criteria:
- No API keys, database credentials, or private tokens are present in the frontend codebase or committed to the public repository.
- Environment variables are used for any configuration values that must remain private.
- The site is served over HTTPS (enforced by Vercel).
- No personal contact details (phone number, personal email) are exposed unless the owner explicitly chooses to publish them.
- Power BI and Tableau embeds use only the public "Publish to Web" / Tableau Public sharing mechanism — no internal credentials are used.

---

**REQ-024 — Maintainability & Scalability**  
Acceptance Criteria:
- Adding a new project requires only creating/editing a content file (JSON or MDX) and optionally adding asset files — no component code changes required.
- Adding a new language requires only adding a translation file — no structural code changes required.
- The codebase passes TypeScript type-checking with no errors (`tsc --noEmit`).
- ESLint passes with no errors on the main branch.

---

## 4. Out of Scope (MVP)

The following features are explicitly excluded from the MVP and deferred to a later phase:

| Feature | Reason |
|---|---|
| Interactive SQL playground / query executor | Requires dedicated backend, security sandboxing — deferred |
| Admin panel / CMS UI | Not needed for MVP; content managed via files |
| Advanced project filtering (multi-tag, search) | Basic category filter covers MVP needs |
| Contact form | Simple email/LinkedIn links sufficient for MVP |
| Blog / articles section | Not in requirements |
| Analytics / tracking (Google Analytics, etc.) | GDPR assessment needed first |
| Supabase database integration | File-based content is sufficient for MVP |
| Dark mode | Nice-to-have, not required |

---

## 5. Technology Stack (Confirmed for MVP)

| Layer | Technology | Rationale |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSG/ISR, file-based routing, strong ecosystem |
| Language | TypeScript | Type safety, maintainability |
| Styling | Tailwind CSS | Utility-first, responsive, fast to build |
| Internationalisation | next-intl | Built for Next.js App Router, file-based translations |
| Content | JSON + MDX files | Simple, no DB needed for MVP, Git-versioned |
| Syntax highlighting | Shiki or Prism | Code blocks for SQL and Python |
| Deployment | Vercel | Zero-config Next.js hosting, free tier available |
| Source control | GitHub | Version control, also hosts project code links |
| BI Embeds | Power BI Publish to Web iframe + Tableau Public iframe | Standard public embedding, no credentials needed |

---

## 6. Content Inventory (Known at Requirements Phase)

### Work Experience (7 entries)
1. Rohde & Schwarz — Werkstudent, Supply Chain Management (03/2026–Present)
2. Siemens — Data Analyst, Talent Programme (09/2023–09/2025)
3. adidas — Data Analyst (09/2023–09/2025)
4. Schäfer — Generative AI Engineer (09/2023–09/2025)
5. Icterra — Data Analyst, project-based (10/2022–05/2023)
6. Data Scientist Training — USA (09/2021–08/2022)
7. Wirtschaftsingenieur in Production — Turkey (06/2017–02/2019)

### Education (2 entries)
1. M.Sc. Digitaler Einkauf und Nachhaltiges Supply Chain Management — TH Ingolstadt (10/2025–present)
2. B.Sc. Wirtschaftsingenieurwesen — Uludağ Üniversitesi (09/2013–07/2018)

### Projects (3 known, more to be added)
1. Supply Chain Reporting Transformation — Power BI (Rohde & Schwarz)
2. Customer Segmentation & Customer Value Analysis — Power BI (Siemens)
3. Marketing Campaign Performance Analytics — Power BI + SQL (adidas)

### Skills (from CV)
- **Supply Chain & Business:** Supply Chain Analytics, KPI-Reporting, Process Optimisation, Reporting Automation, Business Intelligence, Data Analysis
- **Tools & Platforms:** SAP, Power BI, SQL, Python, Excel (Power Query), Snowflake, Tableau, Databricks, GitHub, VS Code

---

## 7. Success Criteria

The MVP is complete when all of the following are true:

1. The site is live on Vercel and accessible via a public URL.
2. All pages render correctly in English and German.
3. Visitors can switch language from any page and content updates immediately.
4. The homepage, About, Experience, Education, Skills, and Projects pages are all functional.
5. At least 3 project detail pages exist with real content.
6. At least one Power BI or Tableau dashboard is embedded and interactive on a project page.
7. The CV PDF can be downloaded from the homepage and About page.
8. All pages pass Lighthouse Accessibility ≥ 90 and Performance ≥ 85 (desktop).
9. No credentials, API keys, or private data are exposed in the public repository.
10. The site renders correctly on mobile (375 px), tablet (768 px), and desktop (1280 px).
