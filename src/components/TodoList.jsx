import React from 'react';
import TodoListItem from "./TodoListItem";

export default function TodoList({todoList, setTodoList}) {

    return (
        <ul className='list-items gap'>
            {todoList.map((listItem) => (
                <TodoListItem className='list-group-item'
                    todoList={todoList}
                    setTodoList={setTodoList}
                    listItem={listItem}
                    key={listItem.id}
                    name={listItem.name} />
            ))}
        </ul>
    )
} 
