#!/bin/bash
set -eux
# set -o pipefail


__CURRENT__=`pwd`
__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

test -d replace-google-frontend-cdn || bash build-prepare-codelab.sh
cd replace-google-frontend-cdn
python3 -m http.server 8000