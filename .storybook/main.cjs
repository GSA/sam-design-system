module.exports = {
  stories: [
    '../libs/documentation/**/*.stories.ts',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    './source-code-addon/manager.js',
  ],

  staticDirs: [
    '../node_modules/accessible-html5-video-player/js',
    { from: '../apps/sam-design-system-site/src/assets/', to: '/assets' },
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
  },
  webpackFinal: async (config) => {
    if (process.env.GH_PAGES) {
        config.module.rules.push({
            loader: 'string-replace-loader',
            options: {
                search: '/assets/',
                replace: '/sam-design-system/assets/',
            },
        });
    }
    return config;
},
};
