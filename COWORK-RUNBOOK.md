# Summer Crew Cyprus — Claude Cowork Full Runbook

> **Owner:** Amitai Levi  
> **Brand:** Summer Crew Cyprus · Slogan: **Learn. Lead. Earn.**  
> **Facebook Page:** https://www.facebook.com/profile.php?id=61591410037417  
> **Rule:** English only on public page. Do NOT touch Israeli FB pages.

---

## CURRENT STATE (verified 2026-07-02)

| Item | Status |
|------|--------|
| Page created + logo | ✅ Done |
| Bio text | ✅ Done |
| Message button | ✅ Done |
| Post 1 (recruitment) | ✅ Published 16:39 — verify PIN + add image |
| Post 3 (education crew) | ✅ Published 16:51 |
| Post 2 (Real talk) | ❌ NOT published |
| Posts 4–5 | ❌ NOT published |
| Empty post (15:57) | ❌ DELETE — "ללא תוכן טקסט" |
| Cover photo | ❌ Grey — not uploaded |
| Category | ❌ Still "Elementary School" / בית ספר יסודי — change to **Education** |
| Contact details | ❌ Empty |
| Phone | ❌ None yet |
| Email | ❌ Still placeholder — need real domain email |
| Domain / website | ❌ Not live |
| Google Form / Calendar | ❌ Placeholders |
| GitHub repo | ❌ Not pushed |
| Ad campaign | ❌ Not started |

---

## PHASE 0 — DOMAIN + PROFESSIONAL EMAIL + PHONE (do first)

### 0A — Buy a real domain

**Recommended names (check availability, pick first available):**
1. `summercrewcyprus.com` ← preferred
2. `summercrew-cyprus.com`
3. `getsumercrew.com`

**Registrar (pick one):**
- **Cloudflare Registrar** — https://dash.cloudflare.com → Domain Registration (~$10–12/yr for .com)
- **Namecheap** — https://www.namecheap.com
- **Porkbun** — https://porkbun.com

The test email `summercrewcyprus@gmail.com` is the project inbox (inbound forms only).

After purchase, write down:
```
DOMAIN=______________________
```

---

### 0B — Professional email on that domain

**Recommended: Google Workspace** (most trusted for business)

1. Go to https://workspace.google.com/
2. Sign up → enter your new domain
3. Verify domain ownership (add TXT record in Cloudflare/Namecheap DNS)
4. Create mailbox:
   - `hello@YOUR-DOMAIN.com` — main public contact
   - OR `apply@YOUR-DOMAIN.com` — applications
5. Password: save securely

**Budget alternative: Zoho Mail Free**
- https://www.zoho.com/mail/zohomail-pricing.html — 1 free user on custom domain

**After setup, write down:**
```
CONTACT_EMAIL=hello@YOUR-DOMAIN.com
```

---

### 0C — Cyprus phone number (remote purchase)

**Yes — you CAN buy a Cyprus (+357) number remotely.** No physical SIM needed.

| Provider | URL | Price | Notes |
|----------|-----|-------|-------|
| DIDHub | https://didhub.io/buy/cyprus | ~$3/mo | +357 geographic, SMS supported, Limassol code 25 |
| CallHippo | https://callhippo.com/signup/cyprus-virtual-phone-number/ | ~$1+/mo | Fast setup, SMS on some plans |
| PBX.IM | https://www.pbx.im/services/virtual-phone-numbers/cy | varies | SMS + WhatsApp on some plans |

**Steps:**
1. Sign up at provider
2. Choose country: **Cyprus (+357)**
3. Area code: **25** (Limassol) if available
4. Complete any KYC if asked (varies by provider)
5. Forward calls to your mobile OR use their app
6. Test: call the number, send test SMS

**Important for Facebook:**
- Virtual numbers work fine as **display contact** on the Page
- Meta **SMS verification** sometimes rejects VoIP numbers — if FB rejects it, skip phone on Page and use **Messenger + email only** (already have Message button)
- Do NOT use phone for candidate contact — use Messenger + Form + email

