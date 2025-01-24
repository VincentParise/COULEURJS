// Recupération des valeurs des inputs à mettre dans les labels
const inputs =document.querySelectorAll('input');
const labels = document.querySelector('label');
const body = document.querySelector('body');
const label1 =document.querySelector('label[for="color1"]')
const label2 =document.querySelector('label[for="color2"]')
const labelOrientation =document.querySelector('.orientation-value')
const input1 =document.querySelector('input[id="color1"]')
const input2 =document.querySelector('input[id="color2"]')
const inputRange =document.querySelector('#orientation')

// Declaration des boutons : 
const btnCopy = document.querySelector('.copy-btn');
const btnRandom = document.querySelector('.random-btn');
const recupValeur=[];

input1.addEventListener('input',(e)=>{
    label1.textContent=input1.value
})
input2.addEventListener('input',(e)=>{
    label2.textContent=input2.value
})
inputRange.addEventListener('input',(e)=>{
    labelOrientation.textContent=`${inputRange.value}°`;
})

btnCopy.addEventListener('click',(e)=> {
    inputs.forEach(color => {
        recupValeur.push(color.value); 
        //labels[color].textContent=`${color.value}`   
    })
    body.style.background=`linear-gradient(${recupValeur[2]}deg, ${recupValeur[0]}, ${recupValeur[1]})`;

    //recupValeur=[];
})
