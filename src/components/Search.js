import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }
    
    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
                <form onSubmit={this.onFormSubmit} className="input-group">
                <input
            placeholder="what do you want to find?"
            className="form-control"
            onChange={this.onInputChange}

                />
                <span className="input-group-btn">
                <button type="submit" className='btn btn-secondary'>Fetch!</button>
                </span>
                </form>
                
        );
    }
}

export default Search;
