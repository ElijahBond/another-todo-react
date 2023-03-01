import React, { Component } from 'react';

import './searchPanel.css';

class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSetTerm = (e) => {
        const term = e.target.value;
        
        this.setState({ term })
        this.props.onChangeTerm1(term)
    }

    render() {

        return (
            <input
                type='text'
                className='form-control search-input'
                placeholder='type to search'
                value={this.state.term}
                onChange={this.onSetTerm}
                />
        )
    }
}


export default SearchPanel;