#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

__ROOT__=$(cd ${__DIR__}/../;pwd)


uuid=$(cat /proc/sys/kernel/random/uuid)
user_data_dir="/tmp/${uuid}"
if [ ! -d $user_data_dir ] ;then
  mkdir $user_data_dir
fi
export GOOGLE_API_KEY="no"
export GOOGLE_DEFAULT_CLIENT_ID="no"
export GOOGLE_DEFAULT_CLIENT_SECRET="no"

extension=${__ROOT__}
${__DIR__}/chromium-browser/chromium/chrome \
--user-data-dir=$user_data_dir \
--show-app-list \
--start-maximized \
--enable-remote-extensions  \
--enable-extensions \
--auto-open-devtools-for-tabs \
--load-extension=${extension}/ \
--enable-logging=stderr --v=1 \
--remote-debugging-port=9221 \
https://www.marxists.org/


:<<\EOF

Chrome 104 支持硬解 HEVC 了
添加下面这个启动参数就可以了 open /Applications/Google\ Chrome.app --args --enable-features=PlatformHEVCDecoderSupport

EOF

# webrtc 监测
# chrome://webrtc-internals/