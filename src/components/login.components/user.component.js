import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import './user.component.css'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const UserComponent = ({ user, toggle}) => {
    //
    //
    if(user) {
        return (
        <MuiThemeProvider>
            <section className="user">
                <Chip
                     backgroundColor={'#222 '}
                     labelColor={"#e5d2bc"}
                >
                {user.displayName}</Chip>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    iconStyle={{ fill: 'rgb(229,210,188)' }}
                >
                    <MenuItem primaryText="Odśwież" onClick={()=>{window.location.reload()}}/>
                    <MenuItem primaryText="Ulubione"/>
                    <MenuItem primaryText="Wyloguj" onClick={toggle}/>
                </IconMenu>
            </section>
        </MuiThemeProvider>
        );
    }
    //
    //
    else {
        return (
            <section className="user">
                <MuiThemeProvider>
                    <FlatButton onClick={toggle} label="Zaloguj" style={{color:"#e5d2bc"}}/>
                </MuiThemeProvider>
            </section>
        )
    }
};

export default UserComponent;