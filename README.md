# テスト用端末（VirtualBox上のUbuntu GUI）のセットアップ

ansibleで必要なコンポーネントをセットアップする。

```
cd ./ansible
ansible-playbook -i hosts -K setup.yml
```

参考
ymlの確認

```
cd ./ansible
ansible-playbook --syntax-check -i hosts -K setup.yml
```

変更の確認（変更はしない）

```
cd ./ansible
ansible-playbook --check -i hosts -K setup.yml
```

# 各プロジェクトのセットアップ

- すべてのプロンプトで未入力（デフォルト）のままEnter

```
mkdir test-by-cypress
cd test-by-cypress
npm init

npm i cypress
```

```
mkdir test-by-puppeteer
cd test-by-puppeteer
npm init

npm i qunit
npm i puppeteer
```

```
mkdir test-by-selenium
cd test-by-selenium
npm init

npm i qunit
npm i selenium-webdriver
```

# JavaScriptにおけるテスティング フレームワークに関する調査

https://blog.bitsrc.io/top-javascript-testing-frameworks-in-demand-for-2019-90c76e7777e9

## Github Star

上記の投稿は2019/01/10

### テスティング フレームワーク

Jest 22,000 -> 27,582
Mocha 16,000 -> 18,439
Jasmine 14,000 -> 14,536
QUnit 3,700 -> 3,831
Chai 6,000 -> 6,514
TestCafe 5,900 -> 7,410

### テスト実行環境
Karma 10,000 -> 10,895
AVA 15,000 -> 16,830
Cypress 9,000 -> 14,709
  Mocha と Chai をベースに構築されている。
  https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Writing-tests
Puppeteer 43,000 -> 54,149

Selenium
https://www.seleniumhq.org/docs/03_webdriver.jsp#introducing-the-selenium-webdriver-api-by-example