chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get(["password"], (result) => {
        if (!result.password) {
            chrome.tabs.create({ url: "options.html" });
        }
    });
});

// Lock Chrome on startup
chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.set({ locked: true });
});

// Lock new tabs until password is entered
chrome.tabs.onCreated.addListener((tab) => {
    chrome.storage.local.get("locked", (data) => {
        if (data.locked && tab.url !== "lock.html") {
            chrome.tabs.update(tab.id, { url: "lock.html" });
        }
    });
});
