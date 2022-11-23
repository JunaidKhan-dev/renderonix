const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  refs: {
    "chromatic-published-Storybook": {
      // The title of your Storybook
      title: "Renderonix",
      // The url provided by Chromatic when it was published
      url: "https://renderonix.chromatic.com",
    },
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-backgrounds',
  ],
  framework: "@storybook/react",
}
