// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer stabilire il vincitore, in base a chi fa il punteggio più alto.

// INSERIMENTO NUMERO UTENTE
var bottone = document.getElementById("genera");

bottone.addEventListener("click",
  function(){
    // INSERIMENTO NUMERO UTENTE
    var numYouser = Math.floor(Math.random() * 6) + 1 ;
    document.getElementById("youser").innerHTML = numYouser;
    console.log("Numero Utente "+ numYouser);

    // GENERAZIONE NUMERO PC
    var numRandom = Math.floor(Math.random() * 6) + 1 ;
    document.getElementById("pc").innerHTML = numRandom;
    console.log("Random " + numRandom);
    }
);

// CONFRONTO DEI DUE NUMERI
if (numYouser < numRandom) {
  // STAMPA DELLA SCRITTA DEL VINCITORE
  document.getElementById("risultato").innerHTML = "Il PC ha Vinto !"
}else if (numYouser > numRandom) {
  // STAMPA DELLA SCRITTA DEL VINCITORE
  document.getElementById("risultato").innerHTML = "Hai Vinto !"
}else (numYouser == numRandom)
  // STAMPA DELLA SCRITTA DEL VINCITORE
  document.getElementById("risultato").innerHTML = "Pareggio !"
