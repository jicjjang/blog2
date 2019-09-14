const withSass = require('@zeit/next-sass');
const postContents = require('./contents/posts');

const postPages = postContents.reduce(
  (postPages, post) =>
    post.layout === 'post'
      ? Object.assign({}, postPages, {
          [post.path]: {
            page: '/post',
            query: { id: post.path.split('/post/')[1] }
          }
        })
      : postPages,
  {}
);

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
  },
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      ...defaultPathMap,
      ...postPages
    };
  }
});
