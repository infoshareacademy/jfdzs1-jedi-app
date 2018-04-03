import React from 'react';
import GoogleLogin from './googlelogin.component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const UserComponent = ({ user, toggle}) => {
    if(user) {
        return (
            <section className="user">
                <p className="user-name">{user.displayName}</p>
                <button type="button" className="sign-out" onClick={toggle}>Sign out</button>
            </section>
        );
    } else {
        return (
            <section className="user">
                <MuiThemeProvider>
                <GoogleLogin
                    className="sign-in" onClick={toggle}
                />
                </MuiThemeProvider>
                <button type="button" className="sign-in" onClick={toggle}>Sign in</button>
            </section>
        )
    }
};

export default UserComponent;