# Job Application Tracker

A modern job search dashboard built with Next.js to help users organize, track, and manage their job applications in one place.

## Overview

This project is a Kanban-style job tracking app where each user gets a personalized dashboard for managing application progress. The default workflow includes stages like "Wish List", "Applied", "Interviewing", "Offer", and "Rejected" so users can move applications through the hiring pipeline visually.

## Features

- User authentication with email and password using Better Auth
- Personalized dashboard per registered user
- Job board initialized automatically for each new account
- Kanban columns for application stages
- Application tracking with company, role, notes, salary, job URL, tags, and dates
- Clean, responsive interface built with Tailwind CSS and component-based UI patterns
- MongoDB-backed persistence for users, boards, columns, and job records

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS
- shadcn-style UI components
- MongoDB + Mongoose
- Better Auth for authentication
- Lucide React icons
- Base UI utilities

## Project Structure

```bash
app/                 # App Router pages and API routes
components/         # Reusable UI and dashboard components
lib/                # Database connection, auth, and models
  auth/              # Better Auth setup and session helpers
  models/            # Mongoose schemas for boards, columns, and jobs
public/             # Static assets
``` 

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance or MongoDB Atlas connection string

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the project root:

```bash
MONGODB_URI="mongodb://localhost:27017/job-application-tracker"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
```

Optional but recommended for production-like auth security:

```bash
BETTER_AUTH_SECRET="your-strong-secret"
```

### Run the app

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Authentication Flow

The app uses Better Auth with email/password authentication. When a user signs up, the system automatically creates a default `Job Hunt` board and initializes the standard hiring stages.

## Default Board Stages

- Wish List
- Applied
- Interviewing
- Offer
- Rejected

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build the production app
npm run start    # Run the built app
npm run lint     # Lint the project
```

## Notes

This project is designed as a job application tracking dashboard and is built around a MongoDB-backed model layer with a flexible Kanban workflow. It is well-suited for personal productivity use and can be extended with features such as filters, drag-and-drop job management, analytics, and reminders.
