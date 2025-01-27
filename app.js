// Recupération des valeurs des inputs à mettre dans les labels
const colorInputs = [...document.querySelectorAll('input[type="color"]')];
const labelInputs = [...document.querySelectorAll(".input-group label")];
const rangeLabel = document.querySelector(".orientation-value");

// console.log(labelInputs);
// console.log(colorInputs);

// Création d'un objet des couleurs :
const gradientData = {
  angle: 100,
  colors: ["#FF5F6D", "#FFC371"],
};
// Ce n'est pas une fonction pure : si on rajoute des inputs ? l'objet colors change.
function populateUI() {
  for (i = 0; i < labelInputs.length; i++) {
    labelInputs[i].textContent = gradientData.colors[i];
    labelInputs[i].style.background = gradientData.colors[i];
  }
  for (i = 0; i < colorInputs.length; i++) {
    colorInputs[i].value = gradientData.colors[i];
  }

  document.body.style.background = `linear-gradient(${gradientData.angle}deg, ${gradientData.colors[0]}, ${gradientData.colors[1]})`;

  rangeLabel.textContent = `${gradientData.angle}°`;
}

populateUI();

// Gestion de l'angle lors de la selection de l'orientation
const rangeInput = document.querySelector(".inp-range");
rangeInput.addEventListener("input", (e) => {
  gradientData.angle = e.target.value;
  populateUI();
});

// Gestion des Inputs :
colorInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const indexCurrent = colorInputs.indexOf(e.target);
    gradientData.colors[indexCurrent] = e.target.value.toUpperCase();
    populateUI();
  });
});

// Gestion Bouton Copier / Coller
const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", () => {
  let lock = false;
  const valueColor = `linear-gradient(${gradientData.angle}deg, ${gradientData.colors[0]}, ${gradientData.colors[1]})`;
  navigator.clipboard.writeText(valueColor);

  if (lock) return;

  lock=true;
  copyBtn.classList.add('active');
  setTimeout(()=>{
    copyBtn.classList.remove('active');
    lock=false;
  },1500)
});

// Gestion bouton Random
const randomBtn = document.querySelector('.random-btn');
randomBtn.addEventListener('click',(e) => {
    gradientData.colors[0]=getRandomHexColor();
    gradientData.colors[1]=getRandomHexColor();
    gradientData.angle=getRandomAngle()
    populateUI();
});

// Donne Random une couleur Hex
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
  
// Donne un angle compris entre 0 et 360° :
function getRandomAngle() {
    return `${Math.floor(Math.random() * 361)}`;
}

// let human= {
//     teeth : 32
// }
// let gwen = {
//    __proto__:human, // !!!???
//     age : 22
// }
// console.log(gwen.teeth)

// const inputs =document.querySelectorAll('input');
// const labels = document.querySelector('label');
// const body = document.querySelector('body');
// const label1 =document.querySelector('label[for="color1"]')
// const label2 =document.querySelector('label[for="color2"]')
// const labelOrientation =document.querySelector('.orientation-value')
// const input1 =document.querySelector('input[id="color1"]')
// const input2 =document.querySelector('input[id="color2"]')
// const inputRange =document.querySelector('#orientation')

// // Declaration des boutons :
// const btnCopy = document.querySelector('.copy-btn');
// const btnRandom = document.querySelector('.random-btn');
// let recupValeur=[];

// input1.addEventListener('input',(e)=>{
//     label1.textContent=input1.value
// })
// input2.addEventListener('input',(e)=>{
//     label2.textContent=input2.value
// })
// inputRange.addEventListener('input',(e)=>{
//     labelOrientation.textContent=`${inputRange.value}°`;
// })
// // On ecoute le click sur le bouton
// btnCopy.addEventListener('click',(e)=> {
//     inputs.forEach(color => {
//         recupValeur.push(color.value);

//     })
//     body.style.background=`linear-gradient(${recupValeur[2]}deg, ${recupValeur[0]}, ${recupValeur[1]})`;
//     console.log(recupValeur);
//     recupValeur=[];
// })
