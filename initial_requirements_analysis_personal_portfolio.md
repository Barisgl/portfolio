# WEBSITE – INITIAL REQUIREMENTS ANALYSIS

**Project name:** Personal Professional Portfolio & Interactive Project Platform  
**Project type:** Personal CV, professional portfolio, and interactive project showcase  
**Languages:** German (DE) and English (EN)  
**Document type:** Initial Requirements Analysis  
**Version:** 1.0

---

## 1. Project Overview

The proposed website will be more than a conventional online CV. It will be a personal platform where the owner can present their professional background, education, technical skills, and practical projects in an accessible and interactive way.

Visitors should be able to:

- Learn about the owner's professional background and career experience.
- Review academic qualifications, courses, and course content.
- Explore technical skills and tools.
- Access projects involving SQL, Power BI, Tableau, Python, and other data-related technologies.
- View practical implementations, dashboards, code samples, and project outcomes.
- Visit related GitHub repositories and other professional profiles.

**Core principle:**  
*Show what you know. Demonstrate what you can do.*

## 2. Project Objectives

| ID | Objective | Description |
|---|---|---|
| OBJ-01 | Digital CV | Provide an accessible online professional CV. |
| OBJ-02 | Project Showcase | Present technical and practical projects. |
| OBJ-03 | Interactive Experience | Make project results and demonstrations interactive where feasible. |
| OBJ-04 | Bilingual Platform | Support both German and English. |
| OBJ-05 | Professional Branding | Build a consistent personal professional identity. |
| OBJ-06 | Scalability | Make it easy to add new projects and content over time. |

## 3. Stakeholders and Target Users

| User group | Main expectations |
|---|---|
| Recruiters | Review the CV, experience, education, and skills. |
| Hiring managers | Evaluate technical capabilities and project experience. |
| Data analysts | Examine project methods, code, data, and results. |
| Business analysts | Understand the business problems addressed and the insights generated. |
| Website owner | Maintain the profile and manage portfolio content. |

## 4. Functional Requirements

This section defines the main features the website should provide.

### 4.1. Homepage

The homepage should include:

- A personal introduction or hero section.
- Professional title or current role.
- A short professional summary.
- An overview of key technical skills.
- Selected or featured projects.
- A link to download the CV.
- Links to LinkedIn, GitHub, and other relevant professional profiles.
- A German/English language selector.

### 4.2. About Me and Professional Profile

This section will present the owner's professional identity and career direction.

Suggested content:

- Personal Introduction
- Professional Summary
- Career Objectives
- Technical Skills
- Languages
- Downloadable CV

### 4.3. Work Experience

Each work experience entry should support the following information:

| Field | Description |
|---|---|
| Company | Employer or organization name |
| Position | Job title or role |
| Duration | Employment period |
| Responsibilities | Main duties and responsibilities |
| Technologies | Tools and technologies used |
| Achievements | Outcomes, contributions, or measurable results |

### 4.4. Education and Courses

This section will cover academic education, professional training, and relevant courses.

Each education or course entry may include:

- University or training institution.
- Degree, qualification, or programme.
- Course names.
- Course descriptions and topics.
- Skills and knowledge acquired.
- Certificates, where available.
- Related practical projects.

**Example course entry:**

- **Course:** Database Management
- **Topics:** Relational Database Systems, SQL Fundamentals, Database Normalization, Joins and Subqueries, Data Modeling
- **Related project:** SQL Customer Analysis

### 4.5. Technical Skills

Skills should be organized into clear categories.

| Category | Example technologies or capabilities |
|---|---|
| Data Analysis | Excel, Python |
| Databases | SQL, PostgreSQL, MySQL |
| Business Intelligence | Power BI, Tableau |
| Programming | Python, SQL |
| Tools | GitHub, VS Code |
| Business and Analytics | Data Visualization, Reporting, KPI Analysis |

Where possible, each listed skill should link to one or more projects that demonstrate its practical use. Skill levels should only be displayed if they can be described consistently and credibly.

### 4.6. Project Showcase

**The Project Showcase is the central module of the website.**

Each project should have its own detail page and follow a consistent structure.

| Field | Description |
|---|---|
| Project Name | Project title |
| Description | Short project summary |
| Business Problem | Problem or business question being addressed |
| Objectives | Project goals |
| Dataset | Data source and dataset description |
| Methodology | Analytical approach and methods |
| Technologies | SQL, Power BI, Tableau, Python, etc. |
| Implementation | Practical implementation and workflow |
| Results | Main findings and outputs |
| Business Insights | Business implications or recommendations |
| Source Code | Link to the relevant GitHub repository |
| Live Demo | Link to an interactive demonstration, if available |

