import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'; 
import DialogTitle from '@material-ui/core/DialogTitle';
import AttestationContent from './AttestationListContent';
const styles = theme => ({
    root: {
      display: 'center',
      background: "transparent"
    } 
});

class AttestationList extends Component {
    state = {
        open: true,
        scroll: 'body',
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleAdd = () => { 
        this.setState({ open: true });
    };

    render() {
        const { classes } = this.props;
        return (
          <div> 
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                scroll={this.state.scroll} 
                className={classes.root}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle id="scroll-dialog-title" align="center">Attestation Signatories List</DialogTitle>
                <AttestationContent/>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={this.handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
          </div>
        )      
    }
}

AttestationList.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AttestationList);