**After setup:**
```
CYPRUS_PHONE=+357 __ ______
```

---

### 0D — Update project config after domain + email exist

Edit file: `/Users/levi/cyprus-recruitment/docs/config.js`

Replace placeholders:
```javascript
window.SCC_CONFIG = {
  GOOGLE_FORM_URL: "PASTE_FORM_URL_AFTER_PHASE_2",
  GOOGLE_CALENDAR_URL: "PASTE_CALENDAR_URL_AFTER_PHASE_2",
  FACEBOOK_PAGE: "https://www.facebook.com/profile.php?id=61591410037417",
  CONTACT_EMAIL: "hello@YOUR-DOMAIN.com",
  SITE_URL: "https://www.YOUR-DOMAIN.com"
};
```

---

## PHASE 1 — FIX ALL FACEBOOK ERRORS

**Page URL:** https://www.facebook.com/profile.php?id=61591410037417  
**Manage posts:** https://www.facebook.com/professional_dashboard/content/content_library/  
**Image folder:** `/Users/levi/Desktop/Summer-Crew-Cyprus-FB/images/`

| File | Use for |
|------|---------|
| `logo-summer-crew-cyprus.png` | Profile (already done — skip unless broken) |
| `cover-with-logo-slogan.png` | Cover banner |
| `post-ad-youth-fun.png` | Post 1 image |

**Always publish as:** Summer Crew Cyprus (not personal profile)

---

### STEP 1 — Delete empty post

1. Open content library URL above
2. Find post from today **15:57** with text **"ללא תוכן טקסט"**
3. Click **⋮** → **Delete post** → Confirm
4. Say: `STEP 1 DONE — empty post deleted`

---

### STEP 2 — Upload cover photo

1. Go to page URL
2. Click grey cover area → **Add cover photo** / **ערוך תמונת נושא**
3. **Upload photo** → select:
   `/Users/levi/Desktop/Summer-Crew-Cyprus-FB/images/cover-with-logo-slogan.png`
4. Position so slogan **"Learn. Lead. Earn."** is visible on the left
5. Save
6. Say: `STEP 2 DONE — cover uploaded`

---

### STEP 3 — Fix category (Elementary School → Education)

1. Go to: https://www.facebook.com/profile.php?id=61591410037417&sk=about
2. Tab **Category** / **קטגוריה**
3. Remove: **Elementary School** / **בית ספר יסודי**
4. Add: **Education** (or **Educational Consultant**)
5. Save
6. Refresh page — confirm header no longer shows בית ספר יסודי
7. Say: `STEP 3 DONE — category is Education`

---

### STEP 4 — Add contact details (real email + optional phone)

1. On page → **Edit contact info** / **עריכת פרטים ליצירת קשר**
2. **Email:** `hello@YOUR-DOMAIN.com` (from Phase 0B — NOT gmail)
3. **Website:** `https://www.YOUR-DOMAIN.com` (or GitHub Pages URL until DNS propagates)
4. **Phone:** `+357 XX XXX XXX` (from Phase 0C) — **skip if not purchased yet**
5. Save
6. Say: `STEP 4 DONE — contact details added`

---

### STEP 5 — Verify Post 1 is PINNED + add image if missing

Post 1 text (already live — do NOT republish duplicate):
```
🌊 SUMMER CREW CYPRUS — we're building something new

Not another job post.
A place to LEARN how to lead pool games, kids fun & beach vibes —
then actually do it in hotels. With a mentor who gets it.

🎓 3 days training
🎵 Music · dance · sports · little kids
📍 Limassol · Ages 16–21

16–21? Here for summer? Came for vacay and don't wanna leave?
Comment APPLY or DM us 💬

Interviews:
Wed 14:00–18:00 · Thu 14:00–18:00
```

**If post has NO image:**
- Edit post → Add photo → `post-ad-youth-fun.png` → Save

**Pin to top:**
- ⋮ on post → **Pin post** / **הצמדת פוסט**

