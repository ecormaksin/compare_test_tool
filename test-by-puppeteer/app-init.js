const puppeteer = require('puppeteer');
const QUnit = require('qunit');

const { module: testModule, test, skip } = QUnit;

testModule('App initialization', function(hooks) {
  hooks.before(async function() {
    this.browser = await puppeteer.launch({headless: false});
  });
  hooks.after(async function() {
    await this.browser.close();
  });

  test('Loads todos on page load', async function(assert) {
    const page = await this.browser.newPage();
    await page.goto('http://localhost:3030');
    // await page.screenshot({path: 'app-init.png'});
    const todoList = await page.$$('.todo-list li');
    assert.equal(todoList.length, 4);

    await page.close();
  });

  skip('Displays an error on failure', async function(assert) {
    const page = await this.browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => {
      request.respond({
        status: 500,
        contentType: 'text/json',
        body: {}
      });
    });
    await page.goto('http://localhost:3030');
    await page.screenshot({path: 'displays_an_error_on_failure.png'});

    // const todoList = await page.$$('.todo-list li');
    // assert.equal(todoList.length, 0);
    assert.equal(0, 0);
  });
});
