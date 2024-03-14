import { useState } from "react";
import { MyCustomInput } from "./MyCustomInput";

interface Person {
    readonly name: string,
    readonly surname: string
}

export function PersonInput(props: {
    // readonly onSave: (name: string, surname: string) => void
    readonly onSave: (person: Person) => void
}) {
    const [person, setPerson] = useState<Person>({
        name: '',
        surname: ''
    });
    // const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');

    const { onSave } = props;
    return <>
        <MyCustomInput required={true} label="Name" onChange={text => {
            // setName(text);

            const newPerson: Person = {
                ...person,
                name: text,
            }
            setPerson(newPerson);
        }}/>
        <MyCustomInput required={true} label="Surname" onChange={text => {
            // setSurname(text);

            const newPerson: Person = {
                ...person,
                surname: text
            }
            setPerson(newPerson);
        }}/>
        <button onClick={ () => {
            // onSave(name, surname);
            onSave(person);
        }}>Save</button>
    </>
}