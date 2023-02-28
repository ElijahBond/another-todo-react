import React, { Component } from 'react';
import './todoListItem.css';

class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick() {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onMarkImportant() {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }

    render() {

        const {text, onDeleted} = this.props;
        const { done, important } = this.state;

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
                    onClick={() => this.onLabelClick()}>
                    {text}
                </span>
    
                <button 
                    type='button'
                    className='btn btn-outline-success btn-sm float-right'
                    onClick={() => this.onMarkImportant()}>
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