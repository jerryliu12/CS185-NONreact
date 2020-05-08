import React, { Component } from 'react';

export class Tab extends Component {
    addStyling = () => {
        if(this.props.tab.id == this.props.activeTab){
            return {backgroundColor: "khaki",
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}
        }
        else{
            return {backgroundColor: "#F5F5F5"}
        }
    }
    render() {
        return (
            <div className='tab' 
            style={this.addStyling()}
            onClick={this.props.changeTab.bind(this, this.props.tab.id)}>
                <a>{this.props.tab.title}</a>
            </div>
        );
    }
}

export default Tab;