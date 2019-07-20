#!/usr/bin/env bash

set -euo pipefail

export PAGER=cat

# CI is used by the scripts that source this file.
export CI=${GITHUB_ACTION-}

if [[ $CI ]]; then
  yarn install --frozen-lockfile --silent
fi
