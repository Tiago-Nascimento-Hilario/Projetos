let peso = document.querySelector("#input1");
let altua = document.querySelector("#input2");
const calcular = document.querySelector("#buton1");

function verificaImc(){
    let imc = parseInt(peso.value)/ parseFloat((altua.value * altua.value));
    alert("Seu indice de massa corporal é " + imc.toFixed(2))
}

calcular.onclick = verificaImc;