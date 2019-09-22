リポジトリからクローン後に実行するコマンド

```
npm i -g qunit
npm i -g puppeteer
npm i puppeteer
```

---

テストの実行コマンド

```
qunit <対象のテストファイル>
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

---

手軽そうだったので、今回は`pptr-mock-server`をインストール。
githubのページでは`yarn`コマンドでのインストールが説明されていたが、
`npm`でもインストール可能なので以下でインストール。

```
npm i -g pptr-mock-server
npm i pptr-mock-server
```

