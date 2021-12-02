let copyelement = document.getElementById("copyelmentid");
let btnCopyElement = document.getElementById("btnCopyElement");

chrome.storage.sync.get("copyelementid", ({ copyelementid }) => {
    copyelement.innerText = copyelementid;
});

btnCopyElement.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getElementHtml,
    });
});

function getElementHtml() {
    chrome.storage.sync.get("copyelementid", ({ copyelementid }) => {
        let element = document.getElementById(copyelementid);
        if (element) {
            navigator.clipboard.writeText(element.innerHTML);
            alert('Inner html of "' + copyelementid  +'" copied to clipboard!');
        }
        else {
            alert('Element not found');
        }
    });
}
