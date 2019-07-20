#!/usr/bin/env bash

set -euo pipefail

./ci/fix.sh

echo "-- running test"

yarn -s test
