import { MdDelete, MdFileDownloadDone } from "react-icons/md";
import "./Todo.css";

export const TodoList = ({data,
    checked, 
    handleDeleteList,
    onHandleCheckedTodo
}) =>{
    return (
        <li className='todo-item'>
           {/* <span className="item-text" >{data}</span> */}

            <span className={checked ? "checklist" : "notCheckList"} >{data}</span>
            <button className='check-btn' onClick={() => onHandleCheckedTodo(data)}>
                <MdFileDownloadDone />
            </button>

            <button className='delete-btn' onClick={() => handleDeleteList(data)}>
                <MdDelete />

            </button>
        </li>
    )
}