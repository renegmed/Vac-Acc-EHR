import App from './App';
import { actions as authActions } from '../../reducers-actions/authentication'; 
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const { isAuthenticated, authError } = state.auth;   
    return {
        isAuthenticated,
        authError,
    };
};

const mapDispatchToProps = (dispatch) => ({    
    authenticate: () => dispatch(authActions.authenticate()),  
});
  
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
 
