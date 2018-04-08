import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class GoogleLoginComponent extends React.Component{
    constructor(){
        super();
        this.state={
            logged: false
        }
    }
    logged: false;

    handleClick(e){
        e.preventDefault();
        this.logged = !this.logged;
        this.setState({
            logged: this.logged
        });
        console.log('The link was clicked. '+ this.state.logged);
    }

    render(){
    if(this.state.logged) {
        return (
            <MuiThemeProvider>

            <IconMenu
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
            </MuiThemeProvider>
        );
    } else {
        return (
            <MuiThemeProvider>
            <FlatButton onClick={this.handleClick.bind(this)} label="Zaloguj"/>
            </MuiThemeProvider>
        )
    }}

}

