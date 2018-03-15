import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import './side.nav.component.css'

export default class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <Drawer
                    zDepth={1}
                    width={"15%"}
                    open={this.state.open}
                    containerStyle={
                        {
                            backgroundColor: '#222',
                            borderRight: "solid 5px #FF8619",
                        }
                    }
                >
                    <MenuItem
                        innerDivStyle={
                            {
                                marginTop: '65px',
                                color: '#E5D2BC'
                            }
                        }
                    >
                        Menu Item
                    </MenuItem>
                    <MenuItem
                        innerDivStyle={{color: '#E5D2BC'}}
                    >
                        Menu Item 2
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}