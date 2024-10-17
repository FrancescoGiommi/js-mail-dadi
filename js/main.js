/* > Mail

Chiedi all'utente la sua email,
> controlla che sia nella lista di chi può accedere,
> stampa un messaggio appropriato sull'esito del controllo.*/

/* RACCOLTA DATI */

/* mail utente */
const userMail = "user@libero.it";

/* lista mail che possono accedere */
const mailListCanLog = [
  "user@libero.it",
  "mail@tiscali.it",
  "username@gmail.it",
  "ciao@icloud.it",
];

/* lista mail che non possono accedere */
const mailListCantLog = [
  "user@tiscali.it",
  "mail@libero.it",
  "username@icloud.it",
  "ciao@gmail.it",
];

/* PROCEDURA */

/* ELABORAZIONE */
/* chiedo all'utente la mail */
/*const emailRequest = prompt("Inserisci la tua email");*/

/* controllo che la mail sia nella lista delle mail che possono accedere */
/*for (let i = 0; i != emailRequest; i++) {
  if (emailRequest === mailListCanLog[i]) {
    alert("Questa mail può accedere");
    console.log("Questa mail può accedere");
  } else if (emailRequest === mailListCantLog[i]) {
    alert("Questa mail non può accedere");
    console.log("Questa mail non può accedere");
  }
}*/
/* se è nella lsita delle mail che possono accedere */

/* OUTPUT */

/*> Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
> Stabilire il vincitore, in base a chi fa il punteggio più alto.*/
/* RACCOLTA DATI */
let numPlayer = 0;
let numComputer = 0;

/* PROCEDURA */
/* ELABORAZIONE */
/* genero un numero random per entrambi*/
numPlayer = Math.round(Math.random() * 6);
numComputer = Math.round(Math.random() * 6);
console.log(numPlayer, numComputer);

/* controllo quale dei 2 numeri è maggiore */
if (numPlayer > numComputer) {
  alert(
    `Ha vinto il Giocatore perchè ${numPlayer} è maggiore di ${numComputer}`
  );
  console.log(
    `Ha vinto il Giocatore perchè ${numPlayer} è maggiore di ${numComputer}`
  );
} else if (numComputer > numPlayer) {
  alert(
    `Ha vinto il Computer perchè ${numComputer} è maggiore di ${numPlayer}`
  );
  console.log(
    `Ha vinto il Computer perchè ${numComputer} è maggiore di ${numPlayer}`
  );
} else if (numPlayer === numComputer) {
  alert(`Nessun vincitore perchè c'è un pareggio`);
  console.log(`Nessun vincitore perchè c'è un pareggio`);
}

/* OUTPUT */
/*Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/
