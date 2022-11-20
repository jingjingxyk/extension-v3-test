const xhr = new XMLHttpRequest();
xhr.open("GET", "https://not-example.com/");
xhr.send();

fetch('"https://not-example.com/"').then((p)=>{})

const ws = new WebSocket("https://not-example.com/");

const es = new EventSource("https://not-example.com/");

navigator.sendBeacon("https://not-example.com/", {
    /* … */
});

new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('foo');
    }, 300);
})
