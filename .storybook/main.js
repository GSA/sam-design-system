module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
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
};