Say: `STEP 5 DONE — post 1 pinned with image`

---

### STEP 6 — Publish Post 2 (Real talk)

1. Click **What's on your mind?** / **מה בא לך לשתף?**
2. Optional: attach `post-ad-youth-fun.png`
3. Paste EXACTLY:

```
Real talk 👇

✅ You're 16–21 in Cyprus
✅ English OK (Greek helps!)
✅ You want cash + sun + something that isn't boring
✅ You ended up here & wanna make the summer count

❌ You don't need to be an influencer
❌ You don't need experience

We train you. We guide you. You're not a number.

APPLY — DM or comment 💬
```

4. **Next** → **Publish** → skip boost/promote
5. Say: `STEP 6 DONE — post 2 published`

---

### STEP 7 — Publish Post 4

```
Imagine this summer:

☀️ Friends. Music by the pool.
😂 Laughing after a silly kids game you led.
🌅 Feeling like YOU did something cool.

That's the vibe we're building.

Training starts soon. Spots limited.

APPLY 💬
```

Publish → skip boost.  
Say: `STEP 7 DONE — post 4 published`

---

### STEP 8 — Publish Post 5

```
⏰ Interview week — limited slots

Wednesday 14:00 – 18:00
Thursday 14:00 – 18:00

📍 Limassol · 20 min · chill chat + mini demo
No stress. No tricks. Just be you.

DM "APPLY" 👇
```

Publish → skip boost.  
Say: `STEP 8 DONE — post 5 published`

---

### STEP 9 — Final Facebook verification

Take full-page screenshot. Confirm checklist:

- [ ] Cover shows Learn. Lead. Earn.
- [ ] Category = Education (not Elementary School)
- [ ] Contact email = hello@YOUR-DOMAIN.com
- [ ] Empty post deleted
- [ ] Post 1 pinned at top
- [ ] Posts live: 1, 2, 3, 4, 5 (no duplicates)
- [ ] Message button works

Say: `PHASE 1 COMPLETE — Facebook fixed`

**DO NOT start ads yet** unless user confirms.

---

## PHASE 2 — WEBSITE + GOOGLE (official tools only)

### STEP 10 — GitHub repo + Pages

Run in terminal:

```bash
cd /Users/levi/cyprus-recruitment

git init
git add docs/ README.md OFFICIAL-SETUP.md .gitignore facebook/
git commit -m "Add Summer Crew Cyprus official site and docs"

gh repo create summer-crew-cyprus --public --source=. --remote=origin --push
```

If `gh` not logged in: `gh auth login` first.

**Enable GitHub Pages:**
1. https://github.com/YOUR-USER/summer-crew-cyprus → Settings → Pages
2. Source: branch `main` → folder `/docs`
3. Save
4. Site URL: `https://YOUR-USER.github.io/summer-crew-cyprus/`

---

### STEP 11 — Connect custom domain to GitHub Pages

In repo → Settings → Pages → **Custom domain** → enter `www.YOUR-DOMAIN.com`

In domain DNS (Cloudflare/Namecheap):
```
A     @      185.199.108.153
A     @      185.199.109.153
A     @      185.199.110.153
A     @      185.199.111.153
CNAME www    YOUR-USER.github.io
```

Wait 15–60 min for DNS. Enable HTTPS in GitHub Pages settings.

Update `docs/config.js` → `SITE_URL: "https://www.YOUR-DOMAIN.com"`

```bash
cd /Users/levi/cyprus-recruitment
git add docs/config.js
git commit -m "Update site URL and contact email"
git push
```

---

### STEP 12 — Google Form (applications)

1. Log into Google with **hello@YOUR-DOMAIN.com** (Workspace)
2. https://forms.google.com → New form
3. Title: `Summer Crew Cyprus — Apply`
4. Questions:
   - Full name (short answer)
   - Email (short answer)
   - Age (short answer)
   - English level (multiple choice: Basic / Good / Fluent)
   - How long in Cyprus? (short answer)
   - Why do you want this? (paragraph)
