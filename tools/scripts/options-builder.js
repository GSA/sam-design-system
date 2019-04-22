module.exports = class OptionsBuilder {
  constructor (defaults) {
    this.projectName;
    this.version;
    this.dryRun = defaults.dryRun;
    this.angularJson = defaults.angularJson;
    this.packageJson = defaults.packageJson;
    this.rootDir = defaults.rootDir;

    this.validVersions = [
      'major',
      'minor',
      'patch'
    ]
  }

  setDryRun (dryRun) {
    this.dryRun = dryRun;
  }

  addAngularJson (path) {
    this.angularJson = path;
  }

  addPackageJson (path) {
    this.packageJson = path;
  }

  setProjectName (name) {
    this.projectName = name;
  }

  setRootDir (path) {
    this.rootDir = path;
  }

  setVersion (version) {
    if (this.isValidVersion(version)) {
      this.version = version;
    } else {
      throw new Error(`Version must be one of ${this.validVersions.join(' ')}`);
    }
  }

  isValidVersion (version) {
    return this.validVersions.indexOf(version) !== -1;
  }

  build () {
    return {
      projectName: this.projectName,
      dryRun: this.dryRun,
      angularJson: this.angularJson,
      packageJson: this.packageJson,
      rootDir: this.rootDir,
      version: this.version
    }
  }
}
