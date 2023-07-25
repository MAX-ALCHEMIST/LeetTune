console.log("Hello from background");

chrome.action.onClicked.addListener(async (tab) => {
  const msg = {
    txt: "hello",
  };
  chrome.tabs.sendMessage(tab.id, msg);
});
