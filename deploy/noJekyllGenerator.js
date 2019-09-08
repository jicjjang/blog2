const fs = require('fs');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '../');

fs.writeFile(`${ROOT_PATH}/out/.nojekyll`, '', err => {
  if (err) throw err;
  console.log(`.nojekyll was written`);
});
