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
    let arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
        return decodeURIComponent(arr[2]);
    } else {
        return null;
    }
    //await cookieStore.get({name:name})
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie

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

async function getCookies(domain) {
    let cookies = await cookieStore.getAll({domain: domain});
    return cookies;
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
    let matches = location.hash.match(new RegExp(encodeURIComponent(name) + '=([^&]*)'));
    return matches ? decodeURIComponent(matches[1]) : null;
}

async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function getMediaDevices() {
    return await navigator.mediaDevices.enumerateDevices();
}


function createJSONFile(content, filename) {
    let blob = new Blob([JSON.stringify(content)], {type: "application/json"});
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(function () {
        window.URL.revokeObjectURL(url);
    }, 3000);
}

const toPromise = (callback) => {
    const promise = new Promise((resolve, reject) => {
        try {
            callback(resolve, reject);
        } catch (err) {
            reject(err);
        }
    });
    return promise;
}


let fetchAll = async (urls = [], callback) => {
    let len = urls.length;
    const arr = Array.from(
        new Array(len), (x, i) => {
            console.log(i)
            return callback(urls[i]);
        }
    );
    return await Promise.all(arr);
}
let getContent = async (url) => {
    let response = await fetch(url);
    return await response.json()
}
function o(i) {
    return i ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + i + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || "" : void 0
}
function e(i, t, o, e, s, n) {
    return !i || /^(?:expires|max\-age|path|domain|secure)$/i.test(i) ? !1 : (document.cookie = encodeURIComponent(i) + "=" + encodeURIComponent(t) + (o ? "; expires=" + o : "") + (s ? "; domain=" + s : "") + (e ? "; path=" + e : "") + (n ? "; secure" : ""),
        !0)
}

// new URLSearchParams
// new URL
// (new Date()).toISOString()

//Deprecated abandoned independent

// const start = performance.now();

// const time  = performance.now()-start;



export {
    encodeBase64,
    decodeBase64,
    hasClass,
    addClass,
    removeClass,
    getCookie,
    setCookie,
    getCookies,
    getParameterValue,
    getHashValue,
    sleep,
    getMediaDevices,
    createJSONFile,
    toPromise,
    fetchAll,
    getContent
}