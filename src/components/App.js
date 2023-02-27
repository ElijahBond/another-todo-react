import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";

import './app.css';
import ItemStatusFilter from "./ItemStatusFilter";

const App = () => {

    const todoData = [
        { text: 'Keep calm', important: false, key: 1},
        { text: 'Drink Coffee', important: false, key: 2},
        { text: 'Build App', important: true, key: 3},
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList data={todoData} />
        </div>
    )
};

export default App;