chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url": "https://www.usefomo.com/?utm_source=nomo"});
});
