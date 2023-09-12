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
// 1. Creo due variabili per il numero estratto dai due giocatori (numPlayer, numPC), e una per il messaggio
let numPC, numUser, messageDices;

// 2. Creo un bottone che sarà la mia funzione di generazione numero
const buttonDices = document.getElementById('button-dices');
buttonDices.addEventListener('click', function(){

  numPC = Math.ceil(Math.random() * 6 );
  console.log(numPC);

  numUser = Math.ceil(Math.random() * 6 );
  console.log(numUser);

  document.getElementById('output-dices-message').innerHTML = `
  Il computer ha tirato ${numPC}, tu hai tirato ${numUser}, quindi il vincitore è ...
  `;

});


// 3. Creo la funzione di generazione random da 1 a 6

// 4. Definisco la funzione nella variabile dei numeri estratti dai due giocatori

// 5. Verifico i due numeri estratti
if (numPC = numUser) {

}