#### 4.6.1. Power BI Projects

The website should support:

- Embedding Power BI reports where the publication and access settings allow it.
- Displaying KPI analyses and interactive dashboards.
- Explaining the data model, measures, and analytical approach.
- Linking to the original report or relevant project repository.

#### 4.6.2. Tableau Projects

The website should support:

- Embedding dashboards published through Tableau Public, where appropriate.
- Presenting interactive visualizations.
- Explaining the data and analytical findings.
- Linking to the original Tableau publication.

#### 4.6.3. SQL Projects

The website should support:

- Displaying SQL scripts and query explanations.
- Showing sample query results in readable tables.
- Linking to SQL files or repositories on GitHub.
- Providing project context, database schema, and sample data descriptions.

An interactive SQL playground may be introduced in a later phase. It must use a separate, restricted demo database and safe query execution controls. Visitors must never receive direct access to a production database.

#### 4.6.4. Python Projects

The website should support:

- Data cleaning examples.
- Exploratory Data Analysis (EDA).
- Data visualization.
- Analytical scripts and automation examples.
- Links to notebooks and source code.

## 5. Multilingual Requirements

The website must support German and English.

| ID | Requirement |
|---|---|
| LANG-01 | Provide a German-language interface. |
| LANG-02 | Provide an English-language interface. |
| LANG-03 | Provide a language-switching function. |
| LANG-04 | Display page content in the selected language. |
| LANG-05 | Support German and English project descriptions. |
| LANG-06 | Preserve the selected language while navigating the website. |

**Suggested URL structure:**

- `domain.com/de/`
- `domain.com/en/`

The multilingual implementation should cover more than navigation labels. Profile descriptions, work experience, education, courses, and project content should also be available in both languages where translations are provided.

## 6. Non-Functional Requirements

Non-functional requirements describe how the website should operate.

| ID | Requirement | Description |
|---|---|---|
| NFR-01 | Responsive Design | Support mobile, tablet, and desktop screen sizes. |
| NFR-02 | Performance | Load pages and project content efficiently. |
| NFR-03 | Security | Protect personal data, credentials, and restricted resources. |
| NFR-04 | Usability | Provide clear navigation and an intuitive user experience. |
| NFR-05 | Scalability | Allow additional projects, content types, and features. |
| NFR-06 | SEO | Use search-engine-friendly page structure and metadata. |
| NFR-07 | Accessibility | Follow established web accessibility practices. |
| NFR-08 | Maintainability | Keep the codebase and content structure easy to update. |

## 7. Proposed Technical Architecture

The following technology stack is a preliminary recommendation. Final choices should be confirmed during technical design.

| Layer | Proposed technology | Purpose |
|---|---|---|
| Frontend | Next.js and React | Website interface, pages, and navigation |
| Programming language | TypeScript | Type safety and maintainable code |
| Styling | Tailwind CSS | Responsive visual design |
| Backend and database | Supabase | Database, authentication, and data access |
| Source control | GitHub | Version control and project repositories |
| Deployment | Vercel | Website hosting and deployment |
| BI integration | Power BI and Tableau | Dashboard embedding and visualization |

### 7.1. High-Level Architecture

```text
                         Website Visitor
                                |
                                v
                       Next.js Frontend
                                |
             +------------------+------------------+
             |                  |                  |
             v                  v                  v
       DE / EN Content     Profile Pages      Project Pages
                                                    |
                         +--------------------------+------------------+
                         |                 |                |          |
                         v                 v                v          v
                      GitHub            Power BI         Tableau    SQL Demo
                         |                 |                |          |
                         +--------------------------+------------------+
                                                    |
                                                    v
                                           Supabase Backend
                                                    |
                                      +-------------+-------------+
                                      |                           |
                                      v                           v
                                  Database                  Authentication

                         Vercel: Website Deployment
```

**Technical note:** An interactive SQL demonstration requires a dedicated backend and a restricted demo database. SQL execution must be validated and controlled on the server side. Database credentials and API secrets must not be exposed in frontend code.

## 8. Initial Data Model

The following entities provide a starting point for the database design.

| Entity | Example fields |
|---|---|
| User | ID, Name, Email |
| Profile | Title, Summary, Biography |
| Experience | Company, Position, Duration |
| Education | Institution, Degree, Description |
| Courses | Course Name, Topics, Institution |
| Skills | Skill Name, Category |
| Projects | Title, Description, Category |
| Project Technologies | Project ID, Technology ID |
| Project Resources | GitHub URL, Demo URL, Dashboard URL |
| Translations | Language, Content, Entity ID |

