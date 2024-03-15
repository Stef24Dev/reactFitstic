import { Task } from "./Models/task"

export function ToDoListItem(props: {
    readonly task: Task,
    readonly index: number,
    readonly elimina: (index: number) => void
}) {
    const { task, index, elimina } = props;
    return <>
        <div>
            <label key={index}>{index+1} {task.body}</label>
            <button onClick={() => elimina(index)}>X</button>
        </div>
    </>
}