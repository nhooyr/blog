#!/usr/bin/env bash

set -euo pipefail
cd "$(dirname "$0")"
cd "$(git rev-parse --show-toplevel)"

FIX_ALL="${1-}"

# We'll only lint uncomitted files.
uncomitted() {
  if [[ ${FIX_ALL-} ]]; then
    git ls-files "$@"
  else
    # TODO fix later.
    git ls-files "$@"
  fi
}

runUncomitted() {
  mapfile -t files < <(uncomitted "${@:2}")
  echo running "$1" "${files[@]}"
  if [[ ${files-} ]]; then
    eval "$1" "${files[@]}"
  fi
}

runUncomitted 'prettier --write' '*.js' '*.ts' '*.tsx' '*.html' '*.json' '*.css' '*.md' '*.toml'
runUncomitted 'shfmt -i 2 -w -s -sr' '*.sh'

runUncomitted 'eslint --fix' '*.ts' '*.tsx' '*.js'
runUncomitted 'stylelint --fix' '*.js' '*.ts' '*.tsx'
runUncomitted 'shellcheck' '*.sh'
