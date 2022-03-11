#!/bin/bash
cd "$(dirname "$0")"
rm -rf src/app/core/api
set -eu
./node_modules/.bin/openapi-generator-cli generate \
   -i http://localhost:8080/v3/api-docs \
   -g typescript-angular \
   -o src/app/core/api
rm -f src/api/{README.md,git_push.sh}
echo 'DO NOT EDIT THIS DIRECTORY.
Generated using `./generate-api.sh` ' > src/app/core/api/00-DO_NOT_EDIT-GENERATED.md
./node_modules/.bin/prettier "src/app/core/api/**/*.{ts,html,scss,md}" --write
