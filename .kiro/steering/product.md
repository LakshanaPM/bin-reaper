# Product: City-Specific Waste Segregation AI

## What We're Building
A Progressive Web App that:
- Opens the phone camera
- Uses on-device AI (TFLite) to identify any waste item
- Looks up that item in a city-specific rule database
- Tells the user exactly which bin to use — with instructions
- Works fully OFFLINE after first load
- Allows users to report wrong rules (crowdsource updates)
- Auto-updates rules when cities change them

## Why It Exists
Recycling rules differ city to city — a pizza box is wet waste in Bangalore,
recyclable in London, landfill in New York. No existing app checks your
specific city's live rules. This solves that.

## Target Users
Every household in every city. Especially useful in India (BBMP 4-bin system),
Germany (strict separation), UK, and USA.

## Key Principles
- Offline-first: core features work with zero internet
- City-specific: never give generic advice
- Crowdsourced: rules stay current via community reports
- Lightweight: works on low-end Android phones
- Free to use: no paywalls on core features

## Hackathon
Kiroween 2026 — Frankenstein Track
Built by: LakshanaPM (backend/ML) + [Friend] (frontend/DB)