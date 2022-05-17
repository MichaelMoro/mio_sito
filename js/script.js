
var alimentazioneHTML = "contenuti/alimentazione.html";
var homeHTML = "contenuti/home.html";


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