#!/bin/bash
set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
__PROJECT__=$(cd "${__DIR__}/../";pwd)
cd ${__DIR__}


if [ ! "$BASH_VERSION" ]; then
  echo "Please do not use sh to run this script ($0), just execute it directly" 1>&2
  exit 1
fi

# test -d temp && rm -rf temp


# example use proxy download source code
# shell之变量默认值  https://blog.csdn.net/happytree001/article/details/120980066
# 使用代理下载源码
# bash  update-library.sh --proxy http://127.0.0.1:8016

while [ $# -gt 0 ]; do
  case "$1" in
  --proxy)
      export HTTP_PROXY="$2"
      export HTTPS_PROXY="$2"
      export NO_PROXY="127.0.0.1,localhost,127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16,198.18.0.0/15,169.254.0.0/16"
      export NO_PROXY="${NO_PROXY},localhost,.npmmirror.com,.aliyuncs.com,.taobao.org,.tsinghua.edu.cn,.ustc.edu.cn,.aliyun.com"
    ;;
  *)
    ;;
  esac
  shift $(($# > 0 ? 1 : 0))
done

mkdir -p ${__PROJECT__}/var/tmp/

cd ${__PROJECT__}/var/tmp/

test -d frontend-utils/.git || git clone -b main https://github.com/jingjingxyk/frontend-utils.git  --depth=1 --progress

mkdir -p${__PROJECT__}/third_party/jingjingxyk/frontend-utils
cp -f frontend-utils/utils.js ${__PROJECT__}/third_party/jingjingxyk/frontend-utils/utils.js


cd ${__PROJECT__}