lint: stylelint eslint

eslint:
	eslint --max-warnings=0 --fix $$(git ls-files "*.ts" "*.tsx" "*.js")

stylelint:
	stylelint --fix $$(git ls-files "*.js" "*.ts" "*.tsx")
