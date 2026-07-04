#!/usr/bin/env bash
# Smoke checks — local repo + optional live URL (no form submit)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

verify_local() {
  echo "Checking local docs/ ..."
  test -f "$ROOT/docs/index.html"
  test -f "$ROOT/docs/config.js"
  test -f "$ROOT/docs/robots.txt"
  test -f "$ROOT/docs/sitemap.xml"
  test -f "$ROOT/docs/assets/logo-summer-crew-cyprus.png"
  test -f "$ROOT/docs/assets/cover-with-logo-slogan.png"
  grep -q "SCC_CONFIG" "$ROOT/docs/config.js" || { echo "config.js: missing SCC_CONFIG"; exit 1; }
  grep -q "GOOGLE_CALENDAR_EMBED" "$ROOT/docs/config.js" || { echo "config.js: missing calendar key"; exit 1; }
  grep -q "summercrewcyprus@gmail.com" "$ROOT/docs/config.js" || { echo "config.js: missing email"; exit 1; }
  grep -q 'id="apply-form"' "$ROOT/docs/index.html" || { echo "index.html: missing apply form"; exit 1; }
  grep -q "formsubmit.co/ajax" "$ROOT/docs/index.html" || { echo "index.html: missing ajax form"; exit 1; }
  grep -q "formSubmitOk" "$ROOT/docs/index.html" || { echo "index.html: missing form validation"; exit 1; }
  echo "local: OK"
}

verify_live() {
  local BASE="${1:-https://summer-crew-cyprus.web.app}"
  echo "Checking $BASE ..."
  check() {
    local path="$1"
    local code
    code=$(curl -sf -o /dev/null -w "%{http_code}" "$BASE$path" || echo "000")
    echo "$path: $code"
    test "$code" = "200" || exit 1
  }
  check "/"
  check "/robots.txt"
  check "/sitemap.xml"
  check "/config.js"
  check "/assets/logo-summer-crew-cyprus.png"
  check "/assets/cover-with-logo-slogan.png"
  html=$(curl -sf "$BASE/")
  echo "$html" | grep -q "Summer Crew Cyprus" || { echo "home: missing title"; exit 1; }
  echo "$html" | grep -q "formsubmit.co/ajax" || { echo "home: missing ajax form action"; exit 1; }
  cfg=$(curl -sf "$BASE/config.js")
  echo "$cfg" | grep -q "SCC_CONFIG" || { echo "config: missing SCC_CONFIG"; exit 1; }
  echo "$cfg" | grep -q "summercrewcyprus@gmail.com" || { echo "config: missing email"; exit 1; }
  echo "live: OK"
}

case "${1:-all}" in
  local) verify_local ;;
  live) verify_live "${2:-https://summer-crew-cyprus.web.app}" ;;
  all)
    verify_local
    verify_live "${2:-https://summer-crew-cyprus.web.app}"
    echo "OK"
    ;;
  *)
    verify_live "$1"
    echo "OK"
    ;;
esac
