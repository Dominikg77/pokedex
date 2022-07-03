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
        document.getElementById(`load-sccren`).classList.add(`d-none`);
    }

}

function renderPokemonInfoMain(i) {
    let name = allPokemon[i][`name`]; // zugreifen auf den namen 
    let types = allPokemon[i][`types`][0][`type`][`name`]; // console findet man die nötigen adressen und dann so zugreifen 
    let img = allPokemon[i][`sprites`][`other`][`dream_world`][`front_default`];
    let mainContainer = document.getElementById('pokedex');
    mainContainer.innerHTML += '';
    mainContainer.innerHTML += generateMainHtml(i, name, types, img);
    bgColor();
}



function bgColor() {
    for (let i = 0; i < allPokemon.length; i++) {
        let name = allPokemon[i].types[0].type.name;
        if (name == name) {
            document.getElementById(`background-color-main(${i})`).classList.add(name)
        };
    }
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
<div class="container-spez-info-width" onclick="notClose(event)" >
<div class="dialog-info" id="background-color-card(${i})" >
<h1>${name}</h1>
</div>
<div id="second-info-dialog" >
<div class="image" >
<img src="img/left.png" id="left-Image" onclick="moveLeft(${i})">
<img src="${img}" id="pokomon-Image">
<img src="img/right.png" id="right-Image" onclick="moveRight(${i})">
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
    cardColor(i);
}

function notClose(event) {
    event.stopPropagation();
}


function closeDialog() {
    document.getElementById(`dialog`).classList.add(`d-none`);
}


function moveRight(i) {
    if (i < allPokemon.length - 1) {
        i++
    } else {
        i = 0
    }
    document.getElementById('dialog').innerHTML = ``;
    renderDialog(i);
}

function moveLeft(i) {
    if (i !== 0) {
        i--
    } else {
        i = allPokemon.length - 1
    }
    document.getElementById('dialog').innerHTML = ``;
    renderDialog(i);
}


function cardColor(i) {
    let name = allPokemon[i].types[0].type.name;
    if (name == name) {
        document.getElementById(`background-color-card(${i})`).classList.add(name)
    }
}


function newNumber() {
    let inputLoad = document.getElementById(`number-pokemons`).value;
    numberOfPokemon += parseInt(inputLoad);
    console.log(`nr`, numberOfPokemon)
    loadPokemon();
    document.getElementById(`number-pokemons`).value = ``;
}


function filterNames() {
    let search = document.getElementById('search-pokemon').value;
    search = search.toLowerCase();
    let found = document.getElementById('pokedex');
    found.innerHTML = '';
    definePokemon(search, found);
}