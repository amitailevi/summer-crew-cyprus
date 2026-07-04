# Candidates tracker

Columns match site apply form (FormSubmit → email) and `operations/CANDIDATES-TRACKER.csv`.

| Column | Source |
|--------|--------|
| id | manual / auto-increment |
| date_applied | FormSubmit timestamp |
| source | website \| facebook_lead \| messenger |
| full_name | form `full_name` |
| passport | form `passport` |
| birth_year | form `birth_year` |
| parents_address | form `parents_address` |
| mobile | form `mobile` |
| email | form `email` |
| english_level | form `english_level` |
| time_in_cyprus | form `time_in_cyprus` |
| interview_slot | Calendar booking / manual |
| status | new \| interview_booked \| interviewed \| hired \| rejected |
| notes | free text |

Copy rows from FormSubmit emails into CSV manually until CRM exists.
