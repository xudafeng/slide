'use strict';

const fs = require('fs');
const path = require('path');

const template = fs.readFileSync('./README.md', 'utf8');

const targetDir = path.join(__dirname, 'archives');
const list = fs
  .readdirSync(targetDir)
  .filter(dir => fs.statSync(path.resolve(targetDir, dir)).isDirectory())
  .map(item => `- [${item}](./archives/${item})`);

const res = template.replace(/<!-- start -->[\s\S]*<!-- end -->/, `<!-- start -->\n${list.join('\n')}\n<!-- end -->`);

fs.writeFileSync('./README.md', res);
