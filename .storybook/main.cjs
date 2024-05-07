module.exports = {
  stories: [
    '../libs/documentation/src/lib/storybook/**/*.mdx',
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
    { from: '../node_modules/@gsa-sam/sam-styles/sam-styles/packages/images/', to: '/assets/uswds/img/'}
  ],

  framework: {
    name: '@storybook/angular',
    options: {}
  },
  tags: {
    foo: {
      excludeFromSidebar: true
    }
  },

  docs: {
    autodocs: false
  },
  webpackFinal: async (config) => {
    if (process.env.GH_PAGES) {
        const assetsPath = process.env.pr ? `/sam-design-system/pr-preview/pr-${process.env.pr}/assets/` : `/sam-design-system/assets/`
        config.module.rules.push({
            test: /.scss$/,
            loader: 'string-replace-loader',
            options: {
                search: /\/assets\//g,
                replace: assetsPath,
            },
        });
    }
    return config;
},
};
