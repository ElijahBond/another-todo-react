import TodoListItem from "./TodoListItem";

import './todoList.css'

const TodoList = ({ data, onDeleted }) => {

    const listItems = data.map((item) => {
        const { key, ...itemProps} = item;

        return (
            <li key={key} className='list-group-item'>
                <TodoListItem 
                    {...itemProps}
                    onDeleted={() => onDeleted(key)} />
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