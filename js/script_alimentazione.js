var alimento1colazione = Array("Wasa", "Fette biscottate", "Gallette", "Fragole", "Kiwi");
var alimento2colazione = Array("Fage", "Skyr", "Danone", "Latte e Proteine", "Yogurt Bianco");
var alimento3colazione = Array("Noci", "Cioccolato");

var spuntino_mattina = Array("Skyr", "Danone", "Yogurt Bianco", "Budino");

var pranzo_allenamento1 = Array("Wasa", "Gallette", "Crackers", "Patate 120g", "Piselli 120g");
var pranzo_allenamento2 = Array("Seppioline 180g", "Calamari 180g", "Platessa 180g", "Salmone 180g", "Pollo 150g", "Tacchino 150g", "Bovino 150g", "Bresaola", "Tonno"); //Da sistemare e aggiungere dettaglio
var pranzo_allenamento3 = Array("Carote", "Insalata", "Zucchine");

var pranzo_non_allenamento1 = Array("Pasta 70g", "Pasta 70g", "Riso 70g", "Riso 70g", "Patate 300g", "Gnocchi di patate 150g");
var pranzo_non_allenamento2 = Array("Seppioline 150g", "Calamari 150g", "Platessa 150g", "Salmone 150g ", "Pollo 130g", "Tacchino 130g", "Bovino 130g", "Bresaola", "Tonno", "Bovino"); //Da sistemare e aggiungere dettaglio
var pranzo_non_allenamento3 = Array("Carote", "Insalata", "Zucchine");

var spuntino_pomeriggio_allenamento1 = Array("Skyr", "Danone", "Yogurt Bianco", "Budino", "Budino", "Latte e Proteine");
var spuntino_pomeriggio_allenamento2 = Array("Barretta alle 18", "Barretta alle 18", "Succo alle 18", "Mela alle 18", "Pera alle 18", "Banana alle 18", "Albiccoca alle 18", "Fragole alle 18", "Kiwi alle 18");
var spuntino_pomeriggio_non_allenamento1 = Array("Mela", "Pera", "Banana", "Albiccoca", "Fragole", "Kiwi");
var spuntino_pomeriggio_non_allenamento2 = Array("Noci", "Cioccolato");


var cena_allenamento1 = Array("Pasta 110g", "Riso 110g");
var cena_allenamento2 = Array("Seppioline 120g", "Calamari 120g", "Platessa 120g", "Salmone 120g", "Pollo 120g", "Pollo 120g", "Tacchino 120g", "Bovino 120g"); //Da sistemare e aggiungere dettaglio
var cena_allenamento3 = Array("Carote", "Insalata");

var cena_non_allenamento1 = Array("Wasa", "Crackers", "Wasa", "Crackers", "Patate 120g", "Pane 50g");
var cena_non_allenamento2 = Array("Seppioline 180g", "Calamari 180g", "Platessa 180g", "Salmone 180g", "Pollo 150g", "2 uova", "Tacchino 150g", "Bovino 150g"); //Da sistemare e aggiungere dettaglio
var cena_non_allenamento3 = Array("Carote", "Insalata");


function GeneraMenu() {

    controllo_allenamento = CheckAllenamento();

    controllo_milano = CheckMilano();

    GeneraColazione();

    GeneraSpuntini(controllo_allenamento, controllo_milano);


    GeneraPranzo(controllo_allenamento, controllo_milano);

    GeneraCena(controllo_allenamento);

}

