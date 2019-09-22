const puppeteer = require('puppeteer');
const QUnit = require('qunit');
// const mockServer = require('pptr-mock-server');
import mockServer from 'pptr-mock-server'

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

  test('Displays an error on failure', async function(assert) {
    const page = await this.browser.newPage();
    const baseAppUrl = 'http://localhost:3030';
    this.mockRequest = await mockServer.init(page, {
      baseAppUrl,
      baseApiUrl: baseAppUrl + '/api/'
    });

    const responseConfig = {body: {}};
    this.mockRequest.get('todos', 500, responseConfig);

    const todoList = await page.$$('.todo-list li');
    assert.equal(todoList.length, 0);

    const error = await page.$$('.error');
    assert.equal(error.length, 1)

    await page.close();
  });
});
