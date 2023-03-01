import React, { Component } from "react";

import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";

import './app.css';
import ItemStatusFilter from "./ItemStatusFilter";
import AddItemForm from "./AddItemForm";

class App extends Component {

    maxId = 100;
    
    state = {
        todoData: [
            this.createTodoItem('Keep calm'),
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build App')
        ],
        term: ''
    };

    createTodoItem(text) {
        return {
            text,
            important: false,
            done: false,
            key: this.maxId++
        }
    }

    
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

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            
            return {
                todoData: [ ...todoData, newItem]
            }
        })
    }

    toggleProperty(arr, key, propName) {
        const idx = arr.findIndex((el) => el.key === key);

            const oldItem = arr[idx];
            const newItem = { ...oldItem, [propName]: !oldItem[propName]}

            const before = arr.slice(0, idx);
            const after = arr.slice(idx + 1)
            const newArray = [...before, newItem, ...after];

            return newArray;
    }

    onToggleImportant = (key) => {
        this.setState(({ todoData }) => {
            
            return {
                todoData: this.toggleProperty(todoData, key, 'important')
            }
        })
    }

    onToggleDone = (key) => {
        this.setState(({ todoData }) => {
            
            return {
                todoData: this.toggleProperty(todoData, key, 'done')
            }
        })
    }

    search(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => item
                                        .text.toLowerCase()
                                        .indexOf(term.toLowerCase()) > -1)
    }

    onChangeTerm = (newTerm) => {
        this.setState({
            term: newTerm
        })
    }

    render() {

        const { todoData, term } = this.state

        const visibleItems = this.search(todoData, term);
        const doneCount =this.state.todoData
                            .filter((el) => el.done)
                            .length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onChangeTerm1={this.onChangeTerm} />
                    <ItemStatusFilter />
                </div>
    
                <TodoList 
                    data={visibleItems}
                    onDeleted={ this.deleteItem }
                    onToggleImportant1={ this.onToggleImportant }
                    onToggleDone1={this.onToggleDone} />
                <AddItemForm onAddItem={this.addItem} />
            </div>
        )
    }
};

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