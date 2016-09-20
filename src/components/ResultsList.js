import React, { Component } from 'react';
import { connect } from 'react-redux';


class ResultsList extends Component {
    render () {
        return (
                <div>{this.props.items[0]['item']}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    };
}


export default connect(mapStateToProps)(ResultsList);
