const robotron = document.querySelector("#robotron");
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function manipulaControle (operacao, controle) {
    const peca = controle.querySelector(".controle-contador");
    if (operacao == "+") {
        peca.value = parseInt(peca.value) + 1
    } else {
        peca.value = parseInt(peca.value) - 1
    }
}

function atualizaEstatistica (peca, operacao) {

    estatisticas.forEach ( (elemento) => {
        if(operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        } else{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}

function dizOi() {
    console.log('Oii, bem-vindo');
}

    controle.forEach( (elemento) => {
            elemento.addEventListener("click", (evento) => {
                manipulaControle(elemento.dataset.controle, evento.target.parentNode)
                atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle)
            })
})

robotron.addEventListener("click", () => {console.log('Cliquei no robo')});

dizOi();

