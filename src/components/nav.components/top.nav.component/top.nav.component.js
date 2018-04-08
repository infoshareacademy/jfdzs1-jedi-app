import React, {PureComponent} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './top.nav.component.css';
import Picture from '../picture.nav.component/picture.component';
import GoogleLogin from '../../login.components/googlelogin.component'
import UserComponent from '../../../containers/user.container'


class Login extends PureComponent {
    static muiName = 'FlatButton';

    render() {

        return (
                <UserComponent/>
        );
    }
}

class TopNav extends PureComponent {
    state = {
        togglelogged: false,
    };

    handleChange = (event, logged) => {
        this.setState({togglelogged: logged});
    };

    render() {
        return (
            <div>
                <AppBar
                    className="topBar"
                    title={<Picture logo="logo"/>}
                    showMenuIconButton={false}
                    iconElementRight={<Login/>} // <GoogleLogin/>
                />
                <div id={"bottomBorder"}></div>
            </div>
        );
    }
}

export default TopNav
