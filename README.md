## chromium extension v3
> 衍生于 https://github.com/justjavac/ReplaceGoogleCDN.git 
> 一个完整的 测试例子

## 加载本扩展默认提供提供查看 chromium 、webrtc 源码功能

1. [chromium ](https://www.chromium.org/)
2. [source.chromium](https://source.chromium.org/)
3. [summerofcode.withgoogle](https://summerofcode.withgoogle.com/programs/2022/organizations)
4. [Google 开放源代码](https://cs.opensource.google/)
5. [webrtc](https://webrtc.org/)
5. [webrtc source code](https://chromium.googlesource.com/external/webrtc)

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

sh  startup-local-test-web-server.sh

```

## 七： 参考文档

1. [manifest-format](https://developer.chrome.com/docs/extensions/mv3/manifest/)
2. [manifest-format](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/manifest-format)
3. [WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
4. [webextensions-examples](https://github.com/mdn/webextensions-examples.git)
5. [extensions declare_permissions ](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)
6. [extensions webRequest](https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onHeadersReceived)
7. [extensions proxy](https://developer.chrome.com/docs/extensions/reference/proxy/)
8. [contextMenus](https://developer.chrome.com/docs/extensions/reference/contextMenus//docs/extensions/reference/contextMenus/)
9. [declarativeNetRequest ResourceType](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#type-ResourceType)
10. [trusted_types_on_webui](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/trusted_types_on_webui.md)
11. [content_scripts](https:////developer.chrome.com/docs/extensions/mv3/content_scripts/)
12. [scripting executeScript](https://developer.chrome.com/docs/extensions/reference/scripting/#handling-results)
13. [Content-Security-Policy/trusted-types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)
14. [gerrit](https://gerrit.googlesource.com/gerrit)
15. [chromium](https://www.chromium.org)
16. [chromium source code](https://chromium.googlesource.com/chromium/src/+/main/docs/get_the_code.md)
17. [chromium.googlesource](https://chromium.googlesource.com/chromium/src)
18. [chromium project](https://source.chromium.org/chromium)
19. [Browse or Search Chromium Code](https://source.chromium.org/chromium)
20. [opensource.google all projects ](https://cs.opensource.google/)
21. [declarativeNetRequest 的 ManifestV3 示例](https://52sbl.cn/discussion/1754.html)
22. [Proxy_Auto-Configuration_PAC_file](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
23. [use fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
24. [chromium use proxy](https://www.chromium.org/developers/design-documents/network-settings/)
25. [depot_tools](https://chromium.googlesource.com/chromium/tools/depot_tools.git)
26. [puppeteer](https://github.com/puppeteer/puppeteer.git)
27. [puppeteer example](https://github.com/puppeteer/puppeteer/tree/main/examples)
28. [chrome-devtools-protocol](https://github.com/ChromeDevTools/awesome-chrome-devtools#chrome-devtools-protocol)
29. [pyppeteer](https://github.com/pyppeteer/pyppeteer.git)
30. [webrtc/samples](https://github.com/webrtc/samples.git)
31. [ReplaceGoogleCDN](https://github.com/justjavac/ReplaceGoogleCDN.git)
32. [ReplaceGoogleCDN test example](https://github.com/justjavac/ReplaceGoogleCDN/tree/master/extension/test)
33. [ReplaceGoogleCDN 依赖 公共 CDN 静态资源库 ](https://github.com/justjavac/ReplaceGoogleCDN/tree/master/extension/rules)
34. [中文域名 punycode标准编码](https://en.wikipedia.org/wiki/Punycode)
35. [latest chromium ](https://download-chromium.appspot.com/)
36. [latest firefox](https://www.mozilla.org/en-US/firefox/all/#product-desktop-release)
37. [正则表达式 - 元字符](https://www.runoob.com/regexp/regexp-metachar.html)
38. [HTTP请求方法对照表](http://www.yunjson.com/httprequest/)
39. [Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
40. [Promise.all()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
41. [Array() 构造器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
42. [ MutationObserver 监视对 DOM 树更改](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
43. [内容安全策略(CSP) ](https://content-security-policy.com/)
44. [汉字 Unicode 编码范围](https://www.qqxiuzi.cn/zh/hanzi-unicode-bianma.php)
44. [汉字字符集编码查询](https://www.qqxiuzi.cn/bianma/zifuji.php)


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