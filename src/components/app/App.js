import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'; 
import { withStyles } from '@material-ui/core/styles';
import createHistory from 'history/createBrowserHistory';
import ProtectedRoute from '../ProtectedRoute';

// Styles
import '../../css/App.css';

// Router components
import Header from '../layout/Header';
import Home from '../home/Home';
import View from '../view/ViewTable';
import Record from '../input/RecordContainer';
import Access from '../permission/AccessContainer';
import Permission from '../permission/Permission';
import AttestationList from '../view/AttestationList';
import RegisteredUsersList from '../user/RegisteredUsersList';
import Utils from '../utils/UtilsContainer';

const history = createHistory({
    basename: '',
});

const styles = {
    main: {
        padding: 100,
        paddingTop: 40,
    }
}
class App extends Component {
    componentDidMount () {
        this.props.authenticate();       
    }
    render () {        
        const { isAuthenticated, authError, classes } = this.props;
        // console.log("[App] isAuthenticated", isAuthenticated);
        // console.log("[App] authError", authError);
        return (
            <div>
                <Header history={history} />
                <Router history={history}>
                    <main className={classes.main}>
                        <Switch>
                            <ProtectedRoute
                                isAuthenticated={isAuthenticated} 
                                path='/view'
                                authError={authError}
                                component={View}
                            />
                            <ProtectedRoute
                                isAuthenticated={isAuthenticated} 
                                path='/input'
                                authError={authError}
                                component={Record}
                            />
                            <ProtectedRoute 
                                isAuthenticated={isAuthenticated}    
                                path='/permission'
                                authError={authError}
                                component={Permission}
                            />
                            <ProtectedRoute 
                                isAuthenticated={isAuthenticated}    
                                path='/grant-access'
                                authError={authError}
                                component={Access}
                            />
                            <ProtectedRoute 
                                isAuthenticated={isAuthenticated}    
                                path='/revoke-access'
                                authError={authError}
                                component={Access}
                            />
                            <ProtectedRoute 
                                isAuthenticated={isAuthenticated}
                                path='/users'
                                authError={authError}
                                component={RegisteredUsersList}
                            />                                               
                            <ProtectedRoute
                                isAuthenticated={isAuthenticated} 
                                path='/attestationList'
                                authError={authError}
                                component={AttestationList}
                            />
                            <ProtectedRoute 
                                isAuthenticated={isAuthenticated}
                                path='/gen-keys'
                                authError={authError}
                                component={Utils}
                            />
                            <ProtectedRoute 
                                isAuthenticated={isAuthenticated}
                                path='/encrypt-data'
                                authError={authError}
                                component={Utils}
                            />     
                            <ProtectedRoute 
                                isAuthenticated={isAuthenticated}
                                path='/decrypt-data'
                                authError={authError}
                                component={Utils}
                            />               
                            <Route 
                                exact
                                path='*'
                                component={Home}
                            />
                        </Switch>
                    </main>
                </Router>
            </div>
        );
    }
}

export default withStyles(styles)(App);