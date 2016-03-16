"use strict";
let Predator = (function () {
let carnivores = [];
let herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText).carnivores;
        callbackFunction(carnivores);        
      });
      loader.open("GET","carnivores.json");
      loader.send();
    },
    loadHerbivores: function (callbackFunction) {
    let loader2 = new XMLHttpRequest();
    loader2.addEventListener("load", function (){
      herbivores = JSON.parse(this.responseText).herbivores
      callbackFunction(herbivores);
    });
    loader2.open("GET", "herbivores.json");
    loader2.send();
  }
 }
})();