### 8.1. Data Relationships

The data model should allow relationships between projects, technologies, courses, and skills.

Examples:

- A project can use multiple technologies.
- A technology can be used in multiple projects.
- A course can be linked to one or more related projects.
- A project can have multiple resources, such as a GitHub repository, dashboard, and live demo.
- Each content item that requires translation should have German and English versions.

A detailed Entity Relationship Diagram (ERD) should be created during the database design phase.

## 9. Security and Data Protection

The following principles should be considered during implementation:

- Personal contact details should only be published intentionally.
- Confidential company information must not be included in public projects.
- Private or licensed datasets must not be published without permission.
- API keys and database credentials must never be stored in frontend code.
- SQL demonstrations must use restricted, read-only access where possible.
- Administrative functions must require authentication and appropriate authorization.
- Public project resources should be reviewed before publication.
- GDPR requirements should be assessed for personal data processing, analytics, and cookies.

## 10. Project Scope

The first release should focus on the essential portfolio experience. More complex functionality can be introduced in later releases.

| Feature | MVP | Later phase |
|---|:---:|:---:|
| German and English interface | Yes | |
| Online CV | Yes | |
| Work Experience | Yes | |
| Education and Courses | Yes | |
| Technical Skills | Yes | |
| Project gallery and detail pages | Yes | |
| GitHub links | Yes | |
| Power BI embedding | Yes, where sharing permits | |
| Tableau embedding | Yes, where sharing permits | |
| Interactive SQL editor | | Yes |
| Admin panel / content management | | Yes |
| Advanced project filtering | | Yes |

**MVP (Minimum Viable Product)** means the first usable release containing the essential features needed to present the owner's profile and projects professionally.

## 11. Success Criteria

The project will be considered successful when:

1. Visitors can use the website in both German and English.
2. Visitors can easily access and review the professional CV.
3. Work experience, education, courses, and skills are presented clearly.
4. Technical projects have dedicated detail pages.
5. Power BI and Tableau projects can be viewed on the website when their sharing settings permit embedding.
6. SQL projects provide access to code, explanations, and sample results.
7. The website works correctly on mobile, tablet, and desktop devices.
8. New projects can be added without redesigning the entire website.
9. Public pages do not expose private credentials or confidential data.

## 12. Proposed Development Roadmap

| Phase | Activities | Expected deliverable |
|---|---|---|
| 1. Requirements and Planning | Confirm requirements, priorities, and content | Approved requirements baseline |
| 2. UI/UX Design | Define sitemap, navigation, and page layouts | Wireframes and visual design |
| 3. Frontend Development | Build responsive pages and language switching | Functional frontend |
| 4. Backend Development | Implement database and content management | Backend and data layer |
| 5. Project Integration | Integrate GitHub, Power BI, Tableau, and SQL examples | Project showcase functionality |
| 6. Testing | Run functional, responsive, accessibility, and security tests | Test results and fixes |
| 7. Deployment | Configure hosting, domain, and production release | Published website |

## 13. Overall Assessment and Project Vision

The purpose of this project is not simply to publish a CV. It is to create a digital portfolio that combines professional experience, technical knowledge, and practical implementations in one place.

A traditional CV may state that the owner knows SQL or Power BI. This platform should provide evidence: visitors can open a project, review its business problem, inspect the SQL queries, explore an embedded dashboard, understand the analytical method, and view the results.

The platform is built around three central questions:

1. **Profile – Who am I?**  
   Personal introduction, professional summary, career history, and experience.

2. **Knowledge – What do I know?**  
   Education, courses, certificates, technical skills, and tools.

3. **Projects – What can I do?**  
   Practical work involving SQL, Power BI, Tableau, Python, and other relevant technologies.

**Final project vision:** Build a bilingual, scalable, and interactive digital portfolio that presents the owner's professional background, technical knowledge, and practical work in a clear and credible way.

---

## 14. Recommended Next Analysis Steps

This document is an initial requirements analysis. Before development begins, the following activities are recommended:

- **Software Requirements Specification (SRS):** Define detailed requirements for each feature.
- **Use Case Analysis:** Describe the main interactions for visitors and the website owner.
- **Information Architecture:** Define the sitemap, page hierarchy, and navigation.
- **UI/UX Wireframes:** Prepare page-level layouts and interaction designs.
- **Database Design:** Create the ER diagram, tables, relationships, and data rules.
- **Acceptance Criteria:** Define measurable completion conditions for each feature.
- **Implementation Plan:** Confirm the technology stack, development tasks, priorities, and release sequence.
