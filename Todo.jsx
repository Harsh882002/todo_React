import { useEffect, useState } from 'react';
import './Todo.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';

export const Todo = () => {
    const [task, setTask] = useState([]);

    const handleFormSubmit = (InputValue) => {
        const { id, content, checked } = InputValue;

        if (!content) return;

        // to check data is already present or not 
        // if (task.includes(InputVal ue)) return;

        const ifTodoContentMached = task.find(
            (curTask) => curTask.content === content
        );
        if (ifTodoContentMached) return;

        setTask((prevTask) => [...prevTask, {id, content, checked}]);
    };

    //delete todo 
    const handledeltetodo = (value) => {
        console.log(task);
        console.log(value);

        const updatedTask = task.filter((curTask) => curTask.content !== value);
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
                <TodoDate />
            </div>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section>
                <ul className='myUnorderList'>
                    {task.map((curTask) => {
                        return <TodoList 
                        key={curTask.id} 
                        data={curTask.content} 
                        handleDeleteList={handledeltetodo} />
                    })}
                </ul>
            </section>
        </section>
    )
}