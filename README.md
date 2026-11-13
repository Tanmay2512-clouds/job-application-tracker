# Job Hunt

A polished job application tracker built with Next.js 16, React 19, TypeScript, and MongoDB. The app gives job seekers a structured way to monitor their application pipeline from the initial interest stage through interviews and offers, all inside a clean, board-based workflow.

## Overview

Job Hunt is designed for people who want a focused, low-friction system to manage the messy process of job searching. Instead of tracking applications in scattered notes, spreadsheets, or tabs, users get a personalized dashboard that organizes each opportunity by stage and keeps the details in one place.

The current version includes:

- Secure sign-up and sign-in with Better Auth
- Automatic onboarding for each new user
- A default `Job Hunt` board initialized on account creation
- A drag-and-drop Kanban workflow for application stages
- Persistent storage with MongoDB and Mongoose
- Editable job records with company, role, location, salary, tags, URL, and notes
- Visual status tracking across the hiring lifecycle

## Why it exists

Job searching is high-volume and inconsistent. This project aims to reduce cognitive overhead by turning the process into a workflow: capture opportunities, move them through stages, and keep context attached to each application without losing track of details.

## Key features

- Personalized board per user
- Default pipeline: Wish List, Applied, Interviewing, Offer, Rejected
- Add, edit, move, and delete job applications
- Inline metadata capture for:
  - company
  - position
  - location
  - salary
  - job URL
  - tags
  - description
  - notes
- Drag-and-drop organization using `@dnd-kit`
- Responsive dashboard UI with shadcn-inspired components
- MongoDB-backed data model for boards, columns, and job records
- Clean landing page and auth experience

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Base UI primitives
- MongoDB + Mongoose
- Better Auth
- Lucide React
- `@dnd-kit` for drag-and-drop interactions

## Project structure

```bash
app/                    # App Router routes, dashboard, auth pages, and UI entrypoints
components/             # Reusable UI and Kanban components
lib/                    # Database configs, auth helpers, models, and board initialization
  auth/                 # Better Auth setup and session helpers
  models/               # Schema definitions for Board, Column, and JobApplication
scripts/                # Utility scripts
public/                 # Static assets
```

## Application flow

1. A user signs up or signs in.
2. Better Auth creates the account and triggers board initialization.
3. A default `Job Hunt` board is created with standard pipeline columns.
4. The user adds job applications and tracks them across stages.
5. Jobs can be moved between columns, edited, or removed as the process evolves.

## Default board stages

- Wish List
- Applied
- Interviewing
- Offer
- Rejected

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm or another package manager
- MongoDB instance or Atlas connection

### Installation

```bash
git clone <repository-url>
cd job-application-tracker
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```bash
MONGODB_URL="mongodb://localhost:27017/job-application-tracker"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_SECRET="your-strong-secret"
```

If you're using MongoDB Atlas, replace `MONGODB_URL` with your connection string.

### Run the app locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available scripts

```bash
npm run dev        # Start the Next.js development server
npm run build      # Production build
npm run start      # Start the production server
npm run lint       # Run ESLint on the project
npm run seed:jobs  # Seed job data from the script in /scripts
```

## Current implementation notes

This release already includes the core of a functional job-tracking workflow:

- authenticated user onboarding
- default board generation
- Kanban drag-and-drop movement of applications
- job record management
- responsive UI for daily job-search operations

The project is a strong foundation for future extensions such as filters, analytics, reminders, saved searches, interview tracking, and application statistics.

## License

This project is currently intended for personal or internal use as a portfolio or productivity application. Update this section if you plan to distribute it publicly.
