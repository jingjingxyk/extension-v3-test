#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

uuid=$(cat /proc/sys/kernel/random/uuid)
profile_folder="/tmp/${uuid}"

mkdir -p  $profile_folder

cd ${__DIR__}


# https://wiki.mozilla.org/Firefox/CommandLineOptions


./firefox/firefox \
-profile $profile_folder \
-devtools \
-jsconsole \
-start-debugger-server 9221 \
https://www.marxists.org/ https://stackoverflow.com/tags/socat/hot?filter=all