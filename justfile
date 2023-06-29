build:
    npm run build

version:
    npm view oodreactts version

newversion version:
    npm version {{version}}

publish:
    npm publish --dry-run
    @echo "npm confirm-publish to publish"

confirm-publish:
    npm publish