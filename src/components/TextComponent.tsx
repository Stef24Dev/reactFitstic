import { useState } from "react";

export function TextComponent() {
    // Stato che tiene il valore inputato dall'utente
    // Per ogni input in genere servono uno stato a input
    const [text, setText] = useState<string>('stef');
    const [password, setPassword] = useState<string>('');

    return <>
        <div>TextComponent</div>
        <div>Username: <input type="text" placeholder="Inserisci nome" value={text} onChange={(ev) => {
            //console.log(ev.target.value);
            // Cambio lo stato con il valore dentro l'input
            setText(ev.target.value);
        }}/>
        <button onClick={() => {
            setText('');
        } }>X</button>
        </div>
        <div>Password: <input type="text" onChange={(ev) => {
            setPassword(ev.target.value);
        }}/></div>
        <div>Username: {text}</div>
        <div>Password: {password}</div>
    </>
}