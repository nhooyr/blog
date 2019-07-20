#!/usr/bin/env bash

set -euo pipefail
source ci/lib.sh

if [[ $CI ]]; then
  curl -sL https://github.com/mvdan/sh/releases/download/v2.6.4/shfmt_v2.6.4_linux_amd64 > /usr/local/bin/shfmt
  chmod +x /usr/local/bin/shfmt
  ls -l /usr/local/bin/shfmt
fi

# shellcheck disable=SC2046
prettier --loglevel=warn --write $(git ls-files "*.js" "*.ts" "*.tsx" "*.html" "*.json" "*.css" "*.md" "*.toml")
# shellcheck disable=SC2046
shfmt -i 2 -w -s -sr $(git ls-files "*.sh")
