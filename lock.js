document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("save").addEventListener("click", function () {
        const enteredPassword = document.getElementById("old").value;
        const messageBox = document.getElementById("status");
        const noteBox = document.getElementById("note");

        // Retrieve stored password
        chrome.storage.local.get("password", function (data) {
            const savedPassword = data.password;

            if (enteredPassword === savedPassword) {
                noteBox.style.display = "none";
                messageBox.style.color = "green";
                messageBox.innerText = "Password correct! Unlocking Chrome...";

                // Unlock the browser by setting locked: false and opening a new tab
                chrome.storage.local.set({ locked: false }, function () {
                    chrome.tabs.create({ url: "chrome://newtab" }, function () {
                        setTimeout(() => {
                            window.close(); // Close the lock page after unlocking
                        }, 500);
                    });
                });
            } else {
                noteBox.style.display = "block";
                noteBox.innerText = "Incorrect password! Please try again.";
            }
        });
    });
});
