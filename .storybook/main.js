module.exports = {
  stories: [
    '../libs/documentation/**/*.stories.ts',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    'storybook-addon-preview/register',
  ],
  framework: '@storybook/angular',
  core: {
    builder: 'webpack5',
  },
  // refs: {
  //   'ngx-uswds': {
  //     title: "NGX-USWDS",
  //     url: "https://gsa.github.io/ngx-uswds",
  //     // expanded: false // optional, true by default
  //   }
  //  }
};
