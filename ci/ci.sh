#!/usr/bin/env bash

set -euo pipefail

yarn --version
./ci/fix.sh

echo "-- running test"

yarn -s test
