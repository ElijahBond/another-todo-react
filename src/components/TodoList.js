import TodoListItem from "./TodoListItem";

import './todoList.css'

const TodoList = ({ data, onDeleted, onToggleImportant1, onToggleDone1 }) => {

    const listItems = data.map((item) => {
        const { key, ...itemProps} = item;

    

        return (
            <li key={key} className='list-group-item'>
                <TodoListItem 
                    {...itemProps}
                    onDeleted={() => onDeleted(key)}
                    onToggleImportant2={() => onToggleImportant1(key)}
                    onToggleDone2={() => onToggleDone1(key)} />
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