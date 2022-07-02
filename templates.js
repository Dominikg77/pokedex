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