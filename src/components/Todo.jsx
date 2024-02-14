import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const itemMargin = {
        marginTop: '8px'
    }

    return(
        <div id="form" className="container">
            <div className='ctn-center'>
                <h2>TODO LIST</h2>
                <TodoForm 
                    todo={todo}
                    setTodo={setTodo}
                    todoList={todoList}
                    setTodoList={setTodoList} />
                <p style={itemMargin}>{todoList.length <= 1 ? "There is "+todoList.length+" task" : "There are "+todoList.length+" tasks"}</p>
            </div>
            <TodoList 
                todoList={todoList}
                setTodoList={setTodoList} />
        </div>
    )
}
