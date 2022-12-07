set_flag = () => {
    let urlObj = new URL(location.href);
    console.log(urlObj)
    let custom_window_ua_flag = urlObj.searchParams.get('custom_window_ua_flag')
    if (document.documentElement.clientWidth <= 480) {
        if (custom_window_ua_flag != 1) {
            urlObj.searchParams.set('custom_window_ua_flag', 1);
            location.href = urlObj.href

            //history.replaceState({}, "setup flag", urlObj.href);
            //location.reload()
        }
    } else {
        if (custom_window_ua_flag == 1) {
            urlObj.searchParams.delete('custom_window_ua_flag');
            location.href = urlObj.href

            //history.replaceState({}, "del flag", urlObj.href);
            //location.reload()
        }
    }
}

set_flag()
window.onresize = function () {
    set_flag()
}