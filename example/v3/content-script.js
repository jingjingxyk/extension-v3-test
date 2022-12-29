set_flag = () => {
    let urlObj = new URL(location.href);

    let custom_window_ua_flag = urlObj.searchParams.get('spm')
    custom_window_ua_flag = parseInt(custom_window_ua_flag)
    custom_window_ua_flag = isNaN(custom_window_ua_flag) ? 0 : custom_window_ua_flag;
    console.log(urlObj)
    if (document.documentElement.clientWidth <= 480) {
        if (custom_window_ua_flag !== 1) {
            urlObj.searchParams.set('spm', 1);
            console.log(urlObj.href)


            //history.replaceState({}, "setup flag", urlObj.href);
            location.href=urlObj.href
        }
    } else {
        if (custom_window_ua_flag === 1) {
            urlObj.searchParams.delete('spm');
            console.log(urlObj.href)
            console.log(urlObj)

           //history.replaceState({}, "del flag", urlObj.href);
            location.href=urlObj.href

        }
    }
}

/*
window.addEventListener('load',() => {
    let currentState = history.state;
    console.log('currentState',currentState);
})
window.onpopstate = function(event) {
  console.log(event)
}
*/

set_flag()
window.onresize = function () {
    set_flag()
}