/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


 */

// range id numeri determinato da utente
const numRange = 100;
// numero di numeri casuali generati
const numLimit = 5;
// variabile del numero random
let randomNum;

// ciclo per generare il num random e stamparlo in html
for(let i = 0; i < numLimit; i++){
    randomNum = getRandomNum(1, numRange);
    document.getElementById("random-num").append(randomNum + " ");
}

// funzione numero random
function getRandomNum(min, max){67
    return Math.floor(Math.random() * (max - min) + min);
}

// array dei numeri che l'utente scrive dal prompt
const guessNumArr = [];

// funzione che si arriva dopo 5 secondi
setTimeout(function(){
    askNumber();
}, 5000);

// funzione per chiedere all'utente di inserire 5 numeri 
function askNumber(){
    let guessedNumber;
    for(let i = 0; i < numLimit; i++){
        guessedNumber = prompt("Inserisci i numeri memorizzati");
        guessNumArr.push(guessedNumber);
    };
    console.log(guessNumArr); 
}
