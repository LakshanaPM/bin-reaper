# Tech Stack (Locked — Do Not Deviate)

## Developer Context
I am the BACKEND developer. I own apps/api/ and ml/ only.
My partner owns apps/web/.
Generate ONLY backend (Node.js, Express, TypeScript) unless I explicitly ask for frontend.

## Frontend (Partner's scope — reference only)
- React 18 + TypeScript + Vite 5
- TailwindCSS 3 (dark theme, orange accent #FF6B00)
- TensorFlow.js with TFLite runtime (on-device AI)
- IndexedDB via idb library
- Service Worker via Workbox (offline routing)
- PWA (installable, offline-capable)

## Backend (MY scope)
- Runtime: Node.js 20 LTS
- Framework: Express 4
- Validation: Zod (all request/response schemas)
- Web Scraping: Cheerio + Axios
- LLM: OpenAI API (gpt-4o-mini) for crowd report resolution
- File uploads: Multer
- Scheduled jobs: node-cron

## Database
- PostgreSQL via Supabase (city_rules, item_taxonomy, cities, model_versions)
  - MATERIALIZED VIEW hot_rules for fast rule cache (NO Redis)
- MongoDB Atlas (crowd_reports, report_queue, audit_logs)
- NO Redis — PostgreSQL handles caching via materialized views

## ML Pipeline (MY scope)
- Python 3.11 + TensorFlow 2.x
- Base Model: EfficientNet-Lite0 (pretrained ImageNet)
- Dataset: TACO Dataset
- Output: .tflite file, INT8 quantized, ~5MB
- Training: Google Colab (free T4 GPU)

## API Response Format (always)
{
  "success": true | false,
  "data": { ... } | null,
  "error": null | "error message"
}

## Hosting
- Backend: Railway
- PostgreSQL: Supabase (free tier)
- MongoDB: MongoDB Atlas (free tier)

## Code Style
- TypeScript strict mode everywhere
- ESLint + Prettier on all files
- Async/await (no callbacks, no raw Promises)
- Named exports (no default exports except pages)
- Never swallow errors silently