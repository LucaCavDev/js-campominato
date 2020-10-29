// Descrizione
//1========================================
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
//2==============================
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//1-=============================================
//1-Devo fare un array composto da 16 numeri casuali non ripetuti tra 1 e 100
//----------------------------------------
var arrayBombe = []; //qua ci vanno infilati 16 numeri casuali
var numeroRandom;  // queste sono le singole bombe

//faccio un loop che termina quando l'array diventa lungo 16
while (arrayBombe.length < 16) {
  //all'interno del loop genero un numero random tra 1 e 100 (vedi funzione a pie pagina)
  numeroRandom = getRandom(100);
  //pusho i numeri generati nell'array SE non sono gia presenti nell'array
  if (arrayBombe.indexOf(numeroRandom) === -1) {
    arrayBombe.push(numeroRandom);
  }
}

//riordino le bombe per facilità di lettura
arrayBombe.sort(compareNumbers);

//una volta inseriti 16 elementi nell'array il loop si ferma e lo stampo
console.log('arrayBombe è composto dai seguenti numeri, unici tra loro:', arrayBombe);
//=========================================================

//2-===========================================

//var geneneriche
var tentativo; //il singolo numero infilato nel parseintprompt dall'utente
var arrayTentativi = []; // array dei tentativi dall'utente prima che finisca il loop (prima che esploda una bomba)

// devo fare una richiesta all'utente tot volte ( 1 < tot < 84)
for (var i = 0; arrayTentativi.length < 84; i++) {
  // chiedo a utente ( per max 84 volte) di inserire un numero tra 1 e 100
  tentativo = parseInt(prompt('Inserisci un numero da 1 a 100'));
  console.log('proviamo il numero: ', tentativo);
  // var punti = 0;

  //se i numero inserito non è compreso fra 1 e 100 non lo accettiamo, ma facciamo riprovare
  if  ((tentativo < 1) || (tentativo > 100)) {
    alert('Attenzione inserire un numero compreso tra 1 e 100');
    console.log('hai inserito un numero non valido, il:', tentativo,'che è inferiore a 1 o superiore a 100. Ti permettiamo di continuare a giocare ma fai attenzione!');

  //Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua
  } else if (arrayTentativi.includes(tentativo)) {
    alert('Hai inserito due volte lo stesso numero, quindi hai perso!');
    //col break interrompo il ciclo prima delle 84 volte
    break;

  } else if (arrayBombe.includes(tentativo)) {
    console.log('Hai digitato il numero', tentativo, 'bomba, quindi hai perso!');
    //col break interrompo il ciclo prima delle 84 volte
    break;

  } else {
    arrayTentativi.push(tentativo);
  }
  //creo la variabile punti, che equivale alla somma dei tentativi validi(uso la lungezza dell'array dei tentativi validi)
  var punti = arrayTentativi.length;
}
//dichiaro quali numeri validi l'utente ha inserito durante la partita
console.log('In questa partita hai digitato questi numeri validi: ', arrayTentativi);

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log('Sei sopravvissuto ', punti,' volte prima di perdere');





//funzioni generiche:

//mi serve funzione per generare 16 numeri casuali fra 1 e 100
function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

//mi serve per riordinare
function compareNumbers(a, b) {
  return a - b;
}
