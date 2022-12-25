#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)

cd ${__DIR__}

test -d dist && rm -rf dist
mkdir -p dist/

cd ${__DIR__}/dist

test -f extension-v3-test.zip && rm -f extension-v3-test.zip


cd ${__DIR__}
zip -r dist/extension-v3-test . \
  -x ".git/*" \
  -x ".idea/*" \
  -x ".gitignore" \
  -x "_metadata/*" \
  -x "node_modules/*" \
  -x "package-lock.json" \
  -x "local-deploy.sh" \
  -x "format-code.sh" \
  -x "release-archive.sh" \
  -x "dist/*" \
  -x "images/*" \
  -x "tools/*" \
  -x "manifest-save.json" \
  -x "example/*"


cd ${__DIR__}/dist
# 查看打包结果
unzip extension-v3-test.zip -d extension-v3-test

cd ${__DIR__}
