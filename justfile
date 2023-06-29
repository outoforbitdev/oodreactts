build:
    npm run build

version:
    npm view oodreactts version

newversion version:
    npm version {{version}}

publish: build
    npm publish --dry-run
    @echo "just confirm-publish to publish"

confirm-publish: build
    npm publish