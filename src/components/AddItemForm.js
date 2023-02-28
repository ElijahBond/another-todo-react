import React, { Component } from "react";

import './addItemForm.css';

class AddItemForm extends Component {

    render() {

        const { onAddItem } = this.props;

        return (
            <div className="add-item-form" >
                <button
                    type='button'
                    className='btn btn-outline-secondary btn-sm'
                    onClick={() => onAddItem('Hello')} >
                    Add item
                </button>
            </div>
        )
    }
}

export default AddItemForm;