var setadireita = window.document.getElementById("seta-direita")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    bruna.style ="display:none"
    samanta.style ="display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margim-top:55px"
    
}
function RolarParaEsquerda(){
    bruna.style ="display:flex"
    samanta.style ="display:none"
    setadireita.style = "display:flex; margim-top:55px"
    setaesquerda.style = "display:none"
}