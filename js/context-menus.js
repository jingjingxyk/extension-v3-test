/*
    右键菜单操作
*/

let menus = () => {
    /*
    chrome.contextMenus.create({
        id: "sampleContextMenu",
        title: "Sample Context Menu",
        contexts: ["selection"],
    });
     */
    chrome.contextMenus.create({
        id: "sampleContextMenu",
        title: "精确检索结果--汉语大词典 & 康熙字典 知网版",
        contexts: ["selection"],
    });
}
let menus_listen_app = () => {
    chrome.contextMenus.onClicked.addListener((info, tab) => {
        console.log(info, tab);
        if (info.menuItemId === 'sampleContextMenu') {
            console.log(info.pageUrl, info.selectionText)
            let url = post_request_builder('https://hd.cnki.net/kxhd/Search/Result', JSON.stringify({
                "searchbox": info.selectionText,
                "searchmatch": 'exact'
            }))
            console.log(url)

            chrome.tabs.create(
                {
                    'url': url
                },
                (tab) => {
                    console.log(tab);
                    return
                    // https://developer.chrome.com/docs/extensions/reference/scripting/#handling-results
                    chrome.scripting.executeScript(
                        {
                            target: {tabId: tab.id},
                            files: ["js/content-scripts/about-blank.js"],
                            // match_about_blank:true,
                            // match_origin_as_fallback:true
                            // function: post_request_builder
                        },
                        (injectionResults = null) => {

                        }
                    )
                }
            );
            /*
            post_request_builder('https://hd.cnki.net/kxhd/Search/Result', {
                    "searchbox": info.selectionText,
                    "searchmatch": "exact"
                }
            )

             */
        }
    });

};

// POST REQUEST  reference
// https://stackoverflow.com/questions/7387217/chrome-extension-development-post-to-new-tab

let post_request_builder = (url, params) => {
    console.log(url,params)
    let source = fakePost.toString().replace(/(\n|\t)/gm, '').replace(/\s\s/gm, ' ');
    return `javascript:${source}; fakePost('${url}', ${params});`

};

function fakePost(url, params) {
    var form = document.createElement("form");
    form.setAttribute("action", url);
    form.setAttribute("method", "post");

    for (let key in params) {
        let hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
    }
    document.body.appendChild(form);
    form.submit();
}

function fakePostBackup(url, params) {
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
export {
    menus,
    menus_listen_app
};