#!/usr/bin/env bash

set -euo pipefail
cd "$(dirname "$0")"
cd "$(git rev-parse --show-toplevel)"
source ci/lib.sh

# shellcheck disable=SC2046
eslint --fix $(git ls-files "*.ts" "*.tsx" "*.js")
# shellcheck disable=SC2046
stylelint --fix $(git ls-files "*.js" "*.ts" "*.tsx")
# shellcheck disable=SC2046
shellcheck $(git ls-files "*.sh")
