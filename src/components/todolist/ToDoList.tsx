import { useState } from "react";
import { ListItemAdder } from "./ListItemAdder";
import { Task } from "./Models/task";
import { ToDoListItem } from "./ToDoListItem";

export function ToDoList() {
    const [task, setTask] = useState<Task[]>([]);
    
    return <>
        <h1>ToDo List Application</h1>
        <ListItemAdder onSave={(todo) => {
            const taskArray = [...task, todo];
            setTask(taskArray);
            // task.concat(todo) volendo per aggiungere
        }}/>

        {task.map((item, index)=>  <ToDoListItem index={index} task={item} elimina={(indexToRemove) => {
            setTask(task.filter((listItem, index) => index !== indexToRemove))
        }}/>)}
    </>
}