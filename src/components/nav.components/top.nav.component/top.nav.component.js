import React, {PureComponent} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './top.nav.component.css';
import Picture from '../picture.nav.component/picture.component';
import GoogleLogin from '../../login.components/googlelogin.component'
import UserComponent from '../../login.components/user.component'


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
                    iconElementRight={<Login/>}
                />
                <div id={"bottomBorder"}></div>
                {/*Tymczasowy przycisk do zmiany stanu zalogowania*/}

{/*                <Toggle

                    label="Logged"
                    defaultToggled={true}
                    onToggle={this.handleChange}
                    labelPosition="right"
                    style={
                        {
                            marginLeft: "85%",
                            width: "5%"
                        }}
                />*/}
            </div>
        );
    }
}

export default TopNav
