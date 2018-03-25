import React from 'react'

const UserComponent = ({ user, signIn }) => {
    if(user) {
        return (
            <section className="user">
                <p className="user-name">{user.displayName}</p>
                <button type="button" className="sign-out">Sign out</button>
            </section>
        );
    } else {
        return (
            <section className="user">
                <button type="button" className="sign-in" onClick={signIn}>Sign in</button>
            </section>
        )
    }
};

export default UserComponent;