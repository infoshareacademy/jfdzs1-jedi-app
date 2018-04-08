import {SIGN_IN, SIGN_OUT} from './types';
import {presentError} from './error';
import {provider, auth} from '../firebase'

const signIn = (user) => {
    console.log("signIn "+ user);
    return {
        type: SIGN_IN,
        user
    }
};

const signOut = (user) => {
    console.log("signOut "+user);
    return {
        type: SIGN_OUT,
    }
};

export const openGoogleSignIn = () => {
    return (dispatch) => {
        auth.signInWithPopup(provider)
            .then(result => dispatch(signIn(result.user)))
            .catch(error => dispatch(presentError('Error while signin in')));
    }
};

export const openGoogleSignOut =()=>{
    return()=>{
        auth.signOut()
            .then(() => console.log("AAA"))
            .then(() => signOut())
            .catch(() => presentError('Error while signin out'));
    };
    };

