const fs = require('fs');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '../');

const posts = require(`../contents/posts`);

const BASE_URL = 'https://jicjjang.github.io';

const xmlUrlWrapper = urlNodes => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${urlNodes}
</urlset>`;
};

const xmlUrlNode = (path, date) => {
  return `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${date}</lastmod>
  </url>`;
};

const sitemap = xmlUrlWrapper(posts.map(post => xmlUrlNode(post.path, post.date)).join(''));

fs.writeFile(`${ROOT_PATH}/out/sitemap.xml`, sitemap, err => {
  if (err) throw err;
  console.log(`sitemap.xml was written to "/out/sitemap.xml"`);
});
