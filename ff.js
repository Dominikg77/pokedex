let bundeslaender = [];
let letters = [];
async function init() {
    let resp = await fetch('./bundesland.json');
    bundeslaender = await resp.json();
    render();
}

function render(filter) {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < bundeslaender.length; i++) {
        const land = bundeslaender[i];
        const population = (land['population'] + '').replace('.', ',');
        const firstLetter = land['name'].charAt(0);

        if (!filter || filter == firstLetter) {
            content.innerHTML += generateLink(land, population);
        }


        if (!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }
    }

    renderLetters();
}

function setFilter(letter) {
    render(letter);
}

function renderLetters() {
    let letterbox = document.getElementById('letterbox');
    letterbox.innerHTML = '';
    letterbox.innerHTML = `<div onclick="newLoad()" class="letter"># </div>`;

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        letterbox.innerHTML += `<div onclick="setFilter('${letter}')" class="letter">${letter}</div>`;
    }
}

function newLoad() {
    render();
}


function generateLink(land, population) {
    return `<a class="bbox" href="${land['url']}" target="_blank">
    <div>${land['name']}</div>
    <div class="text-gray">${population} Millionen</div>
</a>`;
}