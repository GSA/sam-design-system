/**
 * Steps to publish:
 * 1. Checkout master branch, pull latest from Github
 * 2. Increment root package.json version number
 * 3. Increment each package version number
 * 4. Commit, tag commit with version number, and push to github
 * 5. Generate Github release notes
 * 6. Build each package
 * 7. Pack each package
 * 8. Publish each package
 */

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

  