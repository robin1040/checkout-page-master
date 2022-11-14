/* Constantes de precios articulos */

const precioMochila = document.getElementById("offer");
const precioTennis = document.getElementById("offer-2");
const total = document.getElementById("total");

/* constantes para añadir o restar */
const mochila =document.getElementById("amount");
const tennis =document.getElementById("amount-1");

/* Funciones onclick botones add y rest */
function sumaMochila(){
    mochila.textContent= parseFloat(mochila.textContent) +1;
    total.textContent = "$" + Math.round((parseFloat(total.textContent.replace("$","")) + parseFloat(precioMochila.textContent.replace("$","")))*100)/100;
    
}   
function restarMochila(){
    if (mochila.textContent <= 0){
        mochila.textContent = 0;
    }else{
        mochila.textContent=parseFloat(mochila.textContent) -1;
        total.textContent = "$" + Math.round((parseFloat(total.textContent.replace("$","")) - parseFloat(precioMochila.textContent.replace("$","")))*100)/100;
    }
}
function sumaTennis(){
    tennis.textContent= parseFloat(tennis.textContent) +1;
    total.textContent = "$" + Math.round((parseFloat(total.textContent.replace("$","")) + parseFloat(precioTennis.textContent.replace("$","")))*100)/100;
}   
function restarTennis(){
    if (tennis.textContent <= 0){
        tennis.textContent = 0;
    }else{
        tennis.textContent=parseFloat(tennis.textContent) -1;
        total.textContent = "$" + Math.round((parseFloat(total.textContent.replace("$","")) - parseFloat(precioTennis.textContent.replace("$","")))*100)/100;
    }
}
