let imgLamp = document.querySelector("#lampada");
let nCliquesLigar = 0;
let timeoutID = null;
let statusLampada = "Desligada";

// // Checar de 1 em 1 segundo qual o número de cliques;
// setInterval(()=>{
//     console.log("nClickLigar:", nCliquesLigar);
// }, 1000);


function ligarLampada() {
    nCliquesLigar++;
    regraNegocioQuebraLampada();
    console.log("Clicou em ligar:", nCliquesLigar);

    if (statusLampada !== "Quebrada") {
        statusLampada = "Ligada";
        imgLamp.src = './img/ligada.jpg';
        document.querySelector("#lampLigada").classList.add("d-none");
        document.querySelector("#lampDesligada").classList.remove("d-none");
    }
}

function desligarLampada() {
    if (statusLampada !== "Quebrada") {
        statusLampada = "Desligada";
        imgLamp.src = './img/desligada.jpg';
        document.querySelector("#lampLigada").classList.remove("d-none");
        document.querySelector("#lampDesligada").classList.add("d-none");
    }
}

function quebrarLampada() {
    statusLampada = "Quebrada";
    imgLamp.src = './img/quebrada.jpg';
    document.querySelector("#lampLigada").classList.add("d-none");
    document.querySelector("#lampDesligada").classList.add("d-none");
    document.querySelector("#lampResetar").classList.remove("d-none");
}

function regraNegocioQuebraLampada() {

    resetarCronometroAnterior();
    checarPassouDe3Cliques();
    criarNovoCronometro();
    return;

    function resetarCronometroAnterior() {
        // Timeoutid é diferente de null, caso ela não exista
        if (timeoutID !== null) {
            clearTimeout(timeoutID);
        }
    }

    function checarPassouDe3Cliques() {
        if (nCliquesLigar > 3) {
            quebrarLampada();
        }
    }

    function criarNovoCronometro() {
        timeoutID = setTimeout(function () {
            nCliquesLigar = 0;
            timeoutID = null;
        }, 5000);
    }
}
