let elementIdToCopy = document.getElementById("copyelmentid");
let buttonApply = document.getElementById("btnApply");


function handleApplyButtonClick() {
    alert(elementIdToCopy.value);
    setElementId();
}

function setElementId() {
    let copyelementid = elementIdToCopy.value;
    chrome.storage.sync.set({ copyelementid });
}

buttonApply.addEventListener("click", handleApplyButtonClick);
setElementId();
