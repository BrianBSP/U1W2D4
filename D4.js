/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA:
function area(l1, l2) {
  const result = l1 * l2;
  return result;
}
console.log("L'area del mio rettangolo è:", area(2, 3)); */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA
function crazySum(num1, num2) {
  let result = num1 + num2; //avevo dichiarato la variabile const ma ho dovuto necessariamente cambiarla con let perché dentro l'if la variabile const mi da errore.
  if (num1 === num2) {
    result = num1 * 3;
    return result;
  } else {
    return result;
  }
}
console.log("La nostra somma è:", crazySum(2, 2));
 */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA:
function crazyDiff(num1, num2) {
  num2 = 19;
  let result = 0;
  if (num1 > num2) {
    result = num1 - num2;
    result = result * 3;
    console.log("La mia differenza:", Math.abs(-result));
  } else {
    result = num1 - num2;
    console.log("La mia differenza assoluta:", Math.abs(-result));
  }
}
crazyDiff(21, 3);

 */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA:

function boundary(n) {
  if (n >= 20 && n <= 100) {
    result = "true";
    return result;
    //console.log("True... Il numero assegnato è compreso tra 20 e 100.");
  } else if (n === 400) {
    result = "true";
    return result;
    //console.log("True... Il numero assegnato è", n);
  } else {
    result = "false";
    return result;
  }
}

console.log(boundary(25));
 */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA:

function epify(string) {
  if (string === "Epicode") {
    return string;
  } else {
    return "EPICODE " + string;
  }
}
console.log(epify("Brian"));

 */
let num1 = 7;

num1 = num1 % 3;

console.log(num1);
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA :

function check3and7(num) {
  let num1 = num % 3;
  let num2 = num % 7;

  if (num1 === 0 || num2 === 0) {
    return "il numero " + num + " è divisibile per 3 o per 7.";
  } else {
    return "Il numero non è un multiplo di 3 o 7";
  }
}
console.log(check3and7(21));

*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA :
function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("hello"));
*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(string) {
  return string.slice(1, -1);
}
console.log(cutString("Ciao mi chiamo Brian"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  let array = [n];
  for (let i = 0; i < array.length; i++) {
    num1 = Math.floor(Math.random() * 11);
    array[n] = num1;
    return array;
  }
}
console.log(giveMeRandom(25));

/* SCRIVI QUI LA TUA RISPOSTA */
