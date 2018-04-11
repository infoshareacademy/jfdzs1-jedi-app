import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './side.nav.component.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Drawer
                        containerClassName={"sideBar"}
                        zDepth={0}
                        open={this.state.open}
                    >
                        <MenuItem innerDivStyle={{marginTop: '65px',color: '#E5D2BC'}}>
                            Menu Item
                        </MenuItem>
                        <MenuItem innerDivStyle={{ color: '#E5D2BC'}}>
                            Menu Item 2
                        </MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}
