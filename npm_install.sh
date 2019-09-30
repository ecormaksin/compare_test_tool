#!/bin/sh

PROJECT_ROOT_PATH=`dirname $0`
cd "${PROJECT_ROOT_PATH}"

for DIR_NAME in test-by-cypress test-by-puppeteer test-by-selenium
do
    cd "${DIR_NAME}"
    pwd
    npm install
    cd ../
done
