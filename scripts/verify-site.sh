#!/usr/bin/env bash
# Smoke checks — no form submit (no outbound email)
set -euo pipefail
BASE="${1:-https://summer-crew-cyprus.web.app}"
echo "Checking $BASE ..."
curl -sf -o /dev/null -w "home: %{http_code}\n" "$BASE/"
curl -sf -o /dev/null -w "robots: %{http_code}\n" "$BASE/robots.txt"
curl -sf -o /dev/null -w "sitemap: %{http_code}\n" "$BASE/sitemap.xml"
curl -sf -o /dev/null -w "config: %{http_code}\n" "$BASE/config.js"
curl -sf -o /dev/null -w "logo: %{http_code}\n" "$BASE/assets/logo-summer-crew-cyprus.png"
echo "OK"