5. Responses → Link to Sheets
6. Send → copy short link
7. Paste into `docs/config.js` → `GOOGLE_FORM_URL`
8. Push to GitHub

---

### STEP 13 — Google Calendar Appointments

1. https://calendar.google.com (same Workspace account)
2. **Appointment schedules** → Create
3. Name: `Summer Crew Interview`
4. Duration: **20 min**, buffer: **0**
5. Hours: **Wed 14:00–18:00**, **Thu 14:00–18:00** (Tue closed)
6. Copy booking page link
7. Paste into `docs/config.js` → `GOOGLE_CALENDAR_URL`
8. In Google Form confirmation message add:
   `Book your interview:` + Calendar link
9. Push to GitHub

---

### STEP 14 — Update Facebook website link

1. Page → Edit contact info
2. Website: `https://www.YOUR-DOMAIN.com`
3. Save

Say: `PHASE 2 COMPLETE — site live with form and calendar`

---

## PHASE 3 — AD CAMPAIGN (only if user says GO)

**Do NOT run until Phases 0–2 done.**

| Field | Value |
|-------|-------|
| Objective | Leads or Engagement (Messenger) |
| Name | `EducationCrew_Youth_16-21_Cyprus` |
| Special category | **Employment** (required) |
| Budget | €20/day × 5–7 days |
| Location | Cyprus — Limassol + 40km |
| Age | 16–21 |
| CTA | Send Message |
| Image | `post-ad-youth-fun.png` |

**Ad primary text:**
```
🌊 Stuck in Cyprus for summer? Came for holiday & wanna stay?

Summer Crew Cyprus trains you for hotel fun jobs —
pool vibes, kids activities, music & dance.

🎓 3-day training · mentor all season
Not a staffing agency — we TEACH you first.

Ages 16–21 · Limassol
Apply — we'll message you 💬
```

**Headline:** `Learn. Work. Summer by the sea.`

---

## MESSENGER SAVED REPLY (set up in Page Inbox)

```
Hey! 🌊 Summer Crew Cyprus here.

We train young people (16–21) for hotel entertainment —
music, dance, sports, kids. Education first, work second.

Send us:
1️⃣ Name
2️⃣ Email
3️⃣ Age
4️⃣ English (basic/good/fluent)
5️⃣ How long you're in Cyprus?

We'll email interview times (Wed/Thu 14–18).

Apply form: YOUR-FORM-URL
Book interview: YOUR-CALENDAR-URL
```

---

## COST SUMMARY

| Item | Cost |
|------|------|
| Domain .com | ~$10–15/year |
| Google Workspace | ~$7/month (or Zoho free) |
| Cyprus virtual phone | ~$3–15/month |
| GitHub Pages | Free |
| Google Forms + Calendar | Free |
| FB Ads (optional) | €20/day |

**Minimum to look professional:** domain + email ≈ **$20 setup + $7/mo**

---

## EXECUTION ORDER FOR COWORK

```
PHASE 0  → Buy domain → Setup hello@domain → Buy +357 number (optional)
PHASE 1  → Facebook fixes (Steps 1–9)
PHASE 2  → GitHub + Form + Calendar + DNS (Steps 10–14)
PHASE 3  → Ads (only on user approval)
```

**If blocked on payment/KYC:** complete Phases 1 first with Messenger-only contact, then return to Phase 0 when user provides domain credentials.

---

## FILES REFERENCE

```
/Users/levi/cyprus-recruitment/          — main project
/Users/levi/cyprus-recruitment/docs/     — website
/Users/levi/cyprus-recruitment/docs/config.js — update after setup
/Users/levi/cyprus-recruitment/facebook/HEBREW-APPROVAL.md — all approved texts
/Users/levi/Desktop/Summer-Crew-Cyprus-FB/images/ — all images
/Users/levi/Desktop/Summer-Crew-Cyprus-FB/steps/ — original STEP 01–07
```

**End of runbook.**
