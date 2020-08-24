// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer stabilire il vincitore, in base a chi fa il punteggio più alto.

// INSERIMENTO NUMERO UTENTE
var bottone = document.getElementById("genera");

bottone.addEventListener("click",
  function(){
    // INSERIMENTO NUMERO UTENTE
    var numYouser = prompt("inserisci un numero da 1 a 6.")
    document.getElementById("youser").innerHTML = numYouser;
    console.log("Numero Utente "+ numYouser);

    // GENERAZIONE NUMERO PC
    var numRandom = Math.floor(Math.random(1) * 6);
    document.getElementById("pc").innerHTML = numRandom;
    console.log("Random " + numRandom);




  }

);


// CONFRONTO DEI DUE NUMERI

// STAMPA DELLA SCRITTA DEL VINCITORE
