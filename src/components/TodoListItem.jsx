import React from 'react';

export default function TodoListItem({listItem, todoList, setTodoList}) {

    const itemNameClass = "gap border ctn-between";

    const itemStyle = {
        position: 'relative',
    }

    const deleteTodoItem = () => {
        setTodoList(todoList.filter(item => item.id !== listItem.id));
    }

    return(
        <li style={itemStyle} className={itemNameClass}>
            <span className="item-time">{listItem.date}</span>
            <p className="item-name">{listItem.name}</p>
            <button className="btn-delete" onClick={deleteTodoItem}>Done</button>
        </li>
    )
}
