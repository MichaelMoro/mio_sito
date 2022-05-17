
var alimentazioneHTML = "contenuti/alimentazione.html";


function apriAlimentazione() {
    var htmlCodice = document.querySelector("#contenuto_pagina_centrale").innerHTML;

    $ajaxUtils.sendGetRequest(
        alimentazioneHTML,
        function (responseText) {
            document.querySelector("#contenuto_pagina_centrale")
                .innerHTML = responseText;
        })

};

function ritornaHome() {
    document.querySelector("#contenuto_pagina_centrale")
        .innerHTML = "Prova";
}