function generateMainHtml(i, name, types, img) {
    return `
     <div onclick="renderDialog(${i})"  class="container-main" id="background-color-main(${i})">
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


function generateRenderDialogHtml(name, img, types, height, weight, i) {
    return `
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
}


function generateSpezInfoHtml(attack, nrBar, nr) {
    return `
        <div class="spez-info-container">
    <div class="spez-info" >
    <div class="attack" > <b> ${attack}</b> </div>
    <div class="nr-diagram" > 
    <div class="nr-digram-bar" style="width: ${nrBar}%; background-color: green"> ${nr} </div>
    </div>
    </div>
    `
}