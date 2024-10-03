import { MdDelete, MdFileDownloadDone } from "react-icons/md";
import "./Todo.css";

export const TodoList = ({ key,data,handleDeleteList}) =>{
    return (
        <li key={key}  className='todo-item'>
            <span className='item-text'>{data}</span>
            <button className='check-btn'>
                <MdFileDownloadDone />
            </button>

            <button className='delete-btn' onClick={() => handleDeleteList(data)}>
                <MdDelete />

            </button>
        </li>
    )
}