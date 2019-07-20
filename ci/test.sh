#!/usr/bin/env bash

set -euo pipefail
source ci/lib.sh

if [[ ! $CI ]]; then
  jest --onlyChanged
  exit 0
fi

jest
codecov
