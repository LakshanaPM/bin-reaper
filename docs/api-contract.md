# API Contract
> Both partners read this. Backend implements it. Frontend consumes it.
> Last updated: Nov 22, 2026

## Base URL
- Local: http://localhost:3001
- Production: https://wasteai-api.up.railway.app (live after Day 3)

## Endpoints

### GET /api/rule
Returns the bin rule for an item in a city.
Query: ?item=pizza_box&city=bangalore
Response:
{
  "success": true,
  "data": {
    "item": "pizza_box",
    "bin": "wet_waste",
    "color": "#4CAF50",
    "label": "Green Bin",
    "instructions": "Remove leftover food. Flatten the box. Place in green bin.",
    "city": "bangalore"
  },
  "error": null
}

### GET /api/cities
Returns all supported cities.
Response:
{
  "success": true,
  "data": [
    { "id": "bangalore", "name": "Bengaluru", "country": "india",
      "bins": { "wet_waste": { "color": "#4CAF50", "label": "Green Bin" } } }
  ],
  "error": null
}

### GET /api/rules/updates
Returns rules changed after a timestamp (for offline sync).
Query: ?since=1700000000000 (Unix ms timestamp)
Response: { "success": true, "data": [...rules], "error": null }

### GET /api/model/latest
Returns current TFLite model version and download URL.
Response:
{
  "success": true,
  "data": { "version": "1.0.0", "url": "https://github.com/.../waste-v1.0.tflite", "size_bytes": 5242880 },
  "error": null
}

### POST /api/report
Submit a crowd report (wrong bin suggestion).
Body: { "item": "pizza_box", "city": "bangalore", "suggested_bin": "dry_waste", "photo_url": "optional" }
Response: { "success": true, "data": { "reportId": "abc123" }, "error": null }

## Error Response (all errors follow this format)
{ "success": false, "data": null, "error": "Human-readable error message" }