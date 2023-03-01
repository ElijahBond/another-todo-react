import React, { Component } from "react";

import './addItemForm.css';

class AddItemForm extends Component {

    state = {
        text: ''
    };

    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddItem(this.state.text);
        this.setState({
            text: ''
        })
    };

    render() {

        return (
            <form 
                className="add-item-form d-flex"
                onSubmit={this.onSubmit} >
                <input
                    type='text'
                    className="form-control"
                    onChange={this.onTextChange}
                    placeholder='Write your todo'
                    value={this.state.text} />
                <button
                    type='button'
                    className='btn btn-outline-secondary btn-sm'
                    onClick={this.onSubmit}>
                    Add item
                </button>
            </form>
        )
    }
}

export default AddItemForm;