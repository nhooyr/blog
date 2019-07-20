#!/usr/bin/env bash

set -euo pipefail
source ci/lib.sh

if [[ $CI ]]; then
  jest
  codecov
  exit 0
fi

if [[ ${1:-} == "--all" ]]; then
  jest
else
  jest --onlyChanged
fi
