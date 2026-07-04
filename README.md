# Summer Crew Cyprus

Youth recruitment site & ops materials — Limassol hotel training crew (ages 16–21).

**Live site:** https://summer-crew-cyprus.web.app  
**Firebase project:** `summer-crew-cyprus`  
**Facebook:** [Summer Crew Cyprus](https://www.facebook.com/profile.php?id=61591410037417)  
**Email:** summercrewcyprus@gmail.com

## Stack

| Layer | Tool |
|-------|------|
| Site | Firebase Hosting (`docs/`) |
| Code | GitHub (this repo) |
| Apply | FormSubmit AJAX → Gmail |
| Interviews | Google Calendar Appointments (embed) |
| Cowork assets | `~/Desktop/Summer-Crew-Cyprus-COWORK/` |

## Deploy site

```bash
cd cyprus-recruitment
npm run deploy
```

## Config

Edit `docs/config.js` — calendar embed URL, contact email, `SITE_URL`.

See `INTEGRATIONS.md` and `cowork/CALENDAR-5MIN.txt`.

## Apply flow

1. **Step 1** — Inline form (name, passport, birth year, address, mobile, email)
2. **Step 2** — Google Calendar embed (Wed/Thu 14:00–18:00) or Messenger fallback

## Verify

```bash
npm run verify          # local + live smoke checks
npm run verify:local    # repo files only
```
