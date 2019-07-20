#!/usr/bin/env bash

set -euo pipefail

# CI is used by the scripts that source this file.
export CI=${CI:-}

if [[ $CI ]]; then
	export DEBIAN_FRONTEND=noninteractive
  yarn install --frozen-lockfile --silent
fi