function GeneraColazione() {
    var colazioneLunedi = document.getElementById("colazioneLun");
    var colazioneMartedi = document.getElementById("colazioneMar");
    var colazioneMercoledi = document.getElementById("colazioneMer");
    var colazioneGiovedi = document.getElementById("colazioneGio");
    var colazioneVenerdi = document.getElementById("colazioneVen");

    colazioneLunedi.innerHTML = alimento1colazione[Math.floor(Math.random() * alimento1colazione.length)]
    colazioneLunedi.innerHTML += "<br>";
    colazioneLunedi.innerHTML += alimento2colazione[Math.floor(Math.random() * alimento2colazione.length)]
    colazioneLunedi.innerHTML += "<br>";
    colazioneLunedi.innerHTML += alimento3colazione[Math.floor(Math.random() * alimento3colazione.length)]


    colazioneMartedi.innerHTML = alimento1colazione[Math.floor(Math.random() * alimento1colazione.length)]
    colazioneMartedi.innerHTML += "<br>";
    colazioneMartedi.innerHTML += alimento2colazione[Math.floor(Math.random() * alimento2colazione.length)]
    colazioneMartedi.innerHTML += "<br>";
    colazioneMartedi.innerHTML += alimento3colazione[Math.floor(Math.random() * alimento3colazione.length)]


    colazioneMercoledi.innerHTML = alimento1colazione[Math.floor(Math.random() * alimento1colazione.length)]
    colazioneMercoledi.innerHTML += "<br>";
    colazioneMercoledi.innerHTML += alimento2colazione[Math.floor(Math.random() * alimento2colazione.length)]
    colazioneMercoledi.innerHTML += "<br>";
    colazioneMercoledi.innerHTML += alimento3colazione[Math.floor(Math.random() * alimento3colazione.length)]


    colazioneGiovedi.innerHTML = alimento1colazione[Math.floor(Math.random() * alimento1colazione.length)]
    colazioneGiovedi.innerHTML += "<br>";
    colazioneGiovedi.innerHTML += alimento2colazione[Math.floor(Math.random() * alimento2colazione.length)]
    colazioneGiovedi.innerHTML += "<br>";
    colazioneGiovedi.innerHTML += alimento3colazione[Math.floor(Math.random() * alimento3colazione.length)]


    colazioneVenerdi.innerHTML = alimento1colazione[Math.floor(Math.random() * alimento1colazione.length)]
    colazioneVenerdi.innerHTML += "<br>";
    colazioneVenerdi.innerHTML += alimento2colazione[Math.floor(Math.random() * alimento2colazione.length)]
    colazioneVenerdi.innerHTML += "<br>";
    colazioneVenerdi.innerHTML += alimento3colazione[Math.floor(Math.random() * alimento3colazione.length)]

}

