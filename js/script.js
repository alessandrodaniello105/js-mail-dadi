/****************
  CONTROLLO MAIL
****************/
// 1. Creo un array(lista) delle email registrate

const emailRegistered = ['pippo', 'pluto', 'paperino'];

// 2. Creo un input dove chiedo la mail dell'utente

// 3. Creo una variabile per l'email dell'utente e una per il successivo messaggio di esito
let emailUser, message;


// 4. Verifico se l'email inserita dall'utente è presente nella lista delle email registate

let emailVerify = false;

emailUser = 'pippo' //es. email inclusa in lista

if (emailRegistered.includes(emailUser)) {

  // 5. Se è presente: lo lascio entrare e stampo il relativo messaggio
  message = 'Puoi entrare';
  emailVerify = true;

} else {

  // 6. Se non è presente: non lo lascio entrare e stampo il relativo messaggio
  message = 'Non sei stato invitato';
  
}

console.log(message)


console.log('-------- DIVISIONE DA RIMUOVERE --------')


/****************
  GIOCO DADI
****************/

