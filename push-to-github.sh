#!/bin/bash
# Run in Mac Terminal (where gh auth status shows ✓ Logged in)
set -e

cd /Users/levi/cyprus-recruitment

echo "→ git init..."
rm -rf .git 2>/dev/null || true
git init -b main

echo "→ staging files..."
git add -A

echo "→ commit..."
git commit -m "$(cat <<'EOF'
Summer Crew Cyprus — site, Firebase, docs, apply flow

Live: https://summer-crew-cyprus.web.app
EOF
)"

echo "→ create repo + push..."
if gh repo view amitailevi/summer-crew-cyprus &>/dev/null; then
  git remote add origin https://github.com/amitailevi/summer-crew-cyprus.git 2>/dev/null || git remote set-url origin https://github.com/amitailevi/summer-crew-cyprus.git
  git push -u origin main
else
  gh repo create summer-crew-cyprus --public --source=. --remote=origin --push --description "Summer Crew Cyprus — youth hotel training recruitment, Limassol"
fi

echo ""
echo "✅ DONE: https://github.com/amitailevi/summer-crew-cyprus"
