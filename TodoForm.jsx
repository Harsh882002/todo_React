import { useState } from "react";
import "./Todo.css";

export const TodoForm = ({onAddTodo}) =>{
    const [InputValue, setInputValue] = useState({});

   
    const handleChange = (value) => {
        setInputValue({id: value, content: value, checked: false}); 
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(InputValue); 
        setInputValue({id:"", content:"",checked: false})
    }
    return(
    <section>
    <form onSubmit={handleFormSubmit} >
        <div>
            <input type="text" className="todo-input" autoComplete="off"
            
                value={InputValue.content}
                onChange={(event) => { handleChange(event.target.value) }}  
            />

        </div>

        <div>
            <button type="submit" className="todo-button" >Add Task</button>
        </div>
    </form>
</section>
    )
}