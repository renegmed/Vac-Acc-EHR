import React, { Component } from 'react';
//import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'; 
import UtilsForm from './UtilsForm';

const styles = {
  error: {
    color: 'red',
  },
  text: {
    marginTop: 20,
  },
};

class Utils extends Component { 
    
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
        <UtilsForm /> 
    );
  }
} 
export default withStyles(styles)(Utils);