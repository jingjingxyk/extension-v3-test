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
start=parseInt('4E00',16)
end=parseInt('9FA5',16)
for(let i=start;i<=end;i++){
    let hex=String(i).toString(16)
    let word=String.fromCharCode("0x"+hex)
    console.log(word)
}

// 汉字 Unicode 编码范围

// https://www.qqxiuzi.cn/zh/hanzi-unicode-bianma.php

var arr=Array.from(document.querySelectorAll('tr'));
arr.shift();
number=0;
arr.forEach((value,index,array)=>{
    let col1=value.firstElementChild.innerText
    let col2=value.firstElementChild.nextElementSibling.innerText
    let col3=value.firstElementChild.nextElementSibling.nextElementSibling.innerText
    console.log(col1,col2,col3)

    console.log(col3.split('-'))
    let res=col3.split('-')

    if(res.length===1){
        String.fromCharCode("0x"+col3)
        number++;
    }else if(res.length===2){
        let start=parseInt(res[0],16)
        let end=parseInt(res[1],16)
        for(let i=start;i<=end;i++){
            let hex=String(i).toString(16)
            let word=String.fromCharCode("0x"+hex)
            console.log(word)
            number++
        }
    }

})

console.log("total:",number)


/*
字符集  	字数    Unicode编码
基本汉字 20902字 4E00-9FA5
基本汉字补充 90字 9FA6-9FFF
扩展A 6592字 3400-4DBF
扩展B 42720字 20000-2A6DF
扩展C 4153字 2A700-2B738
扩展D 222字 2B740-2B81D
扩展E 5762字 2B820-2CEA1
扩展F 7473字 2CEB0-2EBE0
扩展G 4939字 30000-3134A
康熙部首 214字 2F00-2FD5
部首扩展 115字 2E80-2EF3
兼容汉字 477字 F900-FAD9
兼容扩展 542字 2F800-2FA1D
PUA(GBK)部件 81字 E815-E86F
部件扩展 452字 E400-E5E8
PUA增补 207字 E600-E6CF
汉字笔画 36字 31C0-31E3
汉字结构 12字 2FF0-2FFB
汉语注音 43字 3105-312F
注音扩展 22字 31A0-31BA
〇 1字 3007

 */