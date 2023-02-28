import React, { Component } from "react";

import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";

import './app.css';
import ItemStatusFilter from "./ItemStatusFilter";

class App extends Component {
    state = {
        todoData: [
            { text: 'Keep calm', important: false, key: 1},
            { text: 'Drink Coffee', important: false, key: 2},
            { text: 'Build App', important: true, key: 3},
        ]
    };
    
    deleteItem = (key) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.key === key);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1)
            const newArray = [...before, ...after]

            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
    
                <TodoList data={this.state.todoData}
                onDeleted={ this.deleteItem } />
            </div>
        )
    }
}

// const App = () => {

//     const todoData = [
//         { text: 'Keep calm', important: false, key: 1},
//         { text: 'Drink Coffee', important: false, key: 2},
//         { text: 'Build App', important: true, key: 3},
//     ];

//     return (
//         <div className="todo-app">
//             <AppHeader toDo={1} done={3} />
//             <div className="top-panel d-flex">
//                 <SearchPanel />
//                 <ItemStatusFilter />
//             </div>

//             <TodoList data={todoData}
//             onDeleted={ (id) => console.log('del', id)} />
//         </div>
//     )
// };

export default App;