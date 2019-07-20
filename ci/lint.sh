#!/usr/bin/env bash

set -euo pipefail
source ci/lib.sh

if [[ $CI ]]; then
  apt-get -qq update
  apt-get -qq install -y shellcheck
fi

# shellcheck disable=SC2046
eslint --max-warnings=0 --fix $(git ls-files "*.ts" "*.tsx" "*.js")
# shellcheck disable=SC2046
stylelint --fix $(git ls-files "*.js" "*.ts" "*.tsx")
# shellcheck disable=SC2046
shellcheck $(git ls-files "*.sh")
