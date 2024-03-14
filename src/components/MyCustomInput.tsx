import { useState } from "react"

export function MyCustomInput(props: {
    readonly required: boolean,
    readonly label: string,
    readonly onChange: (text: string) => void
    // Funzione che vuole un text in input e in output void che viene passata da App e quando 
}) {
    const {required, label, onChange} = props;// Spacchettiamo la nostra props
    const [text, setText] = useState<string>('');

    return <>
        <div>
            <div>
                <label>{label}{required === true && <span>* </span>}</label>
                <input type="text" value={text} onChange={ ev => {
                    setText(ev.target.value);
                    // Invocazione della callback, passa al genitore il valore
                    onChange(ev.target.value);
                }}/>
            </div>
            {text.length === 0 && required === true && <div>Campo Obbligatorio!</div>}
        </div>
    </>
}