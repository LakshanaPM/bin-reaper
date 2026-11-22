# Project Structure & Conventions

## Monorepo Layout
waste-segregation-ai/
├── apps/api/        → Node.js Express backend (MY scope)
├── apps/web/        → React PWA frontend (Partner's scope)
├── ml/              → Python ML training pipeline (MY scope)
├── data/seed-rules/ → City rule JSON seed files (MY scope)
├── scripts/         → DB seed scripts (MY scope)
└── docs/            → API contract, mock API, shared docs

## Naming Conventions
- Files: kebab-case (rule-engine.ts, city-selector.tsx)
- API routes: REST, lowercase, hyphenated (/api/city-rules)
- DB tables: snake_case (city_rules, item_taxonomy)
- MongoDB collections: camelCase (crowdReports, reportQueue)
- Environment variables: SCREAMING_SNAKE_CASE

## API Response Format (always)
{
  "success": true,
  "data": { ... },
  "error": null
}

## Backend Folder: apps/api/src/
- routes/     → Express route handlers
- services/   → Business logic (ruleEngine, crowdResolver, scraper)
- db/          → Database connections (postgres.ts, mongo.ts)
- middleware/  → Auth, rate limiting, error handler
- types/       → TypeScript interfaces shared across backend

## Seed Data Format (data/seed-rules/*.json)
{
  "city": "bangalore",
  "city_name": "Bengaluru",
  "country": "india",
  "state": "karnataka",
  "bins": {
    "wet_waste":  { "color": "#4CAF50", "label": "Green Bin" },
    "dry_waste":  { "color": "#2196F3", "label": "Blue Bin" },
    "hazardous":  { "color": "#F44336", "label": "Red Bin" },
    "sanitary":   { "color": "#9C27B0", "label": "Purple Bin" }
  },
  "rules": [
    {
      "item": "pizza_box",
      "bin": "wet_waste",
      "instructions": "Remove leftover food. Flatten the box. Place in green bin."
    }
  ]
}