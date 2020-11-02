// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
//
// oppure gestisco qualche caso limite (es.: se utente non inserisce numeri?.. etc.)



// Per i casi limite:
// -utente inserisce numero fuori da 1/100
// -utente inserisce un numero uguale a uno gia Inserito
// -utente inserisce un non numeroRandom
// Già fatto nelle condizioni dell'esercizio normale.







var arrayBombe = [];
var numeroRandom;

while (arrayBombe.length < 16) {
  numeroRandom = getRandom(100);
  if (arrayBombe.indexOf(numeroRandom) === -1) {
    arrayBombe.push(numeroRandom);
  }
}

arrayBombe.sort(compareNumbers);

console.log('arrayBombe è composto dai seguenti numeri, unici tra loro:', arrayBombe);
//=========================================================

//2-===========================================

var arrayTentativi = [];
var appoggio = false;

//condizione iniziale è che i tentativi validi siano < 84 volte e che var di appoggio sia falsa
while (arrayTentativi.length < 84 && appoggio == false) {
  var tentativo = parseInt(prompt('Inserisci un numero da 1 a 100'));
  console.log('Inserito il numero: ', tentativo);

  //condizioni:
  //il gioco termina se l'utente prova due volte lo stesso numero
  if (arrayTentativi.includes(tentativo)) {
    alert('Hai inserito due volte lo stesso numero, quindi hai perso!');
    console.log('Hai inserito due volte lo stesso numero, quindi hai perso!');
    appoggio = true;

  // se utente mette un numero non compreso tra 1 e 100 gli si chiede di metterne un altro
  } else if ((tentativo < 1) || (tentativo > 100)) {
    alert('hai inserito un numero non valido. Riprova con un altro tra 1 e 100');
    console.log('hai inserito un numero non valido, il:', tentativo,'che è inferiore a 1 o superiore a 100. Ti permettiamo di continuare a giocare ma fai attenzione!');

  // se utente usa caratteri non numerici gli chiedo di riprovare
  } else if (isNaN(tentativo)) {
    alert('Usa solo numeri!')
    console.log('Devi inserire un numero, non usare lettere o simboli!');

  // se non succedono queste condizioni qua sopra allora si va al gico vero e proprio
  } else {
    //il tentativo dell'utente corrisponde a uno dei numeri random bombe. si perde
    if (arrayBombe.includes(tentativo)) {
      alert('Hai perso!')
      console.log('Mi dispiace hai perso, prendendo una mina al seguente numero: ' + tentativo);
      appoggio = true;
    } else {
      //il numero inserito è valido e non è un numero bomba, quindi lo accetto e aggiungo all'array dei tentativi validi
      arrayTentativi.push(tentativo);
      console.log(tentativo, ' accettato ed aggiunto alla lista dei tentativi validi, ',arrayTentativi);

      var punti = arrayTentativi.length;

    }
  }
}
console.log('Sei sopravvissuto ', punti,' volte prima di perdere');






//funzioni generiche:

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

function compareNumbers(a, b) {
  return a - b;
}
