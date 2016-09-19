import React, { Component } from 'react';

var BoneImage = require('./bone.svg');

const formStyle = {
    backgroundImage: 'url(' + BoneImage + ')',
    backgroundRepeat: "no-repeat",
    width: "300px",
    height: "200px",
    float: "left"

};
const inputStyle = {
    width: "200px",
    marginLeft: "20px",
    marginTop: "39px",
    height: "50px",
    fontSize: "1em",
    border: "none"
};
const buttonDivStyle = {
    width: "50px",
    height: "70px",
     float: "left",
    paddingTop: "40px"
};
const buttonStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#C6ED2C",
    borderRadius: "25px",
    color: "white",
    textShadow: "1px 1px 1px #000000",
    border: "1px silver solid"
    

};

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
                <div>
                <form style={formStyle} onSubmit={this.onFormSubmit} className="input-group">
                <input style={inputStyle}
            placeholder="what do you want to find?"
            className="form-control"
            onChange={this.onInputChange}
                />
                </form>
                <div style={buttonDivStyle}>
                <span className="input-group-btn">
                <button style={buttonStyle} type="submit" className='btn btn-secondary'>Fetch!</button>
                </span>
                </div>
                </div>
                
        );
    }
}

export default Search;
