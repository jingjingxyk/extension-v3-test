#!/bin/bash
set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

test -d temp && rm -rf temp
mkdir -p temp
cd temp
export http_proxy=http://127.0.0.1:8015
export https_proxy=http://127.0.0.1:8015

# 自建CDN库

if [ -d cdnjs ]; then
   # 更新源代码
   git -C cdnjs pull --depth=1 --progress --rebase=true
else
   # 克隆源代码
   git clone https://github.com/cdnjs/cdnjs.git --depth=1 --progress
fi
