// Objetivo: Criar uma variável para armazenar o nome e a quantidade de
// experiência (XP) de um héroi, depois, utilizar uma estrutura de decisão para
// apresentar uma mensagem.

// Se XP for menor que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 6.000 = Ouro
// Se XP for entre 6.001 e 7.000 = Platina
// Se XP for entre 7.001 e 8.000 - Ascendente
// Se XP for entre 8.001 e 9.000 = Imortal
// Se XP for entre 9.001 e 10.000 = Radiante
// Se XP for maior ou igual a 10.001 = Divino

let nomeHeroi = "Link";

for (let xpHeroi = 0; xpHeroi <= 11000; xpHeroi += 1000) {
  let nivel;

  if (xpHeroi <= 1000) {
    nivel = "Ferro";
  } else if (xpHeroi <= 2000) {
    nivel = "Bronze";
  } else if (xpHeroi <= 5000) {
    nivel = "Prata";
  } else if (xpHeroi <= 6000) {
    nivel = "Ouro";
  } else if (xpHeroi <= 7000) {
    nivel = "Platina";
  } else if (xpHeroi <= 8000) {
    nivel = "Ascendente";
  } else if (xpHeroi <= 9000) {
    nivel = "Imortal";
  } else if (xpHeroi <= 10000) {
    nivel = "Radiante";
  } else {
    nivel = "Divino";
  }

  console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel + ".");
}
