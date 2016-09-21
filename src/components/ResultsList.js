import React, { Component } from 'react';
import { connect } from 'react-redux';

const TableStyle = {
    clear: "left"
};
    

class ResultsList extends Component {
    render () {
        return (
                <table style={TableStyle}>
                <thead>
                <tr>
                <th>Item</th>
                <th>Room</th>
                <th>Zone</th>
                <th>Location</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>{this.props.items[0]['item']}</td>
                <td>{this.props.items[0]['room']}</td>
                <td>{this.props.items[0]['zone']}</td>
                <td>{this.props.items[0]['location']}</td>
                </tr>
                <tr>
                <td>{this.props.items[1]['item']}</td>
                <td>{this.props.items[1]['room']}</td>
                <td>{this.props.items[1]['zone']}</td>
                <td>{this.props.items[1]['location']}</td>
                </tr>
                </tbody>
                </table>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    };
}


export default connect(mapStateToProps)(ResultsList);