function GeneraSpuntini(controlloAllenamento, controlloMilano) {
    var myArr = controlloAllenamento.split(",");
    var myArr2 = controlloMilano.split(",");

    var spuntinoMattinaLun = document.getElementById("spuntinoMattinoLun");
    var spuntinoMattinaMar = document.getElementById("spuntinoMattinoMar");
    var spuntinoMattinaMer = document.getElementById("spuntinoMattinoMer");
    var spuntinoMattinaGio = document.getElementById("spuntinoMattinoGio");
    var spuntinoMattinaVen = document.getElementById("spuntinoMattinoVen");

    spuntinoMattinaLun.innerHTML = spuntino_mattina[Math.floor(Math.random() * spuntino_mattina.length)]
    spuntinoMattinaMar.innerHTML = spuntino_mattina[Math.floor(Math.random() * spuntino_mattina.length)]
    spuntinoMattinaMer.innerHTML = spuntino_mattina[Math.floor(Math.random() * spuntino_mattina.length)]
    spuntinoMattinaGio.innerHTML = spuntino_mattina[Math.floor(Math.random() * spuntino_mattina.length)]
    spuntinoMattinaVen.innerHTML = spuntino_mattina[Math.floor(Math.random() * spuntino_mattina.length)]

    var spuntinoPomeriggioLun = document.getElementById("spuntinoPomeriggioLun");
    var spuntinoPomeriggioMar = document.getElementById("spuntinoPomeriggioMar");
    var spuntinoPomeriggioMer = document.getElementById("spuntinoPomeriggioMer");
    var spuntinoPomeriggioGio = document.getElementById("spuntinoPomeriggioGio");
    var spuntinoPomeriggioVen = document.getElementById("spuntinoPomeriggioVen");
    var spuntinoPomeriggioSab = document.getElementById("spuntinoPomeriggioSab");
    var spuntinoPomeriggioDom = document.getElementById("spuntinoPomeriggioDom");


    if (myArr2[0] == "S") {
        spuntino_pomeriggio_allenamento1 = spuntino_pomeriggio_allenamento1.filter(e => e !== 'Latte e Proteine');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Mela');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Pera');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Fragole');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Kiwi');
    }

    if (myArr[0] == "S") {
        spuntinoPomeriggioLun.innerHTML = spuntino_pomeriggio_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_allenamento1.length)]
        spuntinoPomeriggioLun.innerHTML += "<br>";
        spuntinoPomeriggioLun.innerHTML += spuntino_pomeriggio_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_allenamento2.length)]

    } else {
        spuntinoPomeriggioLun.innerHTML = spuntino_pomeriggio_non_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento1.length)]
        spuntinoPomeriggioLun.innerHTML += "<br>";
        spuntinoPomeriggioLun.innerHTML += spuntino_pomeriggio_non_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento2.length)]

    }

    if (myArr2[0] == "S") {
        spuntino_pomeriggio_allenamento1.push("Latte e Proteine");
        spuntino_pomeriggio_non_allenamento1.push("Mela");
        spuntino_pomeriggio_non_allenamento1.push("Pera");
        spuntino_pomeriggio_non_allenamento1.push("Fragole");
        spuntino_pomeriggio_non_allenamento1.push("Kiwi");
    }

    if (myArr2[1] == "S") {
        spuntino_pomeriggio_allenamento1 = spuntino_pomeriggio_allenamento1.filter(e => e !== 'Latte e Proteine');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Mela');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Pera');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Fragole');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Kiwi');
    }


    if (myArr[1] == "S") {
        spuntinoPomeriggioMar.innerHTML = spuntino_pomeriggio_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_allenamento1.length)]
        spuntinoPomeriggioMar.innerHTML += "<br>";
        spuntinoPomeriggioMar.innerHTML += spuntino_pomeriggio_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_allenamento2.length)]

    } else {
        spuntinoPomeriggioMar.innerHTML = spuntino_pomeriggio_non_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento1.length)]
        spuntinoPomeriggioMar.innerHTML += "<br>";
        spuntinoPomeriggioMar.innerHTML += spuntino_pomeriggio_non_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento2.length)]

    }

    if (myArr2[1] == "S") {
        spuntino_pomeriggio_allenamento1.push("Latte e Proteine");
        spuntino_pomeriggio_non_allenamento1.push("Mela");
        spuntino_pomeriggio_non_allenamento1.push("Pera");
        spuntino_pomeriggio_non_allenamento1.push("Fragole");
        spuntino_pomeriggio_non_allenamento1.push("Kiwi");
    }

    if (myArr2[2] == "S") {
        spuntino_pomeriggio_allenamento1 = spuntino_pomeriggio_allenamento1.filter(e => e !== 'Latte e Proteine');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Mela');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Pera');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Fragole');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Kiwi');
    }


    if (myArr[2] == "S") {
        spuntinoPomeriggioMer.innerHTML = spuntino_pomeriggio_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_allenamento1.length)]
        spuntinoPomeriggioMer.innerHTML += "<br>";
        spuntinoPomeriggioMer.innerHTML += spuntino_pomeriggio_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_allenamento2.length)]

    } else {
        spuntinoPomeriggioMer.innerHTML = spuntino_pomeriggio_non_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento1.length)]
        spuntinoPomeriggioMer.innerHTML += "<br>";
        spuntinoPomeriggioMer.innerHTML += spuntino_pomeriggio_non_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento2.length)]

    }

    if (myArr2[2] == "S") {
        spuntino_pomeriggio_allenamento1.push("Latte e Proteine");
        spuntino_pomeriggio_non_allenamento1.push("Mela");
        spuntino_pomeriggio_non_allenamento1.push("Pera");
        spuntino_pomeriggio_non_allenamento1.push("Fragole");
        spuntino_pomeriggio_non_allenamento1.push("Kiwi");
    }

    if (myArr2[3] == "S") {
        spuntino_pomeriggio_allenamento1 = spuntino_pomeriggio_allenamento1.filter(e => e !== 'Latte e Proteine');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Mela');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Pera');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Fragole');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Kiwi');
    }

    if (myArr[3] == "S") {
        spuntinoPomeriggioGio.innerHTML = spuntino_pomeriggio_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_allenamento1.length)]
        spuntinoPomeriggioGio.innerHTML += "<br>";
        spuntinoPomeriggioGio.innerHTML += spuntino_pomeriggio_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_allenamento2.length)]

    } else {
        spuntinoPomeriggioGio.innerHTML = spuntino_pomeriggio_non_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento1.length)]
        spuntinoPomeriggioGio.innerHTML += "<br>";
        spuntinoPomeriggioGio.innerHTML += spuntino_pomeriggio_non_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento2.length)]

    }

    if (myArr2[3] == "S") {
        spuntino_pomeriggio_allenamento1.push("Latte e Proteine");
        spuntino_pomeriggio_non_allenamento1.push("Mela");
        spuntino_pomeriggio_non_allenamento1.push("Pera");
        spuntino_pomeriggio_non_allenamento1.push("Fragole");
        spuntino_pomeriggio_non_allenamento1.push("Kiwi");
    }

    if (myArr2[4] == "S") {
        spuntino_pomeriggio_allenamento1 = spuntino_pomeriggio_allenamento1.filter(e => e !== 'Latte e Proteine');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Mela');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Pera');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Fragole');
        spuntino_pomeriggio_non_allenamento1 = spuntino_pomeriggio_non_allenamento1.filter(e => e !== 'Kiwi');
    }

    if (myArr[4] == "S") {
        spuntinoPomeriggioVen.innerHTML = spuntino_pomeriggio_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_allenamento1.length)]
        spuntinoPomeriggioVen.innerHTML += "<br>";
        spuntinoPomeriggioVen.innerHTML += spuntino_pomeriggio_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_allenamento2.length)]

    } else {
        spuntinoPomeriggioVen.innerHTML = spuntino_pomeriggio_non_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento1.length)]
        spuntinoPomeriggioVen.innerHTML += "<br>";
        spuntinoPomeriggioVen.innerHTML += spuntino_pomeriggio_non_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento2.length)]

    }

    if (myArr2[4] == "S") {
        spuntino_pomeriggio_allenamento1.push("Latte e Proteine");
        spuntino_pomeriggio_non_allenamento1.push("Mela");
        spuntino_pomeriggio_non_allenamento1.push("Pera");
        spuntino_pomeriggio_non_allenamento1.push("Fragole");
        spuntino_pomeriggio_non_allenamento1.push("Kiwi");
    }

    spuntinoPomeriggioSab.innerHTML = spuntino_pomeriggio_non_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento1.length)]
    spuntinoPomeriggioSab.innerHTML += "<br>";
    spuntinoPomeriggioSab.innerHTML += spuntino_pomeriggio_non_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento2.length)]

    spuntinoPomeriggioDom.innerHTML = spuntino_pomeriggio_non_allenamento1[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento1.length)]
    spuntinoPomeriggioDom.innerHTML += "<br>";
    spuntinoPomeriggioDom.innerHTML += spuntino_pomeriggio_non_allenamento2[Math.floor(Math.random() * spuntino_pomeriggio_non_allenamento2.length)]

}

