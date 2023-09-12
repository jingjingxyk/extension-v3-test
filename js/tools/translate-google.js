
/*
  代码中
  %20 表示空格
  %22 表示双引号
  %3A 表示冒号
  %2B 表示加号
 */
/**
 * translate.google.cn 退出大陆，默认解析已经不可用。手动指定DNS解析，还是可用的
 * translate.google.com 大陆就不可以使用
 */
{
    let script=document.createElement('script');
    script.setAttribute('src','https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    script.setAttribute('type','text/javascript');
    document.body.appendChild(script);

    let div=document.createElement('div');
    let element=document.body.insertBefore(div,document.body.firstChild);
    element.id='google_translate_element';
    element.style.display='none';

    let script_2 =document.createElement('script');
    script_2.text=`
            function googleTranslateElementInit () {
                new google.translate.TranslateElement({pageLanguage:""},"google_translate_element");
            }
          `;
    script_2.setAttribute('type','text/javascript');
    document.body.appendChild(script_2);
}

//用于书签
javascript:{
    //上面的代码块
} void 0 ;

//用于v2版本扩展替换
(()=>{
    //上面的代码块
})() ;

//https://github.com/FirefoxBar/HeaderEditor/issues/221

//拨测工具
//https://zijian.aliyun.com/detect/http

//获取拨测结果IP地址 js
// https://github.com/jingjingxyk/jingjingxyk.github.io/blob/main/frontend-experimental-features/get-google-ip-list-from-aliyun-tools.js
// https://www.jingjingxyk.com//frontend-experimental-features/get-google-ip-list-from-aliyun-tools.js
