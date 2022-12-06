
const currentTab = getCurrentTab();
currentTab.then((tab) => {
  console.log("tab info", tab)
  tabUrlElement = document.querySelector('#tab-url')
  tabUrlElement.innerHTML = tab.url

  tabTitleElement = document.querySelector('#tab-title')
  tabTitleElement.innerHTML = tab.title
})

// deprecated in manifest v3
/**
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  document.getElementById("info-key").value = selection[0];
  console.log(selection[0])
});
*/

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}