function GeneraPranzo(controlloAllenamento, controlloMilano) {
    var myArr = controlloAllenamento.split(",")
    var myArr2 = controlloMilano.split(",")


    var pranzoLunedi = document.getElementById("pranzoLunedi");
    var pranzoMartedi = document.getElementById("pranzoMartedi");
    var pranzoMercoledi = document.getElementById("pranzoMercoledi");
    var pranzoGiovedi = document.getElementById("pranzoGiovedi");
    var pranzoVenerdi = document.getElementById("pranzoVenerdi");

    if (myArr2[0] == "S") {
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Seppioline 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Calamari 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Platessa 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Salmone 180g');

        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Seppioline 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Calamari 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Platessa 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Salmone 150g');
    }

    if (myArr[0] == "S") {
        pranzoLunedi.innerHTML = pranzo_allenamento1[Math.floor(Math.random() * pranzo_allenamento1.length)]
        pranzoLunedi.innerHTML += "<br>";
        pranzoLunedi.innerHTML += pranzo_allenamento2[Math.floor(Math.random() * pranzo_allenamento2.length)]
        pranzoLunedi.innerHTML += "<br>";
        pranzoLunedi.innerHTML += pranzo_allenamento3[Math.floor(Math.random() * pranzo_allenamento3.length)]
    } else {
        pranzoLunedi.innerHTML = pranzo_non_allenamento1[Math.floor(Math.random() * pranzo_non_allenamento1.length)]
        pranzoLunedi.innerHTML += "<br>";
        pranzoLunedi.innerHTML += pranzo_non_allenamento2[Math.floor(Math.random() * pranzo_non_allenamento2.length)]
        pranzoLunedi.innerHTML += "<br>";
        pranzoLunedi.innerHTML += pranzo_non_allenamento3[Math.floor(Math.random() * pranzo_non_allenamento3.length)]
    }

    if (myArr2[0] == "S") {
        pranzo_allenamento2.push("Seppioline 180g");
        pranzo_allenamento2.push("Calamari 180g");
        pranzo_allenamento2.push("Platessa 180g");
        pranzo_allenamento2.push("Salmone 180g");
        pranzo_non_allenamento2.push("Seppioline 150g");
        pranzo_non_allenamento2.push("Calamari 150g");
        pranzo_non_allenamento2.push("Platessa 150g");
        pranzo_non_allenamento2.push("Salmone 150g");
    }


    if (myArr2[1] == "S") {
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Seppioline 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Calamari 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Platessa 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Salmone 180g');

        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Seppioline 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Calamari 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Platessa 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Salmone 150g');
    }

    if (myArr[1] == "S") {
        pranzoMartedi.innerHTML = pranzo_allenamento1[Math.floor(Math.random() * pranzo_allenamento1.length)]
        pranzoMartedi.innerHTML += "<br>";
        pranzoMartedi.innerHTML += pranzo_allenamento2[Math.floor(Math.random() * pranzo_allenamento2.length)]
        pranzoMartedi.innerHTML += "<br>";
        pranzoMartedi.innerHTML += pranzo_allenamento3[Math.floor(Math.random() * pranzo_allenamento3.length)]
    } else {
        pranzoMartedi.innerHTML = pranzo_non_allenamento1[Math.floor(Math.random() * pranzo_non_allenamento1.length)]
        pranzoMartedi.innerHTML += "<br>";
        pranzoMartedi.innerHTML += pranzo_non_allenamento2[Math.floor(Math.random() * pranzo_non_allenamento2.length)]
        pranzoMartedi.innerHTML += "<br>";
        pranzoMartedi.innerHTML += pranzo_non_allenamento3[Math.floor(Math.random() * pranzo_non_allenamento3.length)]
    }
    if (myArr2[1] == "S") {
        pranzo_allenamento2.push("Seppioline 180g");
        pranzo_allenamento2.push("Calamari 180g");
        pranzo_allenamento2.push("Platessa 180g");
        pranzo_allenamento2.push("Salmone 180g");
        pranzo_non_allenamento2.push("Seppioline 150g");
        pranzo_non_allenamento2.push("Calamari 150g");
        pranzo_non_allenamento2.push("Platessa 150g");
        pranzo_non_allenamento2.push("Salmone 150g");
    }


    if (myArr2[2] == "S") {
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Seppioline 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Calamari 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Platessa 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Salmone 180g');

        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Seppioline 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Calamari 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Platessa 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Salmone 150g');
    }

    if (myArr[2] == "S") {
        pranzoMercoledi.innerHTML = pranzo_allenamento1[Math.floor(Math.random() * pranzo_allenamento1.length)]
        pranzoMercoledi.innerHTML += "<br>";
        pranzoMercoledi.innerHTML += pranzo_allenamento2[Math.floor(Math.random() * pranzo_allenamento2.length)]
        pranzoMercoledi.innerHTML += "<br>";
        pranzoMercoledi.innerHTML += pranzo_allenamento3[Math.floor(Math.random() * pranzo_allenamento3.length)]
    } else {
        pranzoMercoledi.innerHTML = pranzo_non_allenamento1[Math.floor(Math.random() * pranzo_non_allenamento1.length)]
        pranzoMercoledi.innerHTML += "<br>";
        pranzoMercoledi.innerHTML += pranzo_non_allenamento2[Math.floor(Math.random() * pranzo_non_allenamento2.length)]
        pranzoMercoledi.innerHTML += "<br>";
        pranzoMercoledi.innerHTML += pranzo_non_allenamento3[Math.floor(Math.random() * pranzo_non_allenamento3.length)]
    }
    if (myArr2[2] == "S") {
        pranzo_allenamento2.push("Seppioline 180g");
        pranzo_allenamento2.push("Calamari 180g");
        pranzo_allenamento2.push("Platessa 180g");
        pranzo_allenamento2.push("Salmone 180g");
        pranzo_non_allenamento2.push("Seppioline 150g");
        pranzo_non_allenamento2.push("Calamari 150g");
        pranzo_non_allenamento2.push("Platessa 150g");
        pranzo_non_allenamento2.push("Salmone 150g");
    }


    if (myArr2[3] == "S") {
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Seppioline 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Calamari 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Platessa 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Salmone 180g');

        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Seppioline');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Calamari');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Platessa');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Salmone');
    }

    if (myArr[3] == "S") {
        pranzoGiovedi.innerHTML = pranzo_allenamento1[Math.floor(Math.random() * pranzo_allenamento1.length)]
        pranzoGiovedi.innerHTML += "<br>";
        pranzoGiovedi.innerHTML += pranzo_allenamento2[Math.floor(Math.random() * pranzo_allenamento2.length)]
        pranzoGiovedi.innerHTML += "<br>";
        pranzoGiovedi.innerHTML += pranzo_allenamento3[Math.floor(Math.random() * pranzo_allenamento3.length)]
    } else {
        pranzoGiovedi.innerHTML = pranzo_non_allenamento1[Math.floor(Math.random() * pranzo_non_allenamento1.length)]
        pranzoGiovedi.innerHTML += "<br>";
        pranzoGiovedi.innerHTML += pranzo_non_allenamento2[Math.floor(Math.random() * pranzo_non_allenamento2.length)]
        pranzoGiovedi.innerHTML += "<br>";
        pranzoGiovedi.innerHTML += pranzo_non_allenamento3[Math.floor(Math.random() * pranzo_non_allenamento3.length)]
    }
    if (myArr2[3] == "S") {
        pranzo_allenamento2.push("Seppioline 180g");
        pranzo_allenamento2.push("Calamari 180g");
        pranzo_allenamento2.push("Platessa 180g");
        pranzo_allenamento2.push("Salmone 180g");
        pranzo_non_allenamento2.push("Seppioline 150g");
        pranzo_non_allenamento2.push("Calamari 150g");
        pranzo_non_allenamento2.push("Platessa 150g");
        pranzo_non_allenamento2.push("Salmone 150g");
    }

    if (myArr2[4] == "S") {
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Seppioline 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Calamari 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Platessa 180g');
        pranzo_allenamento2 = pranzo_allenamento2.filter(e => e !== 'Salmone 180g');

        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Seppioline 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Calamari 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Platessa 150g');
        pranzo_non_allenamento2 = pranzo_non_allenamento2.filter(e => e !== 'Salmone 150g');
    }

    if (myArr[4] == "S") {
        pranzoVenerdi.innerHTML = pranzo_allenamento1[Math.floor(Math.random() * pranzo_allenamento1.length)]
        pranzoVenerdi.innerHTML += "<br>";
        pranzoVenerdi.innerHTML += pranzo_allenamento2[Math.floor(Math.random() * pranzo_allenamento2.length)]
        pranzoVenerdi.innerHTML += "<br>";
        pranzoVenerdi.innerHTML += pranzo_allenamento3[Math.floor(Math.random() * pranzo_allenamento3.length)]
    } else {
        pranzoVenerdi.innerHTML = pranzo_non_allenamento1[Math.floor(Math.random() * pranzo_non_allenamento1.length)]
        pranzoVenerdi.innerHTML += "<br>";
        pranzoVenerdi.innerHTML += pranzo_non_allenamento2[Math.floor(Math.random() * pranzo_non_allenamento2.length)]
        pranzoVenerdi.innerHTML += "<br>";
        pranzoVenerdi.innerHTML += pranzo_non_allenamento3[Math.floor(Math.random() * pranzo_non_allenamento3.length)]
    }
    if (myArr2[4] == "S") {
        pranzo_allenamento2.push("Seppioline 180g");
        pranzo_allenamento2.push("Calamari 180g");
        pranzo_allenamento2.push("Platessa 180g");
        pranzo_allenamento2.push("Salmone 180g");
        pranzo_non_allenamento2.push("Seppioline 150g");
        pranzo_non_allenamento2.push("Calamari 150g");
        pranzo_non_allenamento2.push("Platessa 150g");
        pranzo_non_allenamento2.push("Salmone 150g");
    }

    pranzoSabato.innerHTML = pranzo_non_allenamento1[Math.floor(Math.random() * pranzo_non_allenamento1.length)]
    pranzoSabato.innerHTML += "<br>";
    pranzoSabato.innerHTML += pranzo_non_allenamento2[Math.floor(Math.random() * pranzo_non_allenamento2.length)]
    pranzoSabato.innerHTML += "<br>";
    pranzoSabato.innerHTML += pranzo_non_allenamento3[Math.floor(Math.random() * pranzo_non_allenamento3.length)]
}

