# テスト用端末（Ubuntu 18.04）のセットアップ

## gitのインストール

```shell
sudo apt update
sudo apt install -y git
```

## ansibleのインストール

```shell
sudo apt -y install python-pip python-dev ansible
```

## リポジトリのクローン

任意のディレクトリへ移動し、以下のコマンドを実行する。

```shell
git clone https://github.com/ecormaksin/compare_test_tool.git
```

## ansibleによるセットアップ

```shell
cd ./ansible
ansible-playbook -i localhosts, -c local -K -v setup.yml
```

### 参考
#### ymlの文法チェック

```shell
cd ./ansible
ansible-playbook --syntax-check -i localhosts, -c local -K setup.yml
```

#### 変更の確認(ドライラン、実際には実行しない)

```shell
cd ./ansible
ansible-playbook --check -i localhosts, -c local -K -v setup.yml
```

## 各プロジェクトに必要なnpmパッケージをインストール

プロジェクトのルートディレクトリ(`compare_test_tool`)へ移動して、以下のコマンドを実行する。

```
./npm_install.sh
```

# （参考）各プロジェクトのセットアップ

**プロジェクトを作成する時に実行したコマンドなので、リポジトリをクローンして実行する場合は実施不要。**

`npm init`のすべてのプロンプトで未入力（デフォルト）のままEnter

## test-by-cypress

```shell
mkdir test-by-cypress
cd test-by-cypress
npm init

npm i cypress --save-dev
```

`./test-by-cypress/package.json`を以下のように変更する。

変更前
```JSON
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

変更後
```JSON
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cypress": "cypress open"
  },
```

`./test-by-cypress`で、以下のコマンドを実行する。

```
npm run cypress
```

テストランナーの起動後、「To help you get started...」の画面で、[OK, got it!]をクリックして閉じる。

テストランナーの画面を閉じる。

`./test-by-cypress/cypress/integration/examples/`が作成されているので削除する。

`./test-by-cypress/cypress/integration/test.spec.js`ファイルを追加する。

`./test-by-cypress/cypress.json`を以下のように編集する。

```JSON
{
    "chromeWebSecurity": false
}
```

## test-by-puppeteer

```
mkdir test-by-puppeteer
cd test-by-puppeteer
npm init

sudo npm i -g qunit
npm i qunit
npm i puppeteer

mkdir screenshots
```

`./test-by-puppeteer/test.js`ファイルを追加する。

## test-by-selenium

```
mkdir test-by-selenium
cd test-by-selenium
npm init

npm i qunit
npm i selenium-webdriver

mkdir screenshots
```

`http://chromedriver.storage.googleapis.com`からインストールしたchromeのバージョンに合った`chromedriver_linux64.zip`をダウンロードし、展開したバイナリをパスの通ったディレクトリへ配置する。（`/usr/local/bin`）

`./test-by-selenium/test.js`ファイルを追加する。
