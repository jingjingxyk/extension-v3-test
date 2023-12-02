## chromium extension v3

> 衍生于 https://github.com/justjavac/ReplaceGoogleCDN.git

> ReplaceGoogleCDN 演示例子规则文件 位于 `rules` 目录



## 加载本扩展默认提供提供查看 chromium 、webrtc 源码功能

1. [chromium ](https://www.chromium.org/)
1. [source.chromium](https://source.chromium.org/)
1. [summerofcode.withgoogle](https://summerofcode.withgoogle.com/programs/2022/organizations)
1. [Google 开放源代码](https://cs.opensource.google/)
1. [webrtc](https://webrtc.org/)
1. [webrtc source code](https://chromium.googlesource.com/external/webrtc)

## 一句话准备代理服务,用于下载 chromium 源码

```shell


# vi https-switch-to-http-proxy.sh


socat -d -d   TCP4-LISTEN:8016,reuseaddr,fork ssl:http-proxy.xiaoshuogeng.com:8017,verify=1,snihost=http-proxy.xiaoshuogeng.com,commonname=http-proxy.xiaoshuogeng.com,openssl-min-proto-version=TLS1.3,openssl-max-proto-version=TLS1.3



# 备注： 服务端就是一个 nginx 仅此而已
# socat 需要支持TLSv1.3 

# 使用代理
export http_proxy=http://127.0.0.1:8016
export https_proxy=http://127.0.0.1:8016
export no_proxy="127.0.0.1,localhost"
 
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git --depth=1 --progress


```

## [快速下载chromium源码](https://www.cnblogs.com/jingjingxyk/p/16575572.html)

## 一：manifest.json declarative_net_reques 高级配置示例

```json
{
  "declarative_net_request": {
    "rule_resources": [
      {
        "id": "remove-header",
        "enabled": true,
        "path": "rules/rules_remove_header_1.json"
      },
      {
        "id": "ruleset_redirect_1",
        "enabled": true,
        "path": "rules/rules_advance_redirect_1.json"
      },
      {
        "id": "ruleset_redirect_2",
        "enabled": true,
        "path": "rules/rules_advance_redirect_1.json"
      },
      {
        "id": "block",
        "enabled": true,
        "path": "rules/rules_block_1.json"
      }
    ]
  }
}
```

## 二：匹配指定域名

> `github.com` -> `github-com.proxy.domain.com`

> 真实测试地址： `https://github.com/` -> `https://github-com.proxy.xiaoshuogeng.com/`

1. [尝试 github.com ](https://github.com/)

```json
{
  "id": "ruleset_advance_redirect_1",
  "enabled": true,
  "path": "rules/rules_advance_redirect_1.json"
}
```

## 三：动态匹配域名：

> `www.chromium.org` -> `https://2_www_xn--3px_chromium_xn--3px_org.proxy.domain.com`

>
真实测试地址 `https://chromium.googlesource.com/chromium/tools/depot_tools.git` -> `https://2_chromium_xn--3px_googlesource_xn--3px_com.proxy.xiaoshuogeng.com/chromium/tools/depot_tools.git`

1. [尝试 chromium ](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md)
1. [尝试 open source software 出色的开源软件 ](https://summerofcode.withgoogle.com/programs/2022/organizations)
1. [尝试 google opensource all projects ](https://cs.opensource.google/)

```json
{
  "id": "ruleset_advance_redirect_2",
  "enabled": true,
  "path": "rules/rules_advance_redirect_1.json"
}
```

## 四：阻止指定域名 (拦截请求)

```json
{
  "id": "ruleset_block_header_1",
  "enabled": true,
  "path": "rules/rules_block_1.json"
}
```

## 五：manifest host_permissions 例子

```
{
    "host_permissions": [ //指定地址写法
         "*://ajax.googleapis.com/*",
         "*://fonts.googleapis.com/*",
         "*://themes.googleusercontent.com/*",
         "*://fonts.gstatic.com/*",
         "*://ssl.gstatic.com/*",
         "*://www.gstatic.com/*",
         "*://secure.gravatar.com/*",
         "*://maxcdn.bootstrapcdn.com/*",
    ],
    "host_permissions": [ //所有地址写法,最省事
         "*://*.google.com/*",
        "*://*/*",
        "<all_urls>"
    ]
}
```

## 六：本地启动 web server

```shell

sh  startup-local-test-web-server.sh

```

## 七： 参考文档

1. [manifest-format](https://developer.chrome.com/docs/extensions/mv3/manifest/)
1. [manifest-format](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/manifest-format)
1. [WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
1. [webextensions-examples](https://github.com/mdn/webextensions-examples.git)
1. [extensions declare_permissions ](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)
1. [extensions webRequest](https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onHeadersReceived)
1. [extensions chrome.tabs api](https://developer.chrome.com/docs/extensions/reference/tabs/)
1. [extensions proxy](https://developer.chrome.com/docs/extensions/reference/proxy/)
1. [contextMenus](https://developer.chrome.com/docs/extensions/reference/contextMenus//docs/extensions/reference/contextMenus/)
1. [declarativeNetRequest ResourceType](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#type-ResourceType)
1. [trusted_types_on_webui](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/trusted_types_on_webui.md)
1. [content_scripts](https:////developer.chrome.com/docs/extensions/mv3/content_scripts/)
1. [scripting executeScript](https://developer.chrome.com/docs/extensions/reference/scripting/#handling-results)
1. [Content-Security-Policy/trusted-types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)
1. [gerrit](https://gerrit.googlesource.com/gerrit)
1. [chromium](https://www.chromium.org)
1. [chromium source code](https://chromium.googlesource.com/chromium/src/+/main/docs/get_the_code.md)
1. [chromium.googlesource](https://chromium.googlesource.com/chromium/src)
1. [chromium project](https://source.chromium.org/chromium)
1. [Browse or Search Chromium Code](https://source.chromium.org/chromium)
1. [opensource.google all projects ](https://cs.opensource.google/)
1. [declarativeNetRequest 的 ManifestV3 示例](https://52sbl.cn/discussion/1.html)
1. [Proxy_Auto-Configuration_PAC_file](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
1. [use fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
1. [chromium use proxy](https://www.chromium.org/developers/design-documents/network-settings/)
1. [depot_tools](https://chromium.googlesource.com/chromium/tools/depot_tools.git)
1. [puppeteer](https://github.com/puppeteer/puppeteer.git)
1. [puppeteer example](https://github.com/puppeteer/puppeteer/tree/main/examples)
1. [chrome-devtools-protocol](https://github.com/ChromeDevTools/awesome-chrome-devtools#chrome-devtools-protocol)
1. [pyppeteer](https://github.com/pyppeteer/pyppeteer.git)
1. [webrtc/samples](https://github.com/webrtc/samples.git)
1. [ReplaceGoogleCDN](https://github.com/justjavac/ReplaceGoogleCDN.git)
1. [ReplaceGoogleCDN test example](https://github.com/justjavac/ReplaceGoogleCDN/tree/master/extension/test)
1. [ReplaceGoogleCDN 依赖 公共 CDN 静态资源库 ](https://github.com/justjavac/ReplaceGoogleCDN/tree/master/extension/rules)
1. [中文域名 punycode标准编码](https://en.wikipedia.org/wiki/Punycode)
1. [latest chromium ](https://download-chromium.appspot.com/)
1. [latest firefox](https://www.mozilla.org/en-US/firefox/all/#product-desktop-release)
1. [正则表达式 - 元字符](https://www.runoob.com/regexp/regexp-metachar.html)
1. [HTTP请求方法对照表](http://www.yunjson.com/httprequest/)
1. [Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
1. [Promise.all()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
1. [Array() 构造器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
1. [ MutationObserver 监视对 DOM 树更改](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
1. [内容安全策略(CSP) ](https://content-security-policy.com/)
1. [汉字 Unicode 编码范围](https://www.qqxiuzi.cn/zh/hanzi-unicode-bianma.php)
1. [汉字字符集编码查询](https://www.qqxiuzi.cn/bianma/zifuji.php)
1. [GoogleChrome/samples](https://github.com/GoogleChrome/samples.git)

## 八： 启动 chromium

```shell
# download chromium
  sh download-latest-chromium.sh
# run chromium
  sh chromium.sh

```

## 九： build codelab

```shell

# use proxy build
export PROXY_URL=http://127.0.0.1:8015
sh  build-prepare-codelab.sh

```

## 十： 域名

> 域名串不允许有除“－”以外的标点符号，包括空格。 可以夹杂中文和英文。 可以输入全角英文字母，全角字母不区分大小写。