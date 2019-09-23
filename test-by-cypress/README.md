# リポジトリからクローンした後に実行するコマンド

```
npm install
```

# テストランナーの起動

```
npm run cypress
```

# コマンドラインから実行する場合

**先頭の`$`はコマンドの一部**

```
$(npm bin)/cypress run --browser chrome --config chromeWebSecurity=false --spec "cypress/integration/test.spec.js" 
```
