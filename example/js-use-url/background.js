chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        console.log(details)
        let urlObj = new URL(details.url);
        console.log(urlObj)
        let ua_index = 0;
        let referer_index = 0;
        let cookie_index = 0;

        for (const [index, header] of details.requestHeaders.entries()) {
            // console.log(index, header.name, '=', header.value)

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
        console.log(ua_index, referer_index, cookie_index)

        if ((details.type === "main_frame") && (urlObj.host === 'fm.douban.com')) {
            console.log(details.type)
            let custom_window_ua_flag = urlObj.searchParams.get('spm')
            custom_window_ua_flag = parseInt(custom_window_ua_flag)
            custom_window_ua_flag=isNaN(custom_window_ua_flag)?0:custom_window_ua_flag;
            if (custom_window_ua_flag === 1) {
                //console.log(details.requestHeaders[ua_index])
                details.requestHeaders[ua_index]['value'] =
                    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
            }
        } else {
            let referer = details.requestHeaders[referer_index]['value'];
            let refererUrlObj = new URL(referer);
            let custom_window_ua_flag = refererUrlObj.searchParams.get('spm')
            custom_window_ua_flag = parseInt(custom_window_ua_flag)
            custom_window_ua_flag=isNaN(custom_window_ua_flag)?0:custom_window_ua_flag;
            if ((refererUrlObj.host === 'fm.douban.com') && (custom_window_ua_flag === 1)) {
                //console.log(details.requestHeaders[ua_index])
                details.requestHeaders[ua_index]['value'] =
                    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
                /*
                 if (details.type === "sub_frame") {
                     details.requestHeaders[ua_index]['value'] = 'Mozilla/5.0 (Linux; Android 11; SM-A505F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.79 Mobile Safari/537.36';
                 }
                 */
            }
        }


        return {requestHeaders: details.requestHeaders};
    },
    {
        urls: [
            "*://*.douban.com/*"
        ],
    },
    ["blocking", "requestHeaders", 'extraHeaders']
);
