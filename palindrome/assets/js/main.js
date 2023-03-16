/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

// Creo un prompt che chieda all'utente di inserire una parola

const wordUser = prompt("Inserisci una parola");

// Creo una funzione che mi permetta di controllare e verificare se le lettere nella posizione corrispondente all'interno del parametro passato siano uguali tra loro (se sono nella stessa posizione)

function checker(word) {
  // lunghezza della parola = parola.lunghezza

  const wordLength = word.length;

  // ciclo for per calcolare se index è minore di lunghezza della parola diviso 2

  for (let i = 0; i < wordLength / 2; i++) {
    // if per verificare se la parola[che sta al numero dell'index] è diversa (!==) dalla parola che sta al numero dell'index dato dall'operazione di Lunghezza della parola -1(che sarebbe per contare la lunghezza massima della parola) - numero dell'index e faccio un return con un template literal dove dico che la parola non è palindroma

    if (word[i] !== word[wordLength - 1 - i]) {
      return `La parola ${word} non è palindroma`;
    }
  }

  // sennò, se la parola[che sta al numero dell'index] non è diversa dalla parola che sta al numero dell'index dato dall'operazione di Lunghezza della parola -1(che sarebbe per contare la lunghezza massima della parola) - numero dell'index faccio un return con un template literal dove dico che la parola è palindroma

  return `La parola ${word} è palindroma`;
}

// mi salvo il risultato della funzione isPalindrome con il parametro passato all'interno che sarà ciò che ho salvato dal prompt wordUser e mi stampo il console.log

const result = checker(wordUser);
console.log(result);

// seleziono l'h1 nel mio index.html e gli aggiungo tramite *.insertAdjacentHTML("primadellafinedeltag", la const result)

const onScreen = document.querySelector("h1");
onScreen.insertAdjacentHTML("beforeend", result);

// #############################################################

// Ad onor del vero, bisogna dire che a questa soluzione ci sono arrivato googlando "How can I check if a word is palindrome?"

// La mia idea iniziale, letteralmente il mio primo approccio, è stato quello di trovare se ci fosse un modo per invertire la parola (per capirci: da Luca ad acuL) e fare un controllo if(Luca === acuL) ? "è palindroma" : "non è palindroma" e cavarmela così. 

// Si, il modo c'è, bisogna convertire più volte la stringa in altro: prima in un array di stringhe, poi fargli un reverse ed infine convertirlo nuovamente

// Il tutto viene spiegato all'interno di questo sito ( https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/#1-check-for-palindromes-with-built-in-functions ) ( è già linkato all'ID dove viene descritta questa cosa)

// A me personalmente sembrava un po' strano, magari lo rivedrò più avanti, così ho cercato un altro modo. Quello che ho usato, ed ho provato a descrivervi.