function encodeBase64(str) {
    return btoa(encodeURIComponent(str))
}

function decodeBase64(encoded) {
    return decodeURIComponent(atob(encoded))
}

function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return decodeURIComponent(arr[2]);
    } else {
        return null;
    }

}

function setCookie(name, value, second, domain) {
    var exp = new Date();
    exp.setTime(exp.getTime() + second * 1000);
    document.cookie =
        name +
        "=" +
        encodeURIComponent(value) +
        ";expires=" +
        exp.toGMTString() +
        ";path=/;domain=" +
        domain +
        ";SameSite=None;Secure";
}
function getParameterValue(name) {

    var reg = new RegExp("[^\?&]?" + encodeURIComponent(name) + "=[^&]+");
    var arr = location.search.match(reg);
    if (arr != null) {
        return decodeURIComponent(arr[0].substring(arr[0].search("=") + 1));
    }
    return "";
}

function getHashValue(name) {
    let matches = location.hash.match(new RegExp(encodeURIComponent(name)+'=([^&]*)'));
    return matches ? decodeURIComponent(matches[1]) : null;
}

async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


async function getCameraSelection() {
    return await navigator.mediaDevices.enumerateDevices();
}


export {
    encodeBase64,
    decodeBase64,
    hasClass,
    addClass,
    removeClass,
    getCookie,
    setCookie,
    getParameterValue,
    getHashValue,
    sleep,
    getCameraSelection
}