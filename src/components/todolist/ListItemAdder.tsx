import { useState } from "react"
import { Task } from "./Models/task"

export function ListItemAdder(props: {
    readonly onSave: (todo: Task) => void
}) {
    const { onSave } = props;
    const [text, setText] = useState('');

    return <>
        <input type="text" placeholder="insert task" value={text} onChange={ ev => {
            setText(ev.target.value);
        }}/>
        <button onClick={ () => {
            const newTask: Task = {
                body: text,
                data: Date.now()
            }
            onSave(newTask);
            setText('');
        }}>Send</button>
    </>
}