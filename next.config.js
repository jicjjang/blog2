const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack(config, _options) {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'markdown-loader'
        }
      ]
    });

    return config;
  }
});
