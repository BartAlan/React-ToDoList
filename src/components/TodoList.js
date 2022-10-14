import TodoListItem from "./TodoListItem";

function TodoList({todoList, setTodoList}) {

    return (
        <div className='container'>
            <ul className='list-group column gap'>
                {todoList.map((listItem) => (
                    <TodoListItem className='list-group-item'
                    todoList={todoList}
                    setTodoList={setTodoList}
                    listItem={listItem}
                    key={listItem.id}
                    name={listItem.name} />
                ))}
            </ul>
        </div>
    )
} 

export default TodoList;