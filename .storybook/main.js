module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    { directory: '../src/stories', files: '**/*.stories.@(js|jsx|ts|tsx)', titlePrefix: 'Example' },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    previewMdx2: true,
  },
};
