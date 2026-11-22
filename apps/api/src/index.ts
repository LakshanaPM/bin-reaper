import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import { pool } from './db/postgres';
import { connectMongo } from './db/mongo';
import { errorHandler } from './middleware/errorHandler';

import { cityRulesRouter } from './routes/cityRules';
import { classifyRouter } from './routes/classify';
import { crowdReportsRouter } from './routes/crowdReports';
import { scrapeRouter } from './routes/scrape';

const app = express();
const PORT = process.env.PORT ?? 3001;

// ── Global middleware ─────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ success: true, data: { status: 'ok', timestamp: Date.now() }, error: null });
});

// ── API routes ────────────────────────────────────────────────────────────────
app.use('/api/city-rules', cityRulesRouter);
app.use('/api/classify', classifyRouter);
app.use('/api/crowd-reports', crowdReportsRouter);
app.use('/api/scrape', scrapeRouter);

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, data: null, error: 'Route not found' });
});

// ── Error handler (must be last) ──────────────────────────────────────────────
app.use(errorHandler);

// ── Database connections + server start ───────────────────────────────────────
async function start(): Promise<void> {
  try {
    // Test PostgreSQL connection
    await pool.query('SELECT 1');
    console.log('[PostgreSQL] Connected successfully');

    // Connect MongoDB
    await connectMongo();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('[Startup] Failed to connect to databases:', err);
    process.exit(1);
  }
}

start();
