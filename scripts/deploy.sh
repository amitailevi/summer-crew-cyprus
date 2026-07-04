#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
echo "Deploying Firebase hosting..."
npx firebase deploy --only hosting
echo "Done: https://summer-crew-cyprus.web.app"
