const {Builder, By, Key, until} = require('selenium-webdriver');
const QUnit = require('qunit');

const { module: testModule, test } = QUnit;

const screenshotsDir = './screenshots/';

testModule('IT用語辞典の検索', function(hooks) {
  hooks.before(async function() {
    this.driver = await new Builder().forBrowser('chrome').build();
  });
  hooks.after(async function() {
    await this.driver.quit();
  });

  test('CI', async function(assert) {
    const driver = this.driver;
    await driver.get('http://e-words.jp/');
    await takeScreenshot(driver, screenshotsDir + '01_page_loaded.png');

    const searchText = await driver.findElement(By.name('search'));
    await searchText.sendKeys('CI');
    await takeScreenshot(driver, screenshotsDir + '02_text_input.png');
    await searchText.sendKeys(Key.RETURN);

    const targetId = 'word';
    driver.wait(until.elementLocated(By.id(targetId)), 10000);
    const word = await driver.findElement(By.id(targetId)).getText();
    assert.equal(word, '継続的インテグレーション');
    await takeScreenshot(driver, screenshotsDir + '03_page_navigated.png');

    // await page.close();

    assert.ok(1 === 1, 'Test');
  });
});

function takeScreenshot(driver, imageFilePath) {
  driver.takeScreenshot().then(
    function(image, err) {
      require('fs').writeFile(imageFilePath, image, 'base64', function(err) {
        console.log(err);
      })
    }
  );
}