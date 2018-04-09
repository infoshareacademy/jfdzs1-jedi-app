import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import './user.component.css'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Avatar from 'material-ui/Avatar';



const UserComponent = ({ user, toggle}) => {
    //
    //
    if(user) {
        return (
            <section className="user">
            <MuiThemeProvider>
                <Chip
                     backgroundColor={'#222 '}
                     labelColor={"#e5d2bc"}
                >
                    <Avatar
                        color="#e5d2bc"
                        backgroundColor={'#222'}
                        icon={<SvgIconFace />} />
                {user.displayName}</Chip>
                <IconMenu
                    iconButtonElement={
                        <IconButton className={"user"}                     ><MoreVertIcon/></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >

                    <MenuItem  primaryText="Odśwież"/>
                    <MenuItem primaryText="Ulubione"/>
                    <MenuItem primaryText="Wyloguj" onClick={toggle}/>
                </IconMenu>
                {/*<div className="user-name">{user.displayName}</div>*/}

            </MuiThemeProvider>
            </section>
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