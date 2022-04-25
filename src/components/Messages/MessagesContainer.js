import { sendMessage, setLastMessage } from './../../redux/reduсers/messagesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from './../../HOC/withAuthRedirect';
import { reset } from 'redux-form';

const mapStateToProps = (state) => ({
    dialogs: state.messagesPage.dialogs,
})

export default compose(
    connect(mapStateToProps, { sendMessage, setLastMessage, reset }),
    withAuthRedirect
)(Messages)

