
const itemNameClass = "row gap border ctn-between";

const itemNameStyle = {
    fontWeight: "bold",
    textTransform: "uppercase",
}

const btnDeleteStyle = {
    all: "unset",
    cursor: 'pointer',
    color: "red",
    fontWeight: 'bold',
}

function TodoListItem({listItem, todoList, setTodoList}) {

    const deleteTodoItem = () => {
        setTodoList(todoList.filter(item => item.id !== listItem.id));
    }

    return(
        <li className={itemNameClass}>
            <p style={itemNameStyle}>{listItem.name}</p>
            <button style={btnDeleteStyle} onClick={deleteTodoItem}>Done</button>
        </li>
    )
}

export default TodoListItem;