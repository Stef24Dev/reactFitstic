import { useEffect, useState } from "react";
import Display from "./Display";

export default function Counter(props: {
  readonly initialValue?: number
}) {
    const { initialValue = 0 } = props;
    
    //Definizione di uno stato, di tipo number, inizializzato a 0 (stato iniziale)
    //funzione restituisce una tupla, uno e la variabile che rappresenta lo stato, la seconda e una funzione che serve per modificare lo stato
    //app si ridisegna perche gli cambiamo lo stato
    //menter display si ridisegna perche cambia la prop che gli passiamo (che abbiamo cambiato cambaindo lo stato)
    const [contatore, setContatore] = useState(initialValue);
    console.log('Conuter()', contatore);

    /*funzione che vuole due argomenti in ingresso, primo che contiene il comportamento che vuoi avvenga, 
    secondo si chiama deps, array dove metti variabili di cui vuoi monitorare cambiamento
    si scatena quando almeno una delle dipendenza cambia (se dipendenza e per valore (tipi primitivi) basta cambiare il valore,
    mentre se e per riferimento (oggetti, array), dobbiamo cambiare puntamento all'area di memoria, non il contenuto)*/
    useEffect(() => {
      console.log('useEffect in action!', initialValue);
      setContatore(initialValue);
    }, [initialValue])

    return <>
        <Display n={contatore} color='blue' obj={{ x: 1, y: 2}}/>
        <button onClick={() => {
            console.log('click! contatore: ', contatore);
            contatore > 0 && setContatore(contatore - 1);
          }}>Diminuisci</button>
        <button onClick={() => {
            console.log('click! contatore: ', contatore);
            // setContatore(valCorrente => valCorrente + 2);
            // setContatore(valCorrente => valCorrente + 1); cosi e come fare +3, perche prende il valore corrente (0) e fa piu due e poi riprende valore corrente (2) e fa piu uno
            setContatore(contatore + 1);
          }}>Aumenta</button>
          {contatore > 5 && <div>Attenzione! valore maggiore di 5</div>}
    </>
}