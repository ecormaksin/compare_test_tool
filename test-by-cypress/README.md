# テストランナーの起動

```
npm run cypress
```

# コマンドラインから実行する場合

**先頭の`$`はコマンドの一部**

```
$(npm bin)/cypress run --browser chrome --config chromeWebSecurity=false --spec "cypress/integration/test.spec.js"
```

デフォルトではElectronで実行されるので、Chromeで実行するために`--browser chrome`を指定。
その場合、ビデオ録画は行われない。（コマンドラインにも、その旨のメッセージが表示される。）

> Warning: Cypress can only record videos when using the built in 'electron' browser.
>
> You have set the browser to: 'chrome'
>
> A video will not be recorded when using this browser.

ただ、`npm run cypress`でテストランナーを起動してから実行した場合は、キーワードの検索結果ページへ遷移した時でもエラーが発生しないように設定しているにも関わらず、コマンドラインで`--config chromeWebSecurity=false`を指定しても「オリジン間リソース共有 (CORS)」に関するエラーが発生する。

https://on.cypress.io/cross-origin-script-error
https://developer.mozilla.org/ja/docs/Web/HTTP/CORS