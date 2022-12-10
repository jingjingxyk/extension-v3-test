function getCurrentTab(callback) {
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions, ([tab]) => {
        if (chrome.runtime.lastError)
            console.error(chrome.runtime.lastError);
        // `tab` will either be a `tabs.Tab` instance or `undefined`.
        callback(tab);
    });
}

//https://developer.chrome.com/docs/extensions/reference/tabs/

chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        console.log(details)
        let urlObj = new URL(details.url);
        console.log(urlObj)

        let ua_index = 0;
        let referer_index = 0;
        let cookie_index = 0;

        for (const [index, header] of details.requestHeaders.entries()) {
            if (header.name.toLowerCase() === "user-agent") {
                ua_index = index;
            }
            if (header.name.toLowerCase() === "referer") {
                referer_index = index;
            }
            if (header.name.toLowerCase() === "cookie") {
                cookie_index = index;
            }
        }
        getCurrentTab(console.log)
        for (const header of details.requestHeaders) {
            console.log(header.name, '=', header.value)

            if (header.name.toLowerCase() === "cookie") {
                let custom_window_ua_flag = 0
                let reg = new RegExp("(^| )custom_window_ua_flag=([^;]*)(;|$)");
                let arr = header.value.match(reg)
                console.log(arr)
                if (arr && arr.length > 1) {
                    custom_window_ua_flag = decodeURIComponent(arr[2]);
                    console.log(custom_window_ua_flag)
                    if (custom_window_ua_flag == 1) {
                        details.requestHeaders[ua_index]['value'] =
                            "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";

                    }
                }
            }

            if (header.name.toLowerCase() === "referer" && (details.type === "sub_frame" ))  {
                //通过referer传递参数，编写你需要的逻辑
                let referer=header.value
                let urlObj = new URL(referer);
                console.log(urlObj)
                let custom_parameter=urlObj.searchParams.get(' custom_parameter')

                if (details.type === "sub_frame") {
                    details.requestHeaders[ua_index]['value'] =
                        "Mozilla/5.0 (Linux; Android 11; SM-A505F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.79 Mobile Safari/537.36";

                }
            }

        }
        return {requestHeaders: details.requestHeaders};
    },
    {
        urls: [
            "*://*.douban.com/*",
        ],
    },
    ["blocking", "requestHeaders", 'extraHeaders']
);
