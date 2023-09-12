/****************
  CONTROLLO MAIL
****************/
// 1. Creo un array(lista) delle email registrate

const emailRegistered = ['tutor@boolean.it'];

// 2. Creo un input dove chiedo la mail dell'utente

// 3. Creo una variabile per l'email dell'utente e una per il successivo messaggio di esito
let emailUser, message;


// 4. Verifico se l'email inserita dall'utente è presente nella lista delle email registate

let emailVerify = false;

// 4bis. Creo un pulsante che mi faccia partire la verifica
const buttonMails = document.getElementById('button-emails');

buttonMails.addEventListener('click', function(){
  emailUser = document.getElementById('email-user-id').value;
  
  console.log(emailUser)

});




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
// 1. Creo due variabili per il numero estratto dai due giocatori (numPlayer, numPC), e una per il messaggio
let numPC, numUser, messageWinnerDices;
const outputDices = document.getElementById('output-dices-message');

// 2. Creo un bottone che sarà la mia funzione di generazione numero
const buttonDices = document.getElementById('button-dices');

// 3. Creo la funzione di generazione random da 1 a 6
buttonDices.addEventListener('click', function(){
  numPC = Math.ceil(Math.random() * 6 );

  numUser = Math.ceil(Math.random() * 6 );

  // 4. Verifico i due numeri estratti
  // 5. se i numeri estratti sono uguali tira di nuovo
  if (numPC === numUser) {

    numPC = Math.ceil(Math.random() * 6 );

    numUser = Math.ceil(Math.random() * 6 );
  
  // 6. Se uno è maggiore dell'altro, stampa il nome del vincitore
  } else if (numPC > numUser) {

    messageWinnerDices = ' è il PC.';

  } else {
    messageWinnerDices = ' sei tu!'
  }


  outputDices.innerHTML = `
  Il computer ha tirato ${numPC}, tu hai tirato ${numUser}, quindi il vincitore ${messageWinnerDices}
  `;

});
