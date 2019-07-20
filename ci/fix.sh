#!/usr/bin/env bash

set -euo pipefail

echo "-- running fmt"

yarn -s fmt

echo "-- running lint"

yarn -s lint
