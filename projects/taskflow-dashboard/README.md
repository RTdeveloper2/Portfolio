# TaskFlow

A portfolio-ready full-stack project management dashboard.

## Stack

- React + TypeScript + Vite
- Node.js + Express
- REST API
- Single-service deployment

## Features

- Task CRUD
- Search and filtering
- Status and priority management
- Dashboard metrics
- API health endpoint
- Production build served by Express

## Run locally

From this directory:

```bash
npm run build
npm start
```

Open http://localhost:4000

For frontend hot reload during development:

```bash
cd client
npm install
npm run dev
```

The Vite development server proxies `/api` requests to the Node server on port 4000.

## Deploy

The repository includes a `render.yaml` blueprint for deploying the React frontend and Node.js API as **one Render web service**.

- Build: `cd projects/taskflow-dashboard && npm run build`
- Start: `cd projects/taskflow-dashboard && npm start`
- Health check: `/api/health`

The app currently uses an in-memory task store, so task changes reset when the service restarts.
