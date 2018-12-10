import { connect } from 'react-redux';
import Access from './Access';
import { actions as accessActions } from '../../reducers-actions/access';

const mapDispatchToProps = (dispatch) => ({
    grantAccess: (dataHash, provider, ipfsHash, userAddr) => 
        dispatch(accessActions.grantAccess(dataHash, provider, ipfsHash, userAddr)),
});

export default connect(null, mapDispatchToProps)(Access);
