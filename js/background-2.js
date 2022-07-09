chrome.runtime.onInstalled.addListener(async (reason) => {


    console.log(chrome.runtime.id)
    let match_url='chrome-extension://'+chrome.runtime.id+'/options_ui/index.html'
    console.log(match_url.toString())
    chrome.scripting.registerContentScripts(
        [{
            "js":['options_ui/js/app.js'],
            "css":[],
            "matches":[match_url.toString()],
            "runAt":'document_idle',
            "id":'9d137db6-fea6-11ec-ad70-dfa4cc9eaf2c'
        }],
        (res)=>{console.log(res)},
    )

    chrome.runtime.openOptionsPage((w)=>{
        console.log(w)
    })


    var optionsUrl = chrome.runtime.getURL('options_ui/index.html');

    chrome.tabs.query({url: optionsUrl},async function(tabs) {
        if (tabs.length) {
            //let tab = await chrome.tabs.update(tabs[0].id, {active: true});
            // console.log(tab)
            /*
             chrome.scripting.executeScript({
                 target: {tabId: tabs[0].id},
                 files: ['options_ui/js/app.js']
             });

             */
        } else {
            let tab = await chrome.tabs.create({url: optionsUrl});
            console.log(tab)
            /*
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['options_ui/js/app.js']
            },(InjectionResult)=>{console.log(InjectionResult)});
            */
        }
    });

})