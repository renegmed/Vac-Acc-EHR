import React, { Component } from 'react';
//import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'; 
import AccessForm from './AccessForm';

const styles = {
  error: {
    color: 'red',
  },
  text: {
    marginTop: 20,
  },
};

class Access extends Component { 
    
  onInputChange = (property) => (event) => {
    const value = event.target.value;    
    console.log("Property:",property,"  Value:", value);
    this.setState({ [property]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
  }

  render () { 
     
    return ( 
        <AccessForm /> 
    );
  }
} 
export default withStyles(styles)(Access);