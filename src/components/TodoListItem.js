import React, { Component } from 'react';
import './todoListItem.css';

class TodoListItem extends Component {
    render() {
        const {text,
                onDeleted, 
                onToggleImportant2, 
                onToggleDone2, 
                done, 
                important
                } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done'
        };

        if (important) {
            classNames += ' important'
        }

        // const style = {
        //     color: important ? 'steelblue' : 'black',
        //     fontWeight: important ? 'bold' : 'normal'
        // };
    
        return (
            <span className={classNames}>
                <span 
                    className="todo-list-item-text" 
                    onClick={onToggleDone2}>
                    {text}
                </span>
    
                <button 
                    type='button'
                    className='btn btn-outline-success btn-sm float-right'
                    onClick={onToggleImportant2}>
                    <i className="fa fa-exclamation" />
                </button>
    
                <button 
                    type='button'
                    className='btn btn-outline-danger btn-sm float-right'
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}

// const TodoListItem = ({text, important = false}) => {
//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     };

//     return (
//         <span className='todo-list-item'>
//             <span 
//                 className="todo-list-item-text" 
//                 style={style}>
//                 {text}
//             </span>

//             <button 
//                 type='button'
//                 className='btn btn-outline-success btn-sm float-right'>
//                 <i className="fa fa-exclamation" />
//             </button>

//             <button 
//                 type='button'
//                 className='btn btn-outline-danger btn-sm float-right'>
//                 <i className="fa fa-trash-o" />
//             </button>
//         </span>
//     )
// };

export default TodoListItem;