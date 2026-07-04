#!/bin/bash
# Push current branch to GitHub (does NOT re-init git)
set -euo pipefail
cd "$(dirname "$0")"

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Not a git repo. Run: git init -b main && git remote add origin ..."
  exit 1
fi

git add -A
if git diff --cached --quiet; then
  echo "Nothing to commit."
else
  git commit -m "$(cat <<'EOF'
Summer Crew Cyprus — site updates

Live: https://summer-crew-cyprus.web.app
EOF
)"
fi

if gh repo view amitailevi/summer-crew-cyprus &>/dev/null; then
  git remote add origin https://github.com/amitailevi/summer-crew-cyprus.git 2>/dev/null || git remote set-url origin https://github.com/amitailevi/summer-crew-cyprus.git
  git push -u origin main
else
  gh repo create summer-crew-cyprus --public --source=. --remote=origin --push --description "Summer Crew Cyprus — youth hotel training recruitment, Limassol"
fi

echo "Done: https://github.com/amitailevi/summer-crew-cyprus"
