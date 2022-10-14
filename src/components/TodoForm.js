import { nanoid } from 'nanoid';

function TodoForm({todo, setTodo, todoList, setTodoList}) {

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name: todo, id: nanoid()}]);
        setTodo("");
    }

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='group-input'>
                    <input type="text" value={todo} onChange={handleChange} required/>
                    <button className='' type="submit" onChange={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;