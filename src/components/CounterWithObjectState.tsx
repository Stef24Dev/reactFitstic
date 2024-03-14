import { useState } from "react";
import Display from "./Display";

interface State {
  readonly value: number
};

export default function CounterWithObjectState() {
    const [state, setState] = useState<State>({ value: 0 });//apriamo le graffe perche e un oggetto
    console.log('CounterWithObjectState()', state);

    return <>
        <Display n={state.value} color='blue' obj={{ x: 1, y: 2}}/>
        <button onClick={() => {
          // Riutilizzi l'oggetto che ti intressa e sovrascrivi solo la prop che ti interessa, mentre le altre rimangono uguali
          const newState: State = { 
            ...state,
            value: state.value + 1
          };
          // Gli passo un nuovo oggetto per fargli notare che io punto a un altra area di memoria
          setState(newState);
          console.log('click! newState: ', state.value);
          }}>Aumenta</button>
          {state.value > 5 && <div>Attenzione! valore maggiore di 5</div>}
    </>
}