const path = require('path');

module.exports = {
  testDir: __dirname,
  timeout: 30 * 1000,
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: true,
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
  outputDir: path.join(__dirname, 'results'),
};
