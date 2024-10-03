import { useState } from "react";
import "./Todo.css";
import { TodoDate } from "./TodoDate";

export const TodoForm = ({onAddTodo}) =>{
    const [InputValue, setInputValue] = useState("");

   
    const handleChange = (value) => {
        setInputValue(value) 
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(InputValue); 
        setInputValue("")
    }
    return(
    <section>
    <form onSubmit={handleFormSubmit} >
        <div>
            <input type="text" className="todo-input" autoComplete="off"
            
                value={InputValue}
                onChange={(event) => { handleChange(event.target.value) }}
             
            />

        </div>
<TodoDate />
        <div>
            <button type="submit" className="todo-button" >Add Task</button>
        </div>
    </form>
</section>
    )
}