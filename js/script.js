/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


 */

const numLimit = 5;
let randomNum;

for(let i = 0; i < numLimit; i++){
    randomNum = getRandomNum();
    document.getElementById("random-num").append(randomNum + " ");
}

function getRandomNum(){
    return Math.floor(Math.random() * 5 + 1);
}