function GeneraCena(controllo) {

    var myArr = controllo.split(",")


    var cenaLunedi = document.getElementById("cenaLunedi");
    var cenaMartedi = document.getElementById("cenaMartedi");
    var cenaMercoledi = document.getElementById("cenaMercoledi");
    var cenaGiovedi = document.getElementById("cenaGiovedi");
    var cenaVenerdi = document.getElementById("cenaVenerdi");
    var cenaSabato = document.getElementById("cenaSabato");
    var cenaDomenica = document.getElementById("cenaDomenica");


    if (myArr[0] == "S") {
        cenaLunedi.innerHTML = cena_allenamento1[Math.floor(Math.random() * cena_allenamento1.length)]
        cenaLunedi.innerHTML += "<br>";
        cenaLunedi.innerHTML += cena_allenamento2[Math.floor(Math.random() * cena_allenamento2.length)]
        cenaLunedi.innerHTML += "<br>";
        cenaLunedi.innerHTML += cena_allenamento3[Math.floor(Math.random() * cena_allenamento3.length)]
    } else {
        cenaLunedi.innerHTML = cena_non_allenamento1[Math.floor(Math.random() * cena_non_allenamento1.length)]
        cenaLunedi.innerHTML += "<br>";
        cenaLunedi.innerHTML += cena_non_allenamento2[Math.floor(Math.random() * cena_non_allenamento2.length)]
        cenaLunedi.innerHTML += "<br>";
        cenaLunedi.innerHTML += cena_non_allenamento3[Math.floor(Math.random() * cena_non_allenamento3.length)]
    }

    if (myArr[1] == "S") {
        cenaMartedi.innerHTML = cena_allenamento1[Math.floor(Math.random() * cena_allenamento1.length)]
        cenaMartedi.innerHTML += "<br>";
        cenaMartedi.innerHTML += cena_allenamento2[Math.floor(Math.random() * cena_allenamento2.length)]
        cenaMartedi.innerHTML += "<br>";
        cenaMartedi.innerHTML += cena_allenamento3[Math.floor(Math.random() * cena_allenamento3.length)]
    } else {
        cenaMartedi.innerHTML = cena_non_allenamento1[Math.floor(Math.random() * cena_non_allenamento1.length)]
        cenaMartedi.innerHTML += "<br>";
        cenaMartedi.innerHTML += cena_non_allenamento2[Math.floor(Math.random() * cena_non_allenamento2.length)]
        cenaMartedi.innerHTML += "<br>";
        cenaMartedi.innerHTML += cena_non_allenamento3[Math.floor(Math.random() * cena_non_allenamento3.length)]
    }

    if (myArr[2] == "S") {
        cenaMercoledi.innerHTML = cena_allenamento1[Math.floor(Math.random() * cena_allenamento1.length)]
        cenaMercoledi.innerHTML += "<br>";
        cenaMercoledi.innerHTML += cena_allenamento2[Math.floor(Math.random() * cena_allenamento2.length)]
        cenaMercoledi.innerHTML += "<br>";
        cenaMercoledi.innerHTML += cena_allenamento3[Math.floor(Math.random() * cena_allenamento3.length)]
    } else {
        cenaMercoledi.innerHTML = cena_non_allenamento1[Math.floor(Math.random() * cena_non_allenamento1.length)]
        cenaMercoledi.innerHTML += "<br>";
        cenaMercoledi.innerHTML += cena_non_allenamento2[Math.floor(Math.random() * cena_non_allenamento2.length)]
        cenaMercoledi.innerHTML += "<br>";
        cenaMercoledi.innerHTML += cena_non_allenamento3[Math.floor(Math.random() * cena_non_allenamento3.length)]
    }

    if (myArr[3] == "S") {
        cenaGiovedi.innerHTML = cena_allenamento1[Math.floor(Math.random() * cena_allenamento1.length)]
        cenaGiovedi.innerHTML += "<br>";
        cenaGiovedi.innerHTML += cena_allenamento2[Math.floor(Math.random() * cena_allenamento2.length)]
        cenaGiovedi.innerHTML += "<br>";
        cenaGiovedi.innerHTML += cena_allenamento3[Math.floor(Math.random() * cena_allenamento3.length)]
    } else {
        cenaGiovedi.innerHTML = cena_non_allenamento1[Math.floor(Math.random() * cena_non_allenamento1.length)]
        cenaGiovedi.innerHTML += "<br>";
        cenaGiovedi.innerHTML += cena_non_allenamento2[Math.floor(Math.random() * cena_non_allenamento2.length)]
        cenaGiovedi.innerHTML += "<br>";
        cenaGiovedi.innerHTML += cena_non_allenamento3[Math.floor(Math.random() * cena_non_allenamento3.length)]
    }

    if (myArr[4] == "S") {
        cenaVenerdi.innerHTML = cena_allenamento1[Math.floor(Math.random() * cena_allenamento1.length)]
        cenaVenerdi.innerHTML += "<br>";
        cenaVenerdi.innerHTML += cena_allenamento2[Math.floor(Math.random() * cena_allenamento2.length)]
        cenaVenerdi.innerHTML += "<br>";
        cenaVenerdi.innerHTML += cena_allenamento3[Math.floor(Math.random() * cena_allenamento3.length)]
    } else {
        cenaVenerdi.innerHTML = cena_non_allenamento1[Math.floor(Math.random() * cena_non_allenamento1.length)]
        cenaVenerdi.innerHTML += "<br>";
        cenaVenerdi.innerHTML += cena_non_allenamento2[Math.floor(Math.random() * cena_non_allenamento2.length)]
        cenaVenerdi.innerHTML += "<br>";
        cenaVenerdi.innerHTML += cena_non_allenamento3[Math.floor(Math.random() * cena_non_allenamento3.length)]
    }

    cenaSabato.innerHTML = cena_non_allenamento1[Math.floor(Math.random() * cena_non_allenamento1.length)]
    cenaSabato.innerHTML += "<br>";
    cenaSabato.innerHTML += cena_non_allenamento2[Math.floor(Math.random() * cena_non_allenamento2.length)]
    cenaSabato.innerHTML += "<br>";
    cenaSabato.innerHTML += cena_non_allenamento3[Math.floor(Math.random() * cena_non_allenamento3.length)]

    cenaDomenica.innerHTML = cena_non_allenamento1[Math.floor(Math.random() * cena_non_allenamento1.length)]
    cenaDomenica.innerHTML += "<br>";
    cenaDomenica.innerHTML += cena_non_allenamento2[Math.floor(Math.random() * cena_non_allenamento2.length)]
    cenaDomenica.innerHTML += "<br>";
    cenaDomenica.innerHTML += cena_non_allenamento3[Math.floor(Math.random() * cena_non_allenamento3.length)]

}



