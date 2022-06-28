
// import {getHashValue} from "/js/libs/common.js"


let post_request_builder = (url, params) => {
    let source = fakePost(url, params).toString(url).replace(/(\n|\t)/gm, '').replace(/\s\s/gm, ' ');
    return `javascript:${source}; fakePost();`

};

function fakePost(url, params) {
    var form = document.createElement("form");

    // Create a POST dump at ptsv2.com and change the code
    form.setAttribute("action", url);
    form.setAttribute("method", "post");


    for (let key in params) {
        let hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
    }

    // Appending the form might not be necessary
    document.body.appendChild(form);

    form.submit();
}


(async()=>{
    let {getParameterValue,getHashValue} = await import(chrome.runtime.getURL("/content-scripts/common.js"));
    let keyword=getHashValue('extension-define-keyword')
    console.log(keyword)
    if(keyword){

    }
})();