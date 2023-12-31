/****************
  CONTROLLO MAIL
****************/
// 1. Creo un array(lista) delle email registrate

const emailRegistered = ['tutor@boolean.it'];
const outputMails = document.getElementById('output-mails');


// 2. Creo un input dove chiedo la mail dell'utente

// 3. Creo una variabile per l'email dell'utente e una per il successivo messaggio di esito
let emailUser, message;


// 4. Verifico se l'email inserita dall'utente è presente nella lista delle email registate
let emailVerify = false;

// 5. Creo un pulsante che mi faccia partire la verifica
const buttonMails = document.getElementById('button-emails');

buttonMails.addEventListener('click', function(){
  
  emailUser = document.getElementById('email-user-id').value;

  // Definisco il flag per la validazione dell'email inserita dall'utente
  let emailFlag = emailUser.includes('@' + '.');
  
  if (!emailFlag) {

    message = 'Inserisci un\'email valida';

  } else if (emailUser == "") {

    //Se il campo viene lasciato vuoto, stampa un relativo messaggio
    alert('Non lasciare il campo vuoto');
    message = 'Non lasciare il campo vuoto';

  } else if (emailRegistered.includes(emailUser)) {

    // 6. Se è presente: lo lascio entrare e stampo il relativo messaggio
    message = 'Puoi entrare';
    emailVerify = true;
  
  } else {
  
    // 7. Se non è presente: non lo lascio entrare e stampo il relativo messaggio
    message = 'Non sei stato invitato';
    emailVerify = false;
  }

  outputMails.innerHTML = message;
});



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

  const rollingDices = new Audio('../src/audio/dice-142528.mp3');
  rollingDices.play();

  numPC = Math.ceil(Math.random() * 6 );

  numUser = Math.ceil(Math.random() * 6 );

  document.querySelector('.rolled-dices').classList.remove('d-none')

  // 4. Verifico i due numeri estratti
  // 5. Se i numeri estratti sono uguali tira di nuovo
  

  if (numPC === numUser) {

    messageWinnerDices = 'avete pareggiato. Incredibile!';
  
  // 6. Se uno è maggiore dell'altro, stampa il nome del vincitore
  } else if (numPC > numUser) {

    messageWinnerDices = 'il vincitore è il PC.';

  } else {
    messageWinnerDices = 'il vincitore sei tu!';
    
  }

  // Stampo i messaggi nel DOM
  outputDices.innerHTML = `
  Il computer ha tirato ${numPC}, tu hai tirato ${numUser}, quindi ${messageWinnerDices}
  `;

  const outputPcDice = document.getElementById('output-pc-dice');
  outputPcDice.innerHTML = numPC;

  const outputPcUser = document.getElementById('output-user-dice');
  outputPcUser.innerHTML = numUser;

});
