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
      console.log(`\n\n\n\n\n\nABCDEFGH\n\n\n\n\n\n\n\n\n/sam-design-system/${process.env.BRANCH}/assets/\n\n\n\n\n\n\n\n\n\n\n\n\n`)
        config.module.rules.push({
            test: /.scss$/,
            loader: 'string-replace-loader',
            options: {
                search: /\/assets\//g,
                replace: `/sam-design-system/${process.env.BRANCH}/assets/`,
            },
        });
    }
    return config;
},
};
