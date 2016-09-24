import React, { Component } from 'react';
import { connect } from 'react-redux';

const DarkTableColor = "#12284C"
const LightTableColor = "#ADD8E6"

const TableStyle = {
    clear: "left",
    width: "90%",
    margin: "auto",
    border: "1px solid" + DarkTableColor,
    padding: "5px",
    borderRadius: "5px"
};

const HeaderStyle = {
    backgroundColor: DarkTableColor,
    color: "#FFFFFF",
};

const OddCellStyle = {
    border: "1px solid" + LightTableColor,
    color: DarkTableColor,
    backgroundColor: LightTableColor
};

const EvenCellStyle = {
    border: "1px solid" + LightTableColor,
    color: DarkTableColor,
};

class ResultsList extends Component {
    renderHeader() {
        return (
                <thead>
                <tr>
                <th style={HeaderStyle}>Item</th>
                <th style={HeaderStyle}>Room</th>
                <th style={HeaderStyle}>Zone</th>
                <th style={HeaderStyle}>Location</th>
                </tr>
                </thead>
        );
    }

    renderList() {
        return this.props.items.map((item, i) => {
            let cssClass = EvenCellStyle;
            if(i%2===1) {
                cssClass = OddCellStyle;
            }
            return (
                    <tr key={item.item}>
                    <td style={cssClass}>{item.item}</td>
                    <td style={cssClass}>{item.room}</td>
                    <td style={cssClass}>{item.zone}</td>
                    <td style={cssClass}>{item.location}</td>
                    </tr>
            );
        });
    }
                


    render () {
        return (
                <table style={TableStyle}>
                {this.renderHeader()}
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
