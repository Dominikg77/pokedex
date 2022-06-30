 let currentPokoemon
 const url = 'https://pokeapi.co/api/v2/pokemon/';
 let allPokemon = [];


 async function loadPokemon() {
     for (let i = 0; i < 20; i++) {
         const pokemon_url = url + (i + 1);
         let response = await fetch(pokemon_url);
         currentPokemon = await response.json();
         allPokemon.push(currentPokemon);
         renderPokemonInfoMain(i);
     }

 }

 function renderPokemonInfoMain(i) {
     let name = allPokemon[i][`name`];
     let types = allPokemon[i][`types`][0][`type`][`name`];
     let img = allPokemon[i][`sprites`][`other`][`dream_world`][`front_default`];
     let mainContainer = document.getElementById('pokedex');
     mainContainer.innerHTML += '';
     mainContainer.innerHTML += generateMainHtml(i, name, types, img);
 }


 function generateMainHtml(i, name, types, img) {
     return `
     <div onclick="renderDialog(${i})" class="container-main" id="pokex-container-${i}">
     <div class="main-info-container">
     <h1 id="pokemon-name">${name}</h1>
     <div class="second-home-info">
         <p id="home-info"> ${types} </p>
     </div>
 </div>
 <div class="main-container-image">
     <img src="${img}" id="pokomon-Image">
 </div>
 </div>
     `;
 }

 function renderDialog(i) {
     let name = allPokemon[i][`name`];
     let types = allPokemon[i][`types`][0][`type`][`name`];
     let img = allPokemon[i][`sprites`][`other`][`dream_world`][`front_default`];
     for (let j = 0; j < 5; j++) {
         let attack = allPokemon[i][`stats`][j][`stat`][`name`];
         let nr = allPokemon[i][`stats`][j][`base_stat`];

         document.getElementById(`dialog`).classList.remove(`d-none`);
         let mainContainer = document.getElementById('dialog');
         mainContainer.innerHTML = `
    <div class="container-spez-info" >
    <h1>${name}</h1>
    <p>${types}</p>
    <img src="${img}" id="pokomon-Image">
    <table>
    <td> ${attack} : </td>
    <td> ${nr} </td>
    <table>
    </div>
    `;
     }
 }


 function closeDialog() {
     document.getElementById(`dialog`).classList.add(`d-none`);
 }




 // Attack Infos 
 /*
 for (let i = 0; i < 5; i++) {
         let attack = currentPokoemon[`stats`][i][`stat`][`name`];
         let nr = currentPokoemon[`stats`][i][`base_stat`];}
         document.getElementById(`spezifikationen-table`).innerHTML += ` 
         <tr>
          <td> ${attack} : </td> 
          <td> ${nr} </td>
         </tr>
         `
     }
 */