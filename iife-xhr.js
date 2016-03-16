"use strict";

function showCarnivores (carnivores){

  let list = document.getElementById("carnivores-list");
  let dinoOutput = "";

  for (let i = 0; i < carnivores.length; i++) {
    let currentCarnivore = carnivores[i];

    dinoOutput +=  `<h1>${currentCarnivore.name}</h1>`;
    dinoOutput +=  `<h5>${currentCarnivore.family}</h5>`;

    list.innerHTML += dinoOutput;
  }
};

function showHerbivores (herbivores){
  let list2 = document.getElementById("herbivores-list")
  let dinoOutput2 = "";

  for (let i = 0; i < herbivores.length; i++) {
   let currentHerbivore = herbivores[i];
    dinoOutput2 += `<h1>${currentHerbivore.name}</h1>`;
    dinoOutput2 += `<h5>${currentHerbivore.family}</h5>`;

    list2.innerHTML = dinoOutput2;

  }
}


Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);