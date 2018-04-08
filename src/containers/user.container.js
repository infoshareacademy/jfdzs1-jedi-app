import { connect } from 'react-redux';
import { openGoogleSignIn, openGoogleSignOut } from '../actions/signin';
import UserComponent from '../components/login.components/user.component'

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToprops = dispatch => ({
    toggle: (user) => {
        console.log("mapDispatchToprops1");
        //FIXME action condition doesn't work
        const action = user ? openGoogleSignIn():openGoogleSignOut();
        console.log(action);
        return dispatch(action)
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(UserComponent);