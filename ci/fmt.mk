fmt: prettier
ifdef CI
	if [[ $$(git ls-files --other --modified --exclude-standard) != "" ]]; then
	  echo "Files need generation or are formatted incorrectly:"
	  git -c color.ui=always status | grep --color=no '\[31m'
	  echo "Please run the following locally:"
	  echo "  make fmt"
	  exit 1
	fi
endif

prettier:
	prettier --write --loglevel=warn $$(git ls-files "*.js" "*.ts" "*.tsx" "*.html" "*.json" "*.css" "*.md" "*.toml" "*.yaml" "*.yml")
