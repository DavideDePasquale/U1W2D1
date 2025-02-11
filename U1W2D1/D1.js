/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/// Ci sono diversi datatype in Javascript e sono : datatype "number" (indicano un numero), "boolean" (indicano se una determinata condizione è vera o falsa),
 // 'Null' (quando il valore è nullo, deciso dallo sviluppatore), "undefined" (quando il valore non è definito) e "String" (sono stringhe di valori letterali).

/* Ci sono diversi datatype in Javascript e sono : datatype "number" (indicano un numero), "boolean" (indicano se una determinata condizione è vera o falsa),
 'Null' (quando il valore è nullo), "undefined" (quando il valore non è stato definito). */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName=("Davide");
console.log("Ciao! Mi chiamo", myName);



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=12;
let num2=20;
let num3= num1 + num2;
console.log("Somma dei due numeri", num3);




/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
x=12;
console.log("variabile x", x)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Non si può modificare una variabile const. */
{ const myName="De Pasquale";
}
console.log("il mio nome è", myName);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
x= 4-x;
console.log("x aggiornata", x)




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */
name1="john";
name2="John";
console.log("name1 === name2", name1 === name2); //false
console.log("name1 != name2", name1 != name2);  //true

