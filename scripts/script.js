let carne = 150;
let refri = 250;
let cerve = 2;

let inputAdulto = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputTempo = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

console.log(inputAdulto.value, inputCrianca)
function calcular(){
    let adulto = inputAdulto.value;
    let crianca = inputCrianca.value;
    let tempo = inputTempo.value;

    let carneTotal = (adulto * carne * tempo) + (crianca  * tempo * carne / 2);
    let refriTotal = (adulto * refri * tempo) + (crianca  * tempo * refri / 2);
    let cerveTotal = (adulto * cerve * tempo);

    resultado.innerHTML += `<p>${carneTotal}g de Carne </p>`;
    resultado.innerHTML += `<p>${refriTotal}ml de refri </p>`;
    resultado.innerHTML += `<p>${cerveTotal}latas de Cerveja </p>`;
}




