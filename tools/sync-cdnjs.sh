#!/bin/bash
set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
__PROJECT__=$(cd "${__DIR__}/../";pwd)
cd ${__DIR__}

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



# 自建CDN库

if [ -d cdnjs ]; then
   # 更新源代码
   git -C cdnjs pull --depth=1 --progress --rebase=true
else
   # 克隆源代码
   git clone https://github.com/cdnjs/cdnjs.git --depth=1 --progress
fi
