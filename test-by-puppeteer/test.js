const puppeteer = require('puppeteer');
const QUnit = require('qunit');

const { module: testModule, test } = QUnit;

const screenshotsDir = './screenshots/';

testModule('IT用語辞典の検索', function(hooks) {
  hooks.before(async function() {
    this.browser = await puppeteer.launch({headless: true});
  });
  hooks.after(async function() {
    await this.browser.close();
  });

  test('CI', async function(assert) {
    const page = await this.browser.newPage();
    await page.goto('http://e-words.jp/');
    await page.screenshot({path: screenshotsDir + '01_page_loaded.png'});

    await page.type("input[name=search]", "CI");
    await page.screenshot({path: screenshotsDir + '02_text_input.png'});
    await page.keyboard.press('Enter')
    await page.waitForNavigation({timeout: 5000, waitUntil: "domcontentloaded"});

    const word = await page.$eval('#word', e => e.innerText);
    assert.equal(word, '継続的インテグレーション');
    await page.screenshot({path: screenshotsDir + '03_page_navigated.png'});

    await page.close();
  });
});
