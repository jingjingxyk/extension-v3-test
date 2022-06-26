#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

## 下载最新 chromium from aliyun mirror



chrome_latest_download_url=$(python3 get-chromium-latest-download-url.py)
wget -O /tmp/chrome.zip  $chrome_latest_download_url

unzip -l /tmp/chrome.zip

chromium_file_name=$(unzip -l /tmp/chrome.zip | awk '{if(NR == 4){ print $4}}'| awk -F '/' '{print $1}')

mkdir -p chromium-browser
test  $(ls ${__DIR__}/chromium-browser/ | wc -l ) -gt 0 && rm -rf ${__DIR__}/chromium-browser/*

unzip -d ${__DIR__}/chromium-browser/ /tmp/chrome.zip



mv ${__DIR__}/chromium-browser/${chromium_file_name}  ${__DIR__}/chromium-browser/chromium

