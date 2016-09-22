import React, { Component } from 'react';
import { connect } from 'react-redux';

const TableStyle = {
    clear: "left"
};
    

class ResultsList extends Component {
    renderList() {
        return this.props.items.map((item) => {
            return (
                    <tr key={item.item}>
                    <td>{item.item}</td>
                    <td>{item.room}</td>
                    <td>{item.zone}</td>
                    <td>{item.location}</td>
                    </tr>
            );
        });
    }
                


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
                {this.renderList()}
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
