const puppeteer = require('puppeteer');
const QUnit = require('qunit');

const { module: testModule, test } = QUnit;

testModule('End-To-End Tests', function(hooks) {
  hooks.before(async function() {
    this.browser = await puppeteer.launch({headless: false});
  });
  hooks.after(async function() {
    await this.browser.close();
  });

  test('basic', async function(assert) {
    const page = await this.browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});
    assert.ok( 1 == "1", "Passed!" );

    await page.close();
  });
});
