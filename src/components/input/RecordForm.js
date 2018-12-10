import React from 'react';
import PropTypes from 'prop-types'; 
import { withStyles } from '@material-ui/core/styles'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
 
class RecordForm extends React.Component {
  constructor(props) {
    super(props); 
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("[RecordForm]",event);

    console.log("[RecordForm] dataFormat",event.target.elements.dataFormat.value);
    console.log("[RecordForm] domain",event.target.elements.domain.value);
    console.log("[RecordForm] storage",event.target.elements.storage.value);
    console.log("[RecordForm] encryptionPublicKey",event.target.elements.encryptionPublicKey.value);
    console.log("[RecordForm] provider",event.target.elements.provider.value);
    console.log("[RecordForm] providerEthereumAddress",event.target.elements.providerEthereumAddress.value);
    console.log("[RecordForm] keyword1",event.target.elements.keyword1.value);
    console.log("[RecordForm] timeFrame",event.target.elements.timeFrame.value);
    console.log("[RecordForm] filename",event.target.elements.filename.value);


  };

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit}> 
        <div className={classes.container}  >
        <TextField 
          required
          id="dataFormat"
          name="dataFormat"
          label="Data Format"
          placeholder="Example: json"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="domain"
          label="Domain"
          placeholder="Example: medical data"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="storage"
          label="Storage"
          placeholder="Example: IPFS"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="encryptionPublicKey"
          label="Encryptn Public Key"         
          placeholder="provide encrypt public key"  
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="provider"
          label="Provider Name"
          placeholder="required provider"  
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="providerEthereumAddress"
          label="Provider Eth Address"
          placeholder="required provider's Ethereum address" 
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="keyword1"
          label="Keyword 1"
          placeholder="required keyword" 
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="timeFrame"
          label="Time Frame"
          placeholder="required time frame" 
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Upload File To Store"
          margin="normal"
          id="filename" 
          type="file"
          variant="outlined"              
          InputLabelProps={{
            shrink: true,
          }}
        /> 
        </div>
        <Button
            type='submit'
          >
            Save
          </Button>          
      </form>
    );
  }
}

RecordForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecordForm);