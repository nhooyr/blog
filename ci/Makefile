all: fmt lint test
fix: fmt lint

.SILENT:

.PHONY: *

.ONESHELL:
SHELL = bash
.SHELLFLAGS = -ceuo pipefail

include ci/fmt.mk
include ci/lint.mk
include ci/test.mk
