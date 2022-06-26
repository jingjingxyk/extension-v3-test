## chromium extension v3
> 衍生于 https://github.com/justjavac/ReplaceGoogleCDN.git 
> 一个完整的 测试例子

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
        "path": "rules/rules_advance_redirect_2.json"
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

> 真实测试地址 `https://chromium.googlesource.com/chromium/tools/depot_tools.git` -> `https://2_chromium_xn--3px_googlesource_xn--3px_com.proxy.xiaoshuogeng.com/chromium/tools/depot_tools.git`

1. [尝试 chromium ](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md)
2. [尝试 open source software 出色的开源软件 ](https://summerofcode.withgoogle.com/programs/2022/organizations)
3. [尝试 google opensource all projects ](https://cs.opensource.google/)

```json
{
  "id": "ruleset_advance_redirect_2",
  "enabled": true,
  "path": "rules/rules_advance_redirect_2.json"
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

sh  extension/test/extension-v3-test/startup-local-test-web-server.sh

```

## 七： 参考文档

1. [extensions declare_permissions ](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)
2. [extensions webRequest](https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onHeadersReceived)
3. [trusted_types_on_webui](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/trusted_types_on_webui.md)
4. [Content-Security-Policy/trusted-types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)
5. [gerrit](https://gerrit.googlesource.com/gerrit)
6. [chromium](https://www.chromium.org)
7. [chromium source code](https://chromium.googlesource.com/)
8. [chromium project](https://source.chromium.org/chromium)
9. [opensource.google all projects ](https://cs.opensource.google/)
10. [declarativeNetRequest 的 ManifestV3 示例](https://52sbl.cn/discussion/1754.html)

## 启动 chromium

```shell
# download chromium
  sh download-latest-chromium.sh
# run chromium
  sh chromium.sh

```

## build codelab

```shell
# use proxy build
export PROXY_URL=http://127.0.0.1:8015
sh  build-prepare-codelab.sh

```
