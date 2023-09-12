/*
CONTROLLO MAIL
*/
// 1. Creo un array(lista) delle email registrate

const emailRegistered = ['pippo', 'pluto', 'paperino'];

// 2. Creo un input dove chiedo la mail dell'utente

// 3. Creo una variabile per l'email dell'utente e una per il successivo messaggio di esito
let emailUser, message;


// 4. Verifico se l'email inserita dall'utente è presente nella lista delle email registate

let emailVerify = false;

emailUser = 'pippo'

if (emailRegistered.includes(emailUser)) {

  message = 'Puoi entrare';
  emailVerify = true;
} else {
  message = 'Non sei stato invitato';
}

console.log(message)