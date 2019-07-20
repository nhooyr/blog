#!/usr/bin/env bash

# This script is for local testing. See .github for CI.

set -euo pipefail
cd "$(dirname "${0}")"
cd "$(git rev-parse --show-toplevel)"
source ci/lib.sh

function docker_run() {
  echo "--- running ${1}"
  local IMAGE
  IMAGE="$(docker build -qf "./ci/images/${1}.Dockerfile" .)"
  docker run \
    -it \
    --rm \
    -v "${PWD}:/repo" \
    -v "$(yarn cache dir):/usr/local/share/.cache/yarn/v4" \
    -w /repo \
    "${IMAGE}"
}

function help() {
  echo
  echo "$0 [-h] <step>"
  cat << EOF

If you do not pass in an explicit step, all steps will be ran in order.
EOF
  exit 1
}

if [[ ${1-} == "-h" || ${1-} == "--help" || ${1-} == "help" ]]; then
  help
fi

if [[ $# -gt 0 ]]; then
  docker_run "$@"
  exit 0
fi

docker_run fmt
docker_run lint
docker_run test
