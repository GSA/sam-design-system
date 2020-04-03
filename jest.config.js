module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js'
  },
  resolver: '@nrwl/builders/plugins/jest/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: { 
    includeAllSources: true,
  dir: 'coverageNew/',
  reporters: [
      { type: "html", subdir: "html" },
      { type: 'text-summary' }
  ]
}
};
