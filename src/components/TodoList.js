import TodoListItem from "./TodoListItem";

import './todoList.css'

const TodoList = ({ data }) => {

    const listItems = data.map((item) => {
        const { key, ...itemProps} = item;

        return (
            <li key={key} className='list-group-item'>
                <TodoListItem {...itemProps} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {listItems}
        </ul>
    );
};

export default TodoList;