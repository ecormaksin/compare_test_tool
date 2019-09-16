const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://localhost:3030');
  await page.screenshot({path: 'app-init.png'});

  await browser.close();
})();