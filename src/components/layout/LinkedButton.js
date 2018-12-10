import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'; 

class LinkedButton extends Component {
    render () {
        const { props } = this.props;
        const link = () =>   <Link to={this.props.to} {...this.props} /> 
        return (
            <Button component={link} >
                {this.props.label}
            </Button>
        )
    }
}

export default LinkedButton;