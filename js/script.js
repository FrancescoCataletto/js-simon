/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


 */

const visual = document.getElementById("random-num");

// range id numeri determinato da utente
const numRange = 100;

// numero di numeri casuali generati
const numLimit = 5;

// variabile del numero random
let randomNum;

// array dei numeri che l'utente scrive dal prompt
const guessNumArr = [];

// array numeri random
const randomNumArr = [];

// array numeri indovinati
const guessedNumArr = [];

// contatore numeri indovinati
let counter = 0;


// ciclo per generare il num random e stamparlo in html
for(let i = 0; i < numLimit; i++){
    randomNum = getRandomNum(1, numRange);
    randomNumArr.push(randomNum);
    visual.append(randomNum + " ");
}
console.log(randomNumArr);

// funzione numero random4
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

// pulizia dell'html dopo 5 secondi
setTimeout(function(){
    visual.innerHTML = " ";
}, 5000)

// funzione che si attiva dopo 6 secondi e chiede i numeri
setTimeout(askNumber, 6000)

// funzione per chiedere all'utente di inserire 5 numeri 
function askNumber(){
    let guessedNumber;
    for(let i = 0; i < numLimit; i++){
        guessedNumber = parseInt(prompt("Inserisci i numeri memorizzati"));
        guessNumArr.push(guessedNumber);
        if(guessNumArr[i] === randomNumArr[i]){
            counter++;
            guessedNumArr.push(guessNumArr[i]);
            console.log(guessedNumArr);
        }
    }
    if(guessedNumArr.length === 1){
        visual.innerHTML = `Hai azzeccato ${counter} numero.`;
        document.getElementById("guessed-num").innerHTML = `Il numero azzeccato è ${guessedNumArr}`;
    }else if(guessedNumArr.length > 1){
        visual.innerHTML = `Hai azzeccato ${counter} numeri.`;
        document.getElementById("guessed-num").innerHTML = `I numeri azzeccati sono ${guessedNumArr}`;
    }else if(guessedNumArr.length === 0){
        visual.innerHTML = `Non hai azzeccato neanche un numero`;
    }
}

