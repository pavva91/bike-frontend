#!/bin/bash

# ts
echo "Pre-commit Git Hook: Format and lint staged vue, ts, js files"

STAGED_VUE_FILES=$(git diff --cached --name-only -- '*.vue' '*.js' '*.ts')

if [ "$STAGED_VUE_FILES" '==' "" ]; then
	echo "No Vue, TS or JS Files to Update"
else
	echo "Run formatter (prettier)"
	for ts_file in $STAGED_VUE_FILES; do
		npx prettier "$ts_file" --write
		git add "$ts_file"
	done

	echo "Run linter (eslint)"
	for ts_file in $STAGED_VUE_FILES; do
		npx eslint "$ts_file" --fix
		echo "$ts_file"
		git add "$ts_file"
	done
fi

# TODO: go
# TODO: java
