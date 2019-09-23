# プロジェクトのセットアップ

```
npm i -g qunit
npm i qunit
npm i puppeteer
```

# リポジトリからクローン後に実行するコマンド

```
npm install
```

# テストの実行

```
qunit test.js
```

公式サイト[https://github.com/GoogleChrome/puppeteer]では`node <対象のスクリプト>`で実行していたが、テストの実行ではテスティングフレームワークのコマンドで実行が必要な模様。

---

PuppetterはCypressのようにビルトインでXHRのスタブはない模様。
似たようなことをしてくれそうなものを開発してくれている人がいる。

https://github.com/NimaSoroush/Mockeer
https://github.com/Diokuz/puppeteer-request-mocker
https://www.npmjs.com/package/puppeteer-request-spy ←npmパッケージで活発なのはこちらの模様。
https://www.npmjs.com/package/puppeteer-request-mocker
https://github.com/getdock/pptr-mock-server
https://github.com/axiomhq/puppeteer-request-intercepter
