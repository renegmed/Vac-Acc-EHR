import { connect } from 'react-redux';
import Utils from './Utils';
import { actions as utilsActions } from '../../reducers-actions/utils';

const mapDispatchToProps = (dispatch) => ({
    generateKeys: () => 
        dispatch(utilsActions.generateKeys()),
    encryptData: () => 
        dispatch(utilsActions.encryptData()),
    decryptData: () => 
        dispatch(utilsActions.decryptData()),        
});

export default connect(null, mapDispatchToProps)(Utils);
