# Personal CV Website

A responsive personal CV website showcasing my experience, skills,
projects, and contact information.

Built with React, TypeScript, and shadcn/ui. All content is maintained
directly in the source code, without a backend or database.

## Features

- Responsive layout for desktop and mobile
- Mobile navigation with a slide-out menu
- Introduction and profile section
- About me and work experience
- Technical skills grouped by category
- Selected team and personal projects
- Email and GitHub contact links
- Light theme with emerald accents

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React
- React Icons

## Getting Started

### Prerequisites

- A Node.js version compatible with the project's Vite version
- npm

### Installation

Clone this repository, then open its directory in your terminal.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the website for production |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
src/
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── about-me.tsx
│   ├── experience.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   └── contact.tsx
├── lib/
│   └── utils.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Customization

Update the corresponding components to change the website content:

| Component | Content |
| --- | --- |
| `navbar.tsx` | Branding and navigation links |
| `hero.tsx` | Name, introduction, and profile card |
| `about-me.tsx` | Personal introduction |
| `experience.tsx` | Work experience and contributions |
| `skills.tsx` | Technologies and tools |
| `projects.tsx` | Project descriptions and repository links |
| `contact.tsx` | Contact section |

The contact email is passed to the `Contact` component in `App.tsx`.
Theme variables and global styles are defined in `src/index.css`.

## Production Build

Generate the production files:

```bash
npm run build
```

The generated website is available in the `dist/` directory.

Preview it locally:

```bash
npm run preview
```

## Infrastructure and CI/CD

- Manage AWS hosting infrastructure with Terraform
- Run automated checks through GitHub Actions
- Automatically deploy the website after changes are merged into `main`

## Author

**Mirmukhammad Mirxamidov**

- GitHub: [mirmukhammad77](https://github.com/mirmukhammad77)
- Email: [mirmuxammadmirxamidov@gmail.com](mailto:mirmuxammadmirxamidov@gmail.com)