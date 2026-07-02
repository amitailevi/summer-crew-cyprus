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
| Apply | Google Form → Google Sheet |
| Interviews | Google Calendar Appointments |
| Cowork assets | `~/Desktop/Summer-Crew-Cyprus-COWORK/` |

## Deploy site

```bash
cd cyprus-recruitment
npx firebase deploy --only hosting
```

## Config

Edit `docs/config.js` — Form URL, Calendar URL, contact email.

## Apply flow

1. **Step 1** — Google Form (name, email, phone, age, English)
2. **Step 2** — Google Calendar (book Wed/Thu 14:00–18:00)

See `commands/SETUP-GOOGLE-FORM-CALENDAR.txt` in Desktop Cowork folder.
