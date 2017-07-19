const ipc = require("electron").ipcRederer;


// let version = document.querySelector("#version");
//
// version.innerText = process.versions.electron;
// console.log(process.versions);

let acronyms = [
    { acronym: "A", definition: "This is an A"},
    { acronym: "B", definition: "This is a B"},
    { acronym: "C", definition: "This is an C"},
    { acronym: "ABC", definition: "This is an ABC"},
    { acronym: "DE", definition: "This is an DE"},
    { acronym: "GZ", definition: "This is an GZ"}
];

let inputText = document.querySelector("#acronym_input");

function updateResultsList() {
    let resultsList = document.querySelector("#results");

    inputText.value = "Dupadupa";
    inputText.innerText = "Dupadupa";
    // resultsList.innerHTML = inputText;
    resultsList.innerText = "Dupa";
}

inputText.addEventListener("onkeypress", updateResultsList);

module.export = {
    updateResultsList
};