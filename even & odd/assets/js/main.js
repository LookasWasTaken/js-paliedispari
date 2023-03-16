/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// faccio scegliere all'utente pari o dispari

//dichiaro una variabile choose vuota e una variabile inputOk con valore booleano true per andarla a verificare nel ciclo while

let choose;

let inputOk = true;

while (inputOk) {
  choose = prompt("Scegli pari o dispari:");
  if (choose === "pari" || choose === "dispari") {
    console.log(choose, "parola corretta");
    inputOk = false;

    // modifico la variabile inputOk solo se l'utente ha inserito un valore corrispondente a "pari o "dispari"
  } else {
    alert("Inserisci solo 'pari' o 'dispari'");
    console.log(choose, "parola errata");

    // altrimenti riceverà un messaggio di errore
  }
}

// faccio inserire all'utente un numero da 1 a 5

let userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber, "Primo Numero inserito");

// tramite un ciclo while eseguo un controllo per far inserire solamente numeri tra 1 e 5, in caso non venga inserito un numero tra questi rimanda un alert di errore e riproponi il prompt nuovamente

while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
  alert("Il numero inserito non è valido");
  userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
  console.log(userNumber, "Numero Successivamente inserito");
}

// Genero un numero random per il pc all'interno di una funzione senza passarci alcun parametro

function generateRandom() {
  // dato che una funzione deve avere sempre un return per uscire fuori, lo inserisco all'inizio del mio calcolo math. Il Math in questo caso sarà

  return Math.floor(Math.random() * 5 + 1);
}

const pcNumber = generateRandom();
console.log(pcNumber, "Numero del PC Random");

// Sommo i due numeri dati dall'input dell'utente e dal random del computer e stabilisco se la somma è pari o dispari usando una funzione

const sum = userNumber + pcNumber;
console.log(sum, "Somma da valutare");

// Qui la funzione "even" per decidere se il numero è pari, attribuendo al % nel caso il resto fosse 0 il valore "true" e di conseguenza se così non fosse il valore sarebbe "false", nel nostro caso quindi dispari

function even(number) {
  return number % 2 === 0;
}

// Con l'operatore ternario mi controllo se il risultato sarà pari o dispari. Variabile "result" = alla funzione "even" (dove devo passare il parametro -number- che in questo caso sarà la variabile "sum"). Quindi chiedo se è vero (?) allora sarà pari sennò (:) sarà falso e quindi dispari

const result = even(sum) ? "pari" : "dispari";
console.log(`Il ${sum} è un numero`, result);

// Appendo il risultato all'h1 nel mio index.html selezionandolo con un queryselector e successivamente un insertadjacentHTML prima della fine con un template literal

const onScreen = document.querySelector("h1");
onScreen.insertAdjacentHTML("beforeend", `Il ${sum} è un numero ${result}`);


// Curiosità: il risultato dato tramite una macchina su dei valori da 1 a 5 nel gioco del pari e dispari, favorirà SEMPRE la probabilità di generare un numero dispari