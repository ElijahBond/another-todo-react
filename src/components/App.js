import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";

const App = () => {

    const todoData = [
        { text: 'Keep calm', important: false},
        { text: 'Drink Coffee', important: false},
        { text: 'Build App', important: true},
    ];

    return (
        <div>
            <h1>My Todo List</h1>
            <SearchPanel />
            <TodoList data={todoData} />
        </div>
    )
};

export default App;