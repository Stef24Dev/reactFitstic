export default { }

console.log('hello');

let i: number = 2;
let str: string = "hello";
let bool: boolean = false;

let array = [1, 2, 3,4];
let ciaone: number[] = [1,2,3,3];

enum WeekDays {
  MONDAY,
  TUESDAY,
  WEDNESNAY
}

let myDay: WeekDays = WeekDays.MONDAY;
let dayArray: WeekDays[] = [WeekDays.MONDAY, WeekDays.TUESDAY];

// Operazioni con Array

console.log(array);
array.push(5);
console.log(array);

let array2 = array.concat(6);
console.log(array);
console.log('new array', array2);

//array2.pop();funziona pero cambia array di partenza

//array2.slice();

const arrayImmutabile = [1,2,3];

//arrayImmutabile = [1,2]; non posso farlo perche e una costante
arrayImmutabile.push(4);  //posso modificarlo perche il puntamento rimane a quell'area di memoria

// Oggetti e strutture dati
let punto = {
  x: 3, 
  y:7
}
console.log(punto);

export interface Point {
  readonly x: number;
  readonly y: number;
  readonly z?: number;//opzionale, non il top per far esistere sia un tipo 2d che uno 3d
}

const mioPunto: Point = {
  x: 2,
  y: 3
};

//mioPunto = punto; posso solo se mioPunto e let
//mioPunto.x = 10; //posso perche non cambia l'area di memoria, 
  //ma sostituisce un valore dentro quell'area di memoria, 
  //a meno che non c'e scritto readonly nellinterfaccia

interface Point3d extends Point {//eredita da Point
  z: number;
}

const punto3d : Point3d = {
  x: 1,
  y: 2,
  z: 3
}

console.log(punto3d);

//definisco una funzione, esiste e puo essere richiamata perche vale in tutto lo scope in cui si trova
function sum(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(sum(1,2));

interface Sum {//definisco il tipo della somma, quali sono i numeri che aspetta e cosa restituisce
  (n1: number, n2: number): number;
}

//Arrow function, definisco la const e il suo tipo e funzione, non e disponibile questa funzione prima di questa riga
const sum2: Sum = (n1, n2) => {
  return n1 + n2;
}

const sum3: Sum = (n1, n2) => n1 + n2;

console.log(sum2(1,2));

interface PuntoConFunzione {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly sum: Sum;
}
//non e piu una struttura dati da passare tra client e server perche c'e una funzione e non ha senso

const mioPuntoConFunzione: PuntoConFunzione = {
  x: 2,
  y: 4,
  //sum: sum2 --> ok
  sum: (n1: number, n2: number) => {
    return n1 + n2;
  }
}

const { x, y, z} = punto3d;//estrae le proprieta dell'oggetto
console.log('x: ', x);

const punto3d2: Point3d = punto3d;//cosi non creo un nuovo oggetto, creo un nuovo puntamento allo stesso oggetto
console.log('Punti iniziali')
console.log(punto3d, punto3d2);
punto3d2.z = 20;
console.log('Punti finali')
console.log(punto3d, punto3d2);

console.log('Clonazione di un oggetto')

const punto3d3: Point3d = { ...punto3d};//lui prende tutte le proprieta che ci sono in quell'oggetto e le mette nel nuovo oggetto che stai creando (si capisce easy perche e tra le graffe il nostro oggetto)

console.log('Punti iniziali')
console.log(punto3d, punto3d3);
punto3d3.z = 2;
console.log('Punti finali')
console.log(punto3d, punto3d3);

//Funzioni che vengono usate nel paradigma funzionale

//MAP, esegue un operazione su tutti i membri di un array creandone uno nuovo
//mappa l'array di partenza a un altro array, che non e per forza dello stesso tipo
const ar1 = [1,2,3];
let risultato = ar1.map(item => item * 2);
console.log('arr', ar1);
console.log('risultato doppio', risultato);

//FILTER, esegue la funzione che gli dico, nel seconda array ci saranno gli oggetti solo se la condizione di verifica e passata
const ar2 = [1,2,3,4,5,6];
let risultato2 = ar2.filter(item => (item % 2) === 0);//tengo solo elementi pari
console.log('arr', ar2);
console.log('risultato con pari', risultato2);

//il punto interrogativo dice che nullable, mentre i ?? dicono che se il primo membro e null, allora da il valore dopo i punti interrogativi
let ciaones = ar1?.map(item => item * 2) ?? [];
