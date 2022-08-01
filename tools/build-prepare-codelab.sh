#!/bin/bash
set -eux
# set -o pipefail


__CURRENT__=`pwd`
__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}


# 启用代理工具
start_proxy_download() {
  is_use_proxy=${PROXY_URL:-'0'}
  proxy_url=${PROXY_URL:-"http://127.0.0.1:1087"}
  if test  $is_use_proxy  != '0' ; then
      export http_proxy=$proxy_url
      export https_proxy=$proxy_url
  fi

}
#停用代理工具
stop_proxy_download() {
  unset http_proxy
  unset https_proxy
}

start_proxy_download

test -f claat-linux-amd64 || curl -LO https://github.com/googlecodelabs/tools/releases/download/v2.2.4/claat-linux-amd64
stop_proxy_download


chmod a+x claat-linux-amd64

./claat-linux-amd64 export codelab.md



exit 0 ;

pip3 config set global.index-url https://mirrors.aliyun.com/pypi/simple/

npm i -g yarn --registry https://registry.npmmirror.com

npm config  set registry https://registry.npmmirror.com
npx yarn config set registry https://registry.npmmirror.com

npx yarn install
yarn upgrade --latest
yarn upgrade-interactive  --latest


# 参考
# https://github.com/googlecodelabs/tools/blob/main/site/README.md

#claat export first_codelab.md

#cd site
##安装依赖
#npm install
## 启动服务
#gulp serve

#gulp serve --codelabs-dir=codelabs
