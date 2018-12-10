import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
 
const styles = (theme) => ({
    tab: {
        minWidth: 'unset',
    },
    tablLabelContainer: {
        padding: 10,
    },
    tabs: {
        [theme.breakpoints.down('sm')]: {
            flex: 1,
        },
    },
});

class Header extends Component {
    state = {
        anchorEl: null,
        utilsMenu: null,
      };
    
    permissionMenuClick = event => {
        console.log("[header]event.currentTarget:", event.currentTarget);
        this.setState({ anchorEl: event.currentTarget });
    };
    
    grantAccess = (f,event) => {
        // console.log("[header]grantAccess event.currentTarget:", event.currentTarget);
        //this.setState({ anchorEl: event.currentTarget });
        f('/grant-access');
        //this.setState({ anchorEl: null });  
    }

    revokeAccess = event => {
        console.log("[header]revoketAccess event.currentTarget:", event.currentTarget);
        //this.setState({ anchorEl: event.currentTarget });
        
        this.navigateTo('/revoke-access'); 
        //this.setState({ anchorEl: null });
    }

    permissionMenuClose = () => {
        console.log("[header] handleInputMenuClose");
        this.setState({ anchorEl: null });
    };
 
    utilsMenuClick = event => {
        console.log("[header] utilsMenuClick:", event.currentTarget);
        this.setState({ utilsMenu: event.currentTarget });
    };

    utilsMenuClose = () => {
        console.log("[header] utilsMenuClose");
        this.setState({ utilsMenu: null });
    };

    navigateTo = route => () => {
        // const { isAuthenticated, authError } = this.props;
        // console.log("[Header] isAuthenticated", isAuthenticated);
        // console.log("[Header] authError", authError);
        console.log("[Header] navigate to: ", route);
        this.props.history.push(route);
    };

    render () {
        const { classes } = this.props;
        const { anchorEl, utilsMenu } = this.state;

        return (
            <AppBar position='sticky' color='primary'>
                <Toolbar className={classes.tabs}>
                    <Tab
                        label='View'
                        onClick={this.navigateTo('/view')}
                        classes={{
                            root: `${classes.tab}`,
                            labelContainer: classes.tabLabelContainer,
                        }}
                         
                    /> 
                    <Tab
                        label='Permissions'
                        onClick={this.permissionMenuClick}
                        classes={{
                            root: `${classes.tab}`,
                            labelContainer: classes.tabLabelContainer,
                        }}
                         
                    /> 
                    <Tab
                        label='Input'
                        onClick={this.navigateTo('/input')}
                        classes={{
                            root: `${classes.tab}`,
                            labelContainer: classes.tabLabelContainer,
                        }} 
                    /> 
                   
                    <Tab
                        label='Registered Users'
                        onClick={this.navigateTo('/users')}
                        classes={{
                            root: `${classes.tab}`,
                            labelContainer: classes.tabLabelContainer,
                        }} 
                    />
                    <Tab
                        label='Utils'
                        onClick={this.utilsMenuClick}
                        classes={{
                            root: `${classes.tab}`,
                            labelContainer: classes.tabLabelContainer,
                        }}
                         
                    /> 
                </Toolbar>
                <Menu
                    id="permission-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.permissionMenuClose}
                >
                    <MenuItem onClick={this.navigateTo('/grant-access')}>Grant Access</MenuItem>
                    <MenuItem onClick={this.navigateTo('/revoke-access')}>Revoke Access</MenuItem>
                   
                </Menu>
                <Menu
                    id="utils-menu"
                    anchorEl={utilsMenu}
                    open={Boolean(utilsMenu)}
                    onClose={this.utilsMenuClose}
                >
                    <MenuItem onClick={this.navigateTo('/gen-keys')}>Generate Keys</MenuItem>
                    <MenuItem onClick={this.navigateTo('/encrypt-data')}>Encrypt Data</MenuItem>
                    <MenuItem onClick={this.navigateTo('/decrypt-data')}>Decrypt Data</MenuItem>
                </Menu>
            </AppBar>
        );
    }
}

Header.propTypes = {
    history: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);