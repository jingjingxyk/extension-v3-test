"use strict";

console.log("注入js,css 代码", window.location);
{
    // 汉字 Unicode 编码范围

    // https://www.qqxiuzi.cn/zh/hanzi-unicode-bianma.php
    "汉".charCodeAt(0).toString(16);
    //U+0000至U+FFFF
    //4E00-9FA5
    String.fromCharCode("0x6c49");
    String.fromCharCode("0x3007");
    let start=parseInt('4E00',16)
    let end=parseInt('9FFF',16)
    /*
                 start=parseInt('31A0',16)
                 end=parseInt('31BA',16)

                start=parseInt('2FF0',16)
                 end=parseInt('2FFB',16)

                start=parseInt('31C0',16)
                 end=parseInt('31E3',16)

                start=parseInt('20000',16)
                 end=parseInt('2A6DF',16)

                start=parseInt('2F00',16)
                 end=parseInt('2FD5',16)

    */
    start=parseInt('20000',16)
    end=parseInt('2A6DF',16)
    for(let i=start;i<=end;i++){
        let hex=String(i).toString(16)
        let word=String.fromCharCode("0x"+hex)
        console.log(word)
    }
}