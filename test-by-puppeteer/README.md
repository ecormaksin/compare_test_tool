# テストの実行

デフォルトではChromiumが起動するので、環境変数でChromeのパスを指定する。

```
NODE_KEY_CHROME_PATH=$(which google-chrome) # Ubuntuの場合
qunit test.js
```

公式サイト[https://github.com/GoogleChrome/puppeteer]では`node <対象のスクリプト>`で実行していたが、テストの実行ではテスティングフレームワークのコマンドで実行が必要な模様。
