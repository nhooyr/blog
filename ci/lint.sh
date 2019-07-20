#!/usr/bin/env bash

set -euo pipefail
source ci/lib.sh

if [[ $CI ]]; then
  apt-get update
  apt install -y shellcheck
fi

# shellcheck disable=SC2046
eslint --fix $(git ls-files "*.ts" "*.tsx" "*.js")
# shellcheck disable=SC2046
stylelint --fix $(git ls-files "*.js" "*.ts" "*.tsx")
# shellcheck disable=SC2046
shellcheck $(git ls-files "*.sh")
