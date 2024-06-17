chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.indexOf('classroom.google.com') === -1) {
    chrome.tabs.update(tabId, { url: 'https://classroom.google.com' });
  }
});