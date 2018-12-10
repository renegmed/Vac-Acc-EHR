import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store';
import AppContainer from './components/app/AppContainer';
import './css/index.css';

ReactDOM.render(
    <Fragment> 
      <Provider store={store}>
        <CssBaseline> 
           <AppContainer />
        </CssBaseline>
      </Provider>
    </Fragment>, document.getElementById('root'));