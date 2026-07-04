# תשתית רשמית — GitHub + Google + דומיין

## הארכיטקטורה (רק כלים רשמיים)

```
דומיין רשמי (summercrew.cy או .com)
        ↓
GitHub Pages (אחסון אתר)  או  Firebase Hosting (Google)
        ↓
Google Form inline on site (FormSubmit → Gmail)
        ↓
Google Calendar Appointments (תיאום ראיון 14–18)
        ↓
Gmail summercrewcyprus@gmail.com (התראות + FormSubmit)
        ↓
Facebook Page (שיווק)
```

**אתר חי:** `docs/` → Firebase Hosting → summer-crew-cyprus.web.app
**טופס:** FormSubmit AJAX → `summercrewcyprus@gmail.com` (ראה `INTEGRATIONS.md`)

---

## שלב 1 — GitHub (האתר)

### Repo
לאחר push: `https://github.com/YOUR-USER/summer-crew-cyprus`

### הפעלת GitHub Pages
1. Repo → **Settings** → **Pages**
2. Source: **Deploy from branch**
3. Branch: `main` → folder: **`/docs`**
4. Save
5. האתר יהיה ב: `https://YOUR-USER.github.io/summer-crew-cyprus/`

---

## שלב 2 — קניית דומיין רשמי

### אפשרות א' — Google (מומלץ אם אתה ב-Google Cloud)
[Google Domains / Squarespace Domains](https://domains.google/)
- דוגמאות: `summercrew.cy` (אם זמין), `summercrewcyprus.com`

### אפשרות ב' — בתוך Google Cloud
[Cloud Domains](https://cloud.google.com/domains/docs) — דומיין + DNS מנוהל

### מחיר משוער
`.com` ≈ $12–15/שנה

---

## שלב 3 — חיבור דומיין ל-GitHub Pages

1. קנה דומיין
2. ב-GitHub Pages → **Custom domain** → `www.yourdomain.com`
3. ב-DNS של הדומיין הוסף:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  YOUR-USER.github.io
   ```
4. עדכן `docs/config.js` → `SITE_URL`

---

## שלב 4 — טופס הגשה (FormSubmit — כבר מוגדר)

הטופס מוטמע ב-`docs/index.html` ושולח ל-`summercrewcyprus@gmail.com` דרך FormSubmit AJAX.

**הפעלה חד-פעמית:**
1. שלח טופס בדיקה ב-https://summer-crew-cyprus.web.app#apply
2. כנס ל-`summercrewcyprus@gmail.com` → לחץ **Activate Form** במייל מ-FormSubmit
3. מעכשיו כל הגשה מגיעה למייל + autoresponse למועמד

שדות הטופס: full name, passport, birth year, parents address, mobile, email.

---

## שלב 5 — Google Calendar Appointments

1. [calendar.google.com](https://calendar.google.com) — `summercrewcyprus@gmail.com`
2. **Appointment schedules** → Create
3. Name: `Summer Crew Interview`
4. Duration: 20 min, buffer: 0
5. Hours: Wed 14–18, Thu 14–18
6. העתק **booking page link**
5. הדבק ב-`docs/config.js` → `GOOGLE_CALENDAR_EMBED` (ראה `cowork/CALENDAR-5MIN.txt`)

---

## שלב 6 — Firebase Hosting (אופציונלי, Google Cloud)

אם אתה רוצה הכל ב-Google ולא GitHub Pages:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

חיבור דומיין: Firebase Console → Hosting → Add custom domain

---

## קבצים לעדכן אחרי setup

| קובץ | מה |
|------|-----|
| `docs/config.js` | קישורי Form + Calendar + דומיין |
| GitHub Pages settings | custom domain |

---

## עלות חודשית משוערת

| שירות | עלות |
|--------|------|
| GitHub Pages | חינם |
| Google Forms | חינם |
| Google Calendar | חינם |
| דומיין .com | ~$1/חודש |
| Google Workspace | אופציונלי ~$6/חודש |
| Firebase Hosting | חינם (tier נמוך) |

**מינימום: רק דומיין (~$12/שנה).**
