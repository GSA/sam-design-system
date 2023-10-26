module.exports = {
  stories: [
    '../libs/documentation/**/*.stories.ts',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
  ],

  staticDirs: [
    '../node_modules/accessible-html5-video-player/js',
    { from: '../apps/sam-design-system-site/src/assets/', to: 'assets' },
    { from: '../node_modules/@uswds/uswds/dist/fonts/', to: '/assets/uswds/fonts/'},
    { from: '../node_modules/@uswds/uswds/dist/img/', to: '/assets/uswds/img/'},
    { from: '../node_modules/@gsa-sam/sam-styles/sam-styles/packages/images/', to: '/assets/uswds/img/'},
  ],

  framework: {
    name: '@storybook/angular',
    options: {}
  },

  docs: {
    autodocs: false
  }
};
