import React, {PureComponent} from 'react';
import AppBar from 'material-ui/AppBar';
import './top.nav.component.css';
import Picture from '../picture.nav.component/picture.component';
import UserComponent from '../../../containers/user.container'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class TopNav extends PureComponent {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        className="topBar"
                        title={<Picture logo="logo"/>}
                        showMenuIconButton={false}
                        iconElementRight={<UserComponent/>}
                    />
                    <div id={"bottomBorder"}></div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TopNav
