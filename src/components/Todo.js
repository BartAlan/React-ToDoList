import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    return(
        <div id="form" className="container">
            <div className='ctn-center'>
                <h2>Add TODO</h2>
                <TodoForm 
                todo={todo}
                setTodo={setTodo}
                todoList={todoList}
                setTodoList={setTodoList} />
            </div>
            <TodoList 
            todoList={todoList}
            setTodoList={setTodoList} />
        </div>
    )
}

export default Todo;