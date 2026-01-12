const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const docsDir = path.join(root, 'docs');
const vendorDir = path.join(docsDir, 'vendor');

const files = [
  {
    src: path.join(root, 'tests', 'fixtures', 'index.html'),
    dest: path.join(docsDir, 'index.html'),
  },
  {
    src: path.join(root, 'tests', 'fixtures', 'catalog.html'),
    dest: path.join(docsDir, 'catalog.html'),
  },
  {
    src: path.join(root, 'tests', 'vendor', 'skeleton.css'),
    dest: path.join(vendorDir, 'skeleton.css'),
  },
  {
    src: path.join(root, 'skeleton-plus.css'),
    dest: path.join(docsDir, 'skeleton-plus.css'),
  },
];

const rewriteLinks = (html) =>
  html
    .replaceAll('../vendor/skeleton.css', 'vendor/skeleton.css')
    .replaceAll('../../skeleton-plus.css', 'skeleton-plus.css');

fs.mkdirSync(vendorDir, { recursive: true });

files.forEach(({ src, dest }) => {
  const content = fs.readFileSync(src, 'utf8');
  const output = src.endsWith('.html') ? rewriteLinks(content) : content;
  fs.writeFileSync(dest, output);
});

console.log('Docs build complete:', docsDir);