function CheckAllenamento() {
    cbObj = document.getElementById('lunediAllenamento');
    var testo = "";
    if (cbObj.checked)
        testo += "S,"
    else
        testo += "N,"

    cbObj = document.getElementById('martediAllenamento');
    if (cbObj.checked)
        testo += "S,"
    else
        testo += "N,"

    cbObj = document.getElementById('mercolediAllenamento');
    if (cbObj.checked)
        testo += "S,"
    else
        testo += "N,"

    cbObj = document.getElementById('giovediAllenamento');
    if (cbObj.checked)
        testo += "S,"
    else
        testo += "N,"

    cbObj = document.getElementById('venerdiAllenamento');
    if (cbObj.checked)
        testo += "S"
    else
        testo += "N"

    return testo
}


function CheckMilano() {
    cbObj = document.getElementById('lunediMilano');
    var testo = "";
    if (cbObj.checked)
        testo += "S,"
    else
        testo += "N,"

    cbObj = document.getElementById('martediMilano');
    if (cbObj.checked)
        testo += "S,"
    else
        testo += "N,"

    cbObj = document.getElementById('mercolediMilano');
    if (cbObj.checked)
        testo += "S,"
    else
        testo += "N,"

    cbObj = document.getElementById('giovediMilano');
    if (cbObj.checked)
        testo += "S,"
    else
        testo += "N,"

    cbObj = document.getElementById('venerdiMilano');
    if (cbObj.checked)
        testo += "S"
    else
        testo += "N"

    return testo
}