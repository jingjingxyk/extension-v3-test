import * as content_menus from '/js/context-menus.js'

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
// * chrome      - the global namespace for Chrome's extension APIs
// * runtime     – the namespace of the specific API we want to use
// * onInstalled - the event we want to subscribe to
// * addListener - what we want to do with this event

chrome.runtime.onInstalled.addListener(async (reason) => {
  console.log("chrome.runtime.onInstalled do nothing ");
  // console.log(chrome.runtime.OnInstalledReason)
  /*
    console.log(chrome.runtime.getURL("js/sw.js"))
    console.log(chrome.runtime.getURL("js/myscript.js"))
    console.log(chrome.runtime.getURL("js/tools/self-define-browser-editor.js"))
    console.log(chrome.runtime.getURL("js/tools/myscript-tools.js"))
 */

  console.log(reason)
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {

  }

  content_menus.menus()



  chrome.tabs.create(
      {
        // url: `https://www.marxists.org/`
        // url: `https://www.marxists.org/chinese/marx/capital/index.htm`
         url: `https://github.com/justjavac/ReplaceGoogleCDN/tree/master/extension/test`
        // url: `https://stackoverflow.com/tags/socat/hot?filter=all`
      },
      (tab) => {
        console.log(tab);
      }
  );



  chrome.declarativeNetRequest.getEnabledRulesets((rulesetIds) => {
    console.log(rulesetIds);
  });
  chrome.declarativeNetRequest.getSessionRules(
      (rules) => {
        console.log(rules);
      }
  )
  chrome.declarativeNetRequest.getDynamicRules(
      (rules) => {
        console.log(rules);
      }
  )
  chrome.declarativeNetRequest.getAvailableStaticRuleCount(
      (count) => {
        console.log(count);
      }
  )

})



chrome.runtime.onStartup.addListener(async (reason) => {





  /*
       const src = chrome.runtime.getURL("js/tools/tools.js");
        const {app}=await import(src);
        app();
        */
  /*
    chrome.scripting.executeScript(
        {
            target: {tabId: tab.tabId},
            files: ["js/tools/tools.js"]
        },
        (injectionResults = null) => {

        }
    )

     */
});

chrome.runtime.onRestartRequired.addListener((e)=>{
      console.log(e,'-------------33333333[')
    }
)


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
  }
});

chrome.tabs.onCreated.addListener((tab) => {
  console.log("chrome.tab created  ");
  console.log(tab);
});
chrome.tabs.onActivated.addListener(async(activeInfo) => {
  console.log("chrome.tabs.onActivated do nothing ");
  console.log(activeInfo)



  let tab = await getCurrentTab();
  /*
  console.log("current page:", tab);

  chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["/ui/js/app.js"],
      },
      (injectionResults) => {
        console.log(chrome.runtime.lastError);
        console.log(injectionResults);
      }
  );
    */
  //  注入JS 或者CSS 解决 PJAX 不可用问题等问题
  // console.log(chrome.runtime.getURL("js/tools/myscript-tools.js"))
  /*
    try {
        chrome.scripting.executeScript(
            {
                target: {tabId: activeInfo.tabId},
                files: ["js/myscript.js"]
            },
            (injectionResults = null) => {

            }
        )
        chrome.scripting.insertCSS(
            {
                target: {tabId: activeInfo.tabId},
                files: ["css/my.css"]
            },
            (injectionResults = null) => {

            }
        )
    } catch (error) {
        console.log(error)
    } finally {
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error : \n' + chrome.runtime.lastError.message;
        }
    }

    */
});

/*
接收消息
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  /*
        console.log(sender)
        console.log(sender.tab)
        console.log(request)

         */
  console.log(request);
  let response = {
    msg: "no change",
    code: 500,
    data: {},
  };

  {
    // 和服务器交付
    console.log(request);
    let url = "https://control-plane.xiaoshuogeng.com/rule/list";
    console.log(url);
    fetch(url, {})
      .then((x) => console.log(x))
      .then((x) => console.log(x));
    response["msg"] = "register and get rule list ok ";
    response["code"] = 200;
  }
  sendResponse(response);
});

chrome.action.onClicked.addListener((tab) => {
  console.log(tag);
  document.querySelector(".goSetRule").addEventListener("click", () => {
    let url = chrome.runtime.getURL("index.html");
    console.log(url);
    alert(url);
  });
  console.log("Turning " + tab.url + " red!");
  chrome.scripting.executeScript({
    code: 'document.body.style.backgroundColor="red"',
  });
});

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(
  (MatchedRuleInfoDebug) => {
    console.log(MatchedRuleInfoDebug);
  }
);

chrome.declarativeNetRequest.getAvailableStaticRuleCount((count) => {
  console.log(count);
});
chrome.declarativeNetRequest.getEnabledRulesets((rulesetIds) => {
  console.log(rulesetIds);
});

/*
chrome.declarativeNetRequest.getDynamicRules(
    (rules)=>{
        console.log(rules)
    }
)
chrome.declarativeNetRequest.getSessionRules(
    (rules)=>{
        console.log(rules)
    }
)
chrome.declarativeNetRequest.getMatchedRules(
    {},
    ( RulesMatchedDetails)=>{
        console.log( RulesMatchedDetails)
    }
)

 */
/*
chrome.declarativeNetRequest.updateDynamicRules(
    {
        "addRules":[],
        "removeRuleIds":[],
    },
    ()=>{

    }
)

 */



//importScripts("fuse.js", "background.js");


/*
chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        "id": 1,
        "priority": 1,
        "action": {
            "type": "modifyHeaders",
            "requestHeaders": [
                { "header": "Referer", "operation": "set", "value": "htts://targetHost" }
            ]
        },
        "condition": {
            "urlFilter": "https://condidtionUrl",
            "resourceTypes": ["xmlhttprequest"]
        }
    }],
})

 */
chrome.runtime.openOptionsPage((w)=>{
    console.log(w)
})

content_menus.menus_listen_app()