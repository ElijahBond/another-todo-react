import TodoListItem from "./TodoListItem";

const TodoList = ({ data }) => {

    const listItems = data.map((item) => {
        return (
            <li>
                <TodoListItem {...item} />
            </li>
        );
    });

    return (
        <ul>
            {listItems}
        </ul>
    );
};

export default TodoList;