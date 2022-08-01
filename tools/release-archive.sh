#!/bin/bash
set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__ROOT__=$(
  cd ${__DIR__}/../
  pwd
)
cd ${__ROOT__}

test -d dist && rm -rf dist
mkdir -p dist

test -f extension-v3-test.zip && rm -f extension-v3-test.zip
test -d extension-v3-test && rm -rf extension-v3-test

cd ${__ROOT__}

zip -r ./dist/extension-v3-test.zip . \
  -x "./tools/*" \
  -x "./.git/*" \
  -x "./.idea/*" \
  -x "./_metadata/*" \
  -x "./replace-google-frontend-cdn" \
  -x "./LICENSE" \
  -x "./manifest-save.json" \
  -x "./dist/*" \
  -x "./README.md"


cd ${__ROOT__}/dist

# 验证


unzip extension-v3-test.zip -d extension-v3-test

cd ${__ROOT__}