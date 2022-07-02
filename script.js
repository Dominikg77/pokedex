let currentPokoemon
const url = 'https://pokeapi.co/api/v2/pokemon/';
let allPokemon = [];
let numberOfPokemon = 30;


async function loadPokemon() { // async benötigetes da es await drin hat
    for (let i = 0; i < numberOfPokemon; i++) {
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
    let height = allPokemon[i][`height`]; // zugreifen auf den namen 
    let weight = allPokemon[i][`weight`]; // zugreifen auf den namen 
    document.getElementById(`dialog`).classList.remove(`d-none`);
    let mainContainer = document.getElementById('dialog');
    mainContainer.innerHTML = `
<div class="container-spez-info" >
<div class="container-spez-info-width" >
<div class="dialog-info" >
<h1>${name}</h1>
</div>
<div id="second-info-dialog" >
<div class="image" >
<img src="img/left.png" id="left-Image">
<img src="${img}" id="pokomon-Image">
<img src="img/right.png" id="right-Image">
</div>
<div class="spez-over-info-container" >
<div class="spez-over-info" >
<span class="margin-bottom-spez" > <b> Typ </b> </span>
<span>${types}</span>
</div>


<div class="spez-over-info" >
<span class="margin-bottom-spez" > <b> Height</b></span>
<span>${height} ft</span>
</div>


<div class="spez-over-info" >
<span class="margin-bottom-spez" > <b> Weight</b></span>
<span>${weight} lbs</span>
</div>


</div>

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
    <div class="attack" > <b> ${attack}</b> </div>
    <div class="nr-diagram" > 
    <div class="nr-digram-bar" style="width: ${nrBar}%; background-color: green"> ${nr} </div>
    </div>
    </div>
    `;
    }
}


function closeDialog() {
    document.getElementById(`dialog`).classList.add(`d-none`);
}


function newNumber() {
    numberOfPokemon = document.getElementById(`number-pokemons`).value;
    loadPokemon();
    document.getElementById(`number-pokemons`).value = ``;
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