const fs = require('fs');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '../');
const BASE_URL = 'https://jicjjang.github.io';

const robots = `User-agent: *

Allow: /
Disallow: /resume
Sitemap: ${BASE_URL}/sitemap.xml`;

fs.writeFile(`${ROOT_PATH}/out/robots.txt`, robots, err => {
  if (err) throw err;
  console.log(`robots.txt was written to "/out/robots.txt"`);
});
