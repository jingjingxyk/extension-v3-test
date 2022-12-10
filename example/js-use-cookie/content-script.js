function setCookie(name, value, second, path, domain) {
    var exp = new Date();
    exp.setTime(exp.getTime() + second * 1000);
    document.cookie =
        name +
        "=" +
        encodeURIComponent(value) +
        ";expires=" +
        exp.toGMTString() +
        ";path=" + path +
        ";domain=" +
        domain +
        ";SameSite=None;Secure";
}

function getCookie(name) {
    let arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
        return decodeURIComponent(arr[2]);
    } else {
        return null;
    }
}

function set_flag() {
    let second = 365 * 24 * 60 * 60
    let custom_window_ua_flag=getCookie('custom_window_ua_flag');
    custom_window_ua_flag=parseInt(custom_window_ua_flag)
    custom_window_ua_flag=isNaN(custom_window_ua_flag)?0:custom_window_ua_flag

    if (document.documentElement.clientWidth <= 480) {
        setCookie('custom_window_ua_flag', 1, second, '/', document.domain)
        if( custom_window_ua_flag !==1 ) {
            location.reload()
        }

    } else {
        setCookie('custom_window_ua_flag', 0, second, '/', document.domain)
        if( custom_window_ua_flag !==0 ) {
            location.reload()
        }
    }

}


set_flag()

window.onresize = function () {
    set_flag()
}