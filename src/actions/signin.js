import {SIGN_IN, SIGN_OUT} from './types';
import {presentError} from './error';
import {provider, auth} from '../firebase';

const signIn = (user) => {
    console.log("signIn ");
    return {
        type: SIGN_IN,
        user
    }
};

const signOut = () => {
    console.log("signOut ");
    this.state.user = null;
    return {
        type: SIGN_OUT,
    }
};

export const openGoogleSignIn = (user) => {
    console.log(JSON.stringify(user));
    return (dispatch) => {
        auth.signInWithPopup(provider)
            .then(result => dispatch(signIn(result.user)))
            .catch(error => dispatch(presentError('Error while signin in')));
    }
};

export const openGoogleSignOut =(user)=>{
    return()=>{
        auth.signOut()
            .then(() => signOut())
            .catch(() => presentError('Error while signin out'));
    };
};

