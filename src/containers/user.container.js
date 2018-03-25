import { connect } from 'react-redux';
import { openGoogleSignIn } from '../actions/signin';
import UserComponent from '../components/login.components/user.component'

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToprops = dispatch => ({
    signIn: () => dispatch(openGoogleSignIn())
});

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(UserComponent);