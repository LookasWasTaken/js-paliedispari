/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

// Creo un prompt che chieda all'utente di inserire una parola

const wordUser = prompt("Inserisci una parola");

// Creo una funzione che mi permetta di controllare e verificare se le lettere nella posizione corrispondente all'interno del parametro passato siano uguali tra loro (se sono nella stessa posizione)

function isPalindrome(word) {
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

const result = isPalindrome(wordUser);
console.log(result);

// ########################################################

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

