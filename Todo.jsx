import { useState } from 'react';
import { MdFileDownloadDone ,MdDeleteForever  } from "react-icons/md";

import './Todo.css';
export const Todo = () => {

    const [InputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleChange = (event) => {
        setInputValue(event)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!InputValue) return;

        if (task.includes(InputValue)) {
            setInputValue(" ");
            return;
        }

        setTask((prevTask) => [...prevTask, InputValue]);

        setInputValue(" ");
    }

    return (

        <section className='todo-container'>
            <header>
                <h1 className='todo-header'>Todo List</h1>
            </header>


            <section>
                <form onSubmit={handleFormSubmit} >
                    <div>
                        <input type="text" className="todo-input" autoComplete="off"
                            value={InputValue}
                            onChange={(event) => { handleChange(event.target.value) }}
                        />

                    </div>

                    <div>
                        <button type="submit" className="todo-button" >Add Task</button>
                    </div>
                </form>
            </section>

            <section>

                <ul className='myUnorderList'>
                    {task.map((curTask, index) => {
                        return (
                            <li key={index} className='todo-item'>
                                <span>{curTask}</span>
                                <button className='check-btn'>
                                <MdFileDownloadDone />

                                </button>

                                <button className='delete-btn'>
                                <MdDeleteForever />
                                </button>
                            </li>
                        )
                    })}
                </ul>

            </section>
        </section>
    )
}