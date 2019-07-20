#!/usr/bin/env bash

set -euxo pipefail

yarn

yarn fix

if [[ $(git diff --name-only) != "" ]]; then
	echo "please run 'yarn fix' locally."
	exit 1
fi

yarn prod
