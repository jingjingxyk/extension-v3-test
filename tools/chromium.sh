#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

uuid=$(cat /proc/sys/kernel/random/uuid)
user_data_dir="/tmp/${uuid}"
if [ ! -d $user_data_dir ] ;then
  mkdir $user_data_dir
fi
export GOOGLE_API_KEY="no"
export GOOGLE_DEFAULT_CLIENT_ID="no"
export GOOGLE_DEFAULT_CLIENT_SECRET="no"

${__DIR__}/chromium-browser/chromium/chrome \
--user-data-dir=$user_data_dir \
--show-app-list \
--start-maximized \
--enable-remote-extensions  \
--enable-extensions \
--auto-open-devtools-for-tabs \
--load-extension=${__DIR__}/ \
https://www.marxists.org/

