import { connect } from 'react-redux';
import { openGoogleSignIn, openGoogleSignOut } from '../actions/signin';
import UserComponent from '../components/login.components/user.component'
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToprops = dispatch => {
    return {
        actions: {
            openGoogleSignIn:  bindActionCreators(openGoogleSignIn, dispatch),
            openGoogleSignOut: bindActionCreators(openGoogleSignOut, dispatch)
        }}
};

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(UserComponent);