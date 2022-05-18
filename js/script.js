
var alimentazioneHTML = "contenuti/alimentazione.html";
var homeHTML = "contenuti/home.html";
var crossfitHTML = "contenuti/crossfit.html";
var smartHTML = "contenuti/smart.html";


function apriAlimentazione() {
    $ajaxUtils.sendGetRequest(
        alimentazioneHTML,
        function (responseText) {
            document.querySelector("#contenuto_pagina_centrale")
                .innerHTML = responseText;
        })

};

function ritornaHome() {
    $ajaxUtils.sendGetRequest(
        homeHTML,
        function (responseText) {
            document.querySelector("#contenuto_pagina_centrale")
                .innerHTML = responseText;
        })
}

function apriCrossfit() {
    $ajaxUtils.sendGetRequest(
        crossfitHTML,
        function (responseText) {
            document.querySelector("#contenuto_pagina_centrale")
                .innerHTML = responseText;
        })
}

function apriSmart() {
    $ajaxUtils.sendGetRequest(
        smartHTML,
        function (responseText) {
            document.querySelector("#contenuto_pagina_centrale")
                .innerHTML = responseText;
        })
}

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

    // On first load, show home view
    $ajaxUtils.sendGetRequest(
        homeHTML,
        function (responseText) {
            document.querySelector("#contenuto_pagina_centrale")
                .innerHTML = responseText;
        },
        false);
});
