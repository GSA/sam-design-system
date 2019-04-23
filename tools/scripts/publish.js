 /**
  * Steps to publish
  * 1. Update each project package.json with latest version number
  * 2. Commit changes
  * 3. Run npm version to update parent package.json, commit changes, and tag
  * 4. Push changes to github.com
  * 5. Run github-release-notes to generate release notes
  * 6. For every publishable lib,
  *    a. npm pack the dist folder
  *    b. npm publish the lib
  */
