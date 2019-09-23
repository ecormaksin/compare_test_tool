https://www.npmjs.com/package/selenium-webdriver

# プロジェクトのセットアップ

## npmパッケージのインストール

```
npm i selenium-webdriver
npm i qunit
```

## 対象ブラウザーのドライバーをインストール（当サンプルはChromeDriver）

**ブラウザーのバージョンとドライバーのバージョンが一致している必要がある。**

### Macの場合

```
brew cask install chromedriver
```

# テストの実行

```
qunit test.js
```