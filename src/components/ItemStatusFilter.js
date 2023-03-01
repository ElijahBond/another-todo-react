import React, { Component } from 'react';

import './itemStatusFilter.css';

class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {

        const { filter, onChangeFilter } = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;

            const clazz = isActive ? ' btn btn-info' : 'btn btn-outline-secondary'
            return (
                <button 
                    type='button'
                    className={clazz}
                    key={name}
                    onClick={() => onChangeFilter(name)}
                >{label}</button>
            )
        })

        // let classNames = 'btn btn-outline-secondary';
        // if () {
        //     classNames += ' btn-info'
        // }

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}

// const ItemStatusFilter = () => {
//     return (
//         <div className=''>
//             <button 
//                 type='button'
//                 className='btn btn-info'>All</button>
//             <button 
//                 type='button'
//                 className='btn btn-outline-secondary'>Active</button>
//             <button 
//                 type='button'
//                 className='btn btn-outline-secondary'>Done</button>
//         </div>
//     )
// }

export default ItemStatusFilter;