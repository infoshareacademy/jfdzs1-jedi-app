import React, {PureComponent} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './top.nav.component.css';
import Picture from '../picture.nav.component/picture.component';
import GoogleLogin from '../../login.components/googlelogin.component'


class Login extends PureComponent {
    static muiName = 'FlatButton';

    render() {
        return (
            <div>
                <GoogleLogin/>
                <FlatButton {...this.props} label="Login"/>
            </div>
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Odśwież"/>
        <MenuItem primaryText="Ulubione"/>
        <MenuItem primaryText="Wyloguj"/>
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class TopNav extends PureComponent {
    state = {
        logged: true,
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        return (
            <div>
                <AppBar
                    className="topBar"
                    title={<Picture logo="logo"/>}
                    showMenuIconButton={false}
                    iconElementRight={this.state.logged ? <Logged/> : <Login/>}
                />
                <div id={"bottomBorder"}></div>
                {/*Tymczasowy przycisk do zmiany stanu zalogowania*/}
                <Toggle

                    label="Logged"
                    defaultToggled={true}
                    onToggle={this.handleChange}
                    labelPosition="right"
                    style={
                        {
                            marginLeft: "85%",
                            width: "5%"
                        }}
                />
            </div>
        );
    }
}

export default TopNav
