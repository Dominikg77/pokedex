let currentPokoemon
const url = 'https://pokeapi.co/api/v2/pokemon/';
let allPokemon = [];


async function loadPokemon() { // async benötigetes da es await drin hat
    for (let i = 0; i < 60; i++) {
        const pokemon_url = url + (i + 1);
        let response = await fetch(pokemon_url); // fetch() funktion zum auf API zugreifen / await ist ein warte befehl
        currentPokemon = await response.json(); // wird zu einem JSON /
        allPokemon.push(currentPokemon); // Json an ein Array zu weisen
        renderPokemonInfoMain(i);
    }

}

function renderPokemonInfoMain(i) {
    let name = allPokemon[i][`name`]; // zugreifen auf den namen 
    let types = allPokemon[i][`types`][0][`type`][`name`]; // console findet man die nötigen adressen und dann so zugreifen 
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
    document.getElementById(`dialog`).classList.remove(`d-none`);
    let mainContainer = document.getElementById('dialog');
    mainContainer.innerHTML = `
<div class="container-spez-info" >
<div class="container-spez-info-width" >
<div class="dialog-info" >
<h1>${name}</h1>
<div class="dialog-types" >
<p>${types}</p>
</div>
</div>
<div id="second-info-dialog" >
<img src="${img}" id="pokomon-Image">

</div>
</div>
</div>
`;
    for (let j = 0; j < 6; j++) {
        let attack = allPokemon[i][`stats`][j][`stat`][`name`];
        let nr = allPokemon[i][`stats`][j][`base_stat`];
        let nrBar = nr / 1.25;
        let mainContainer = document.getElementById('second-info-dialog');
        mainContainer.innerHTML += `
        <div class="spez-info-container">
    <div class="spez-info" >
    <div class="attack" > ${attack}: </div>
    <div class="nr-diagram" > 
    <div class="nr-digram-bar" style="width: ${nrBar}%; background-color: red"> ${nr} </div>
    </div>
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