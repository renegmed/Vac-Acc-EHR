import React, { Component } from 'react';
//import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import RecordForm from './RecordForm';

const styles = {
  error: {
    color: 'red',
  },
  text: {
    marginTop: 20,
  },
};

class Record extends Component {
   

  onInputChange = (property) => (event) => {
    const value = event.target.value;    
    console.log("Property:",property,"  Value:", value);
    this.setState({ [property]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const dataHash = event.target.elements.dataHash.value;
    // const owner = event.target.elements.owner.value;
    // const property = event.target.elements.property.value;
    // this.props.onSearchSubmit(dataHash, owner, property);
  }

  render () { 
    //const { search, classes } = this.props; 
    return ( 
        <RecordForm /> 
    );
  }
}

// Record.propTypes = {
//   classes: PropTypes.object.isRequired,
//   search: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Record);