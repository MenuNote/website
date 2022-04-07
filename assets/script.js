const apiLink = "https://api.github.com/repos/menunote/menunote/releases/latest";
const versionSpan = document.getElementById("release-version");

const downloadBtn = document.getElementById("download-btn");
const downloadSection = document.getElementById("download-section");

fetch(apiLink).then(response => response.json()).then(data => {
    versionSpan.innerHTML = "v" + data.tag_name;
});

function checkMac() {
    if (navigator.platform.indexOf("Mac") === -1) {
        downloadBtn.classList.add("faded");
        downloadSection.classList.add("faded");
    }
}

checkMac();