# Technical Integrations — Summer Crew Cyprus

```
Candidate
   │
   ├─► Site (Firebase) ──FormSubmit──► summercrewcyprus@gmail.com (inbound)
   │         │
   │         └─► Google Calendar embed (when URL in config.js)
   │
   ├─► Facebook Page ──Messenger APPLY──► saved reply → site link
   │
   └─► (future) summercrewcyprus.com ──Cloudflare──► Firebase hosting
```

| System | Role | Config key | Status |
|--------|------|------------|--------|
| Firebase Hosting | Live site | `firebase.json` | ✅ live |
| FormSubmit | Form → email | `APPLY_FORM_EMAIL` | ⏸ activate on 1st submit |
| Google Calendar | Interview slots | `GOOGLE_CALENDAR_EMBED` | ⏸ URL pending |
| Facebook Page | Social + Messenger | `FACEBOOK_PAGE` | ✅ |
| GitHub | Code source | repo main | ⏸ local commits unpushed |
| Cloudflare | Custom domain | `CUSTOM_DOMAIN` | ⏸ payment |

## Deploy pipeline

```bash
./scripts/deploy.sh          # hosting only
./scripts/verify-site.sh     # smoke checks (no email sent)
```

## When domain is ready

1. Pay Cloudflare invoice
2. Point A/CNAME → Firebase (see `dns/CLOUDFLARE-WHEN-READY.txt`)
3. Set `CUSTOM_DOMAIN` + `SITE_URL` in `docs/config.js`
4. `npx firebase deploy --only hosting`
