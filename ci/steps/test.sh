#!/usr/bin/env bash

set -euo pipefail
cd "$(dirname "$0")"
cd "$(git rev-parse --show-toplevel)"
source ci/lib.sh

if [[ ! $CI ]]; then
  jest --onlyChanged
  exit 0
fi

jest
codecov
