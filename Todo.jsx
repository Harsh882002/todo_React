import { useEffect, useState } from 'react';
import './Todo.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export const Todo = () => {
    const [task, setTask] = useState([]);

    const handleFormSubmit = (InputValue) => {
        if (!InputValue) return;

        if (task.includes(InputValue)) return;

        setTask((prevTask) => [...prevTask, InputValue]);
    }

    //delete todo 
    const handledeltetodo = (value) => {
        console.log(task);
        console.log(value);

        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    }

    const handleClearAll = () => {
        setTask([]);
    }

    return (
        <section className='todo-container'>
            <header>
                <h1 className='todo-header'>Todo List</h1>
                <button className='clear-btn' onClick={handleClearAll}>ClearAll</button>

            </header>

            <div>
            </div>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section>
                <ul className='myUnorderList'>
                    {task.map((curTask, index) => {
                        return <TodoList key={index} data={curTask} handleDeleteList={handledeltetodo} />
                    })}
                </ul>
            </section>
        </section>
    )
}