import React from 'react';
import FlatButton from 'material-ui/FlatButton';


const GoogleLoginComponent = ({ user, signIn }) => {
    if(user) {
        return (
            <FlatButton label="Zalogowany"/>
        );
    } else {
        return (
            <FlatButton label="Zaloguj"/>
        )
    }
};

export default GoogleLoginComponent;