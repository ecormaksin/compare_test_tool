#!/bin/sh

ANSIBLE_ROOT_PATH=`dirname $0`
cd $ANSIBLE_ROOT_PATH
pwd

for DIR_NAME in test-by-cypress test-by-puppeteer test-by-selenium
do
    cd $ANSIBLE_ROOT_PATH
    cd ../
    cd $DIR_NAME
    npm install
done

cd $ANSIBLE_ROOT_PATH
touch /tmp/npm_install_executed
