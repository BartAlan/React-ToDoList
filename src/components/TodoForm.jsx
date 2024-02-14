import React from 'react';
import { nanoid } from 'nanoid';

export default function TodoForm({todo, setTodo, todoList, setTodoList}) {

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name: todo, date: new Date().toLocaleString(), id: nanoid()}]);
        setTodo("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className='group-input'>
                <input type="text" value={todo} onChange={handleChange} required/>
                <button type="submit" onChange={handleSubmit}>Add</button>
            </div>
        </form>
    )
}
