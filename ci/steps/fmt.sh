#!/usr/bin/env bash

set -euo pipefail
cd "$(dirname "$0")"
cd "$(git rev-parse --show-toplevel)"
source ci/lib.sh

# shellcheck disable=SC2046
prettier --loglevel=warn --write $(git ls-files "*.js" "*.ts" "*.tsx" "*.html" "*.json" "*.css" "*.md" "*.toml")
# shellcheck disable=SC2046
shfmt -i 2 -w -s -sr $(git ls-files "*.sh")
