import { useEffect, useState } from 'react';
import { MdFileDownloadDone, MdDelete } from "react-icons/md";

import './Todo.css';
export const Todo = () => {

    const [InputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

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


    //Time code
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const forMattedDate = now.toLocaleDateString();
            const forMattedTime = now.toLocaleTimeString();

            setDateTime(`${forMattedDate} - ${forMattedTime}`);
        }, 1000)
        return () => clearInterval(interval);
    }, []);



    return (

        <section className='todo-container'>
            <header>
                <h1 className='todo-header'>Todo List</h1>
            </header>

            <div>
                <h1 className='date'>{dateTime}</h1>
            </div>

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
                                <span className='item-text'>{curTask}</span>
                                <button className='check-btn'>
                                    <MdFileDownloadDone />
                                </button>

                                <button className='delete-btn'>
                                    <MdDelete />

                                </button>
                            </li>
                        )
                    })}
                </ul>

            </section>
        </section>
    )
}