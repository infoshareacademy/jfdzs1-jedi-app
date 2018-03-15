import React, {PureComponent} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './top.nav.component.css';
import Picture from '../img/picture.component';


class Login extends PureComponent {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login"/>
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton style={{color: 'orange'}}><MoreVertIcon/></IconButton>
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
                    style={
                        {
                            zIndex: 1400,
                            backgroundColor: "#222",
                            boxShadow: 0,
                            paddingLeft: 0,
                        }
                    }
                    title={<Picture/>}
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
                            marginLeft: "90%",
                        }}
                />
            </div>
        );
    }
}


export default TopNav
