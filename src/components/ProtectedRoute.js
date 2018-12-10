import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./home/Home";
/*
  This component wraps all of our routes. If this authentication reducer
  returns success, then it renders the component. If it returns an error
  in it's state, it shows the AuthError component.
*/
const ProtectedRoute = ( {component: Component, ...rest}) => {

    const { isAuthenticated, authError } = rest; 
    // console.log("[ProctedRoute] isAuthenticated", isAuthenticated);   
    // console.log("[ProctedRoute] authError", authError);

    return (
        <Route 
            {...rest}
            render={ props => {
                if (isAuthenticated) {
                    return <Component {...props} />;
                } else if (authError) {
                    return <Home authError={authError} />; 
                } else {
                    return <div />;    
                }                
            }}
        />
    );

};

export default ProtectedRoute;