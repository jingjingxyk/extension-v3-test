#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}
__ROOT__=$(cd ${__DIR__}/../;pwd)

cd ${__ROOT__}
uuid=$(cat /proc/sys/kernel/random/uuid)
user_data_dir="/tmp/${uuid}"
mkdir -p  $user_data_dir

cd ${__DIR__}

firefox --profile $user_data_dir https://www.marxists.org/ https://stackoverflow.com/tags/socat/hot?filter=all
