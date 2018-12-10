import { connect } from 'react-redux';
import Record from './Record';
import { actions as recordActions } from '../../reducers-actions/record';

const mapDispatchToProps = (dispatch) => ({
    addRecord: (recordData) => dispatch(recordActions.addRecord(recordData)),
});

export default connect(null, mapDispatchToProps)(Record);
