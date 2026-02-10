# HTC File Viewer

A simple web application to browse and view files from the HTC directory.

## Features

- **File Browser**: Navigate through the HTC folder structure
- **Markdown Preview**: View markdown files with proper formatting
- **Search**: Search for files by name
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode**: Automatic dark mode support
- **Vercel Ready**: Optimized for deployment on Vercel

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Markdown
- Lucide Icons

## Getting Started

### Local Development

```bash
cd htc-file-viewer
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy from the command line:

```bash
cd htc-file-viewer
npx vercel
```

## Project Structure

```
htc-file-viewer/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Main app page
│   │   └── globals.css     # Global styles + Tailwind
│   ├── components/
│   │   ├── file-tree.tsx   # Sidebar file browser
│   │   ├── file-viewer.tsx # File content viewer
│   │   └── breadcrumb.tsx  # Navigation breadcrumbs
│   └── lib/
│       ├── file-scanner.ts # File system utilities
│       └── utils.ts        # Utility functions
├── vercel.json             # Vercel configuration
└── package.json
```

## Notes

- The app reads files directly from the `../HTC` folder relative to the project root
- Only text-based files (markdown, JSON, code, etc.) are included in the file tree
- Hidden files and system files (starting with `.` or named `.DS_Store`) are ignored
