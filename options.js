document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("save").addEventListener("click", function () {
        const newPassword = document.getElementById("set-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const messageBox = document.getElementById("message");

        if (newPassword === "" || confirmPassword === "") {
            messageBox.innerText = "Fields cannot be empty!";
            return;
        }

        if (newPassword === confirmPassword) {
            chrome.storage.local.set({ password: newPassword, locked: true }, function () {
                messageBox.style.color = "green";
                messageBox.innerText = "Password saved successfully! Restarting Chrome...";

                // Close all tabs to restart Chrome
                setTimeout(() => {
                    chrome.tabs.query({}, (tabs) => {
                        tabs.forEach((tab) => chrome.tabs.remove(tab.id));
                    });
                }, 1500);
            });
        } else {
            messageBox.innerText = "Passwords do not match!";
        }
    });
});
