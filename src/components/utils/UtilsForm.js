import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});
 
class UtilsForm extends React.Component {
 
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off"> 
        
        <TextField
          required
          id="dataHash"
          label="Data Hash"
          placeholder="Example: 0x0..."
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
      </form>
    );
  }
}

UtilsForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UtilsForm);