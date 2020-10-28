// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//1-=============================================
//1-Devo fare un array composto da 16 numeri casuali tra 1 e 100
//----------------------------------------
var arrayBombe = []; //qua ci vanno infilati 16 numeri casuali

var numeroRandom;  // questa rappresenta il singolo numero casuale da infilare nell' arrayBombe

//faccio un loop nel quale per 16 volte creo un numero casuale fra 1 e 100 che ricavo grazie alla funzione a fondo pagina e ad ogni giro lo pusho in questo array. alla fine del 16esimo giro con il console.log lo stampo in console
for (var i = 0; i < 16; i++) {
  numeroRandom = getRandom(100); //ogni giro creo un numero casuale con la funzione e lo identifico con la variabile numero random
  arrayBombe.push(numeroRandom); //ogni giro pusho nell'array il numeroRandom
}
//finiti i 16 giri, stampo l'array che ne è uscito fuori
console.log('La lista di numeri esplosivi è:', arrayBombe);

//manca la verifica che questi numeri non si ripetano!!!!!!!!!

//=========================================================




//2-===========================================
// le var che mi servono in questa seconda parte dell'esercizio le scrivo all'inizio, anche se le identifico in seguito mentre costruisco il loop, perchè se generali devono venire dichiarate prima del loop

var tentativo; //il singolo numero infilato nel parseintprompt dall'utente
var arrayTentativi = []; // composto da tutti i tentativi fatti dall'utente prima che finisca il loop (prima che esploda una bomba)

var punti = 0; //nella richiesta c'è da dichiarare quante volte l'utente ha inserito un numero che non è esploso. la sommatoria di queste volte è il punteggio finale. può essere al max 84 dato che ci sono 16 bombe ma il caso limite lo vedo in seguito. parto da 0 e non da '' perchè se sbaglio al primo tentativo non avrei un risultato valido a stampare

//devo chiedere all'utente una serie (loop (100-16=84)) di prompt chiedendo numeri tra 1 e 100

//costrusico un array con questi numeri che l'utente inserisce

//quando numero inserito == uno dei valori nell'array,
//printo la somma dei del numero di inserimenti

for (var i = 0; i < 84; i++) {
  //con parseint e prompt chiedo al giocatore un numero fra 1 e 100
  tentativo = parseInt(prompt('Inserisci un numero da 1 a 100'));

  //  https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  //struttura utilizzo indexOf
  //arr[nome dell'array nel quale stiamo "cercando"].indexOf[metodo che usiamo per sapere il numero un elemento dell'arrey, se mi da -1, vuol dire che non è presente](elem[elem indica l'elemento che sto cercando nell'array])
  if (arrayBombe.indexOf(tentativo) !== -1) {
    console.log('Sei esploso!');
    i = 84;

  } else {
    punti++;
    console.log('Sei sopravvissuto!');
  }

  arrayTentativi.push(tentativo);

}

console.log('Hai provato questi numeri e ti è andata bene: ', arrayTentativi);

//================== stampo il punteggio finale, composto dalla sommatoria delle volte che non sono morto
console.log('Sei sopravvissuto ', punti,' volte!');





//funzioni generiche:
//mi serve funzione per generare 16 numeri casuali fra 1 e 100

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}
