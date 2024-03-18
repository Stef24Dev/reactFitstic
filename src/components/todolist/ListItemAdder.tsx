import { useState } from "react"
import { Task } from "./Models/task"
import styles from "./ListItemAdder.module.scss";
import { UserOutlined } from "@ant-design/icons"
import { Button, Input } from "antd";

export function ListItemAdder(props: {
    readonly onSave: (todo: Task) => void
}) {
    const { onSave } = props;
    const [text, setText] = useState('');

    // return <>
    //     <input type="text" placeholder="insert task" value={text} onChange={ ev => {
    //         setText(ev.target.value);
    //     }}/>
    //     <button onClick={ () => {
    //         const newTask: Task = {
    //             body: text,
    //             data: Date.now()
    //         }
    //         onSave(newTask);
    //         setText('');
    //     }}>Send</button>
    // </>

    return <div className={styles.listItemAdder}>
        <Input size="large" value={text} placeholder="large size" prefix={<UserOutlined />} onChange={ev => setText(ev.target.value)} />
        <Button type="primary" onClick={() => {
            const newTask: Task = {
            body: text,
            data: Date.now()
            }
            onSave(newTask);
            setText("");
        }}>Aggiungi</Button>
    </div>
}