//对象特性检测

document.scripts

let domains= [];
for (let script of document.scripts) {
    let src = script.src;
    if (src) {
        for (let domain of domains) {
            if (src.includes(domain)) {
                console.log(script);
                console.log(src);
                break;
            }
        }
    }
}

/*
用 wasm 绘制界面
基本上 js 的注入是没用的

比如这样 https://www.egui.rs/#demo

 */