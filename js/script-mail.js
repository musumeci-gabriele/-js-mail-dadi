// Chiedi all’utente la sua email,controlla che sia nella lista di chi può accedere,stampa un messaggio appropriato sull’esito del controllo.

// CREO LA LISTA DI EMAIL
var emails = ["gino@hotmail.com", "bau@hotmail.com"];

// CHIEDO ALL'UTENTE LA SUA EMAIKL
var emailUtente = prompt("insersci la tua email :");

for( var i = 0; i < emails.length; i++) {
  if (emails[i]== emailUtente) {
    console.log("trovata");
  }
  else {
    console.log("non trovata")
  }
}
if (true) {

}
