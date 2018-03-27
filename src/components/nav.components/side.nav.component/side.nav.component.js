import React from 'react';
import {Link} from 'react-router-dom';
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
                    containerClassName={"sideBar"}
                    zDepth={0}
                    open={this.state.open}
                >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <MenuItem innerDivStyle={{marginTop: '65px', color: '#E5D2BC', fontWeight: 'bold'}}
                                  onMouseEnter={(e) => e.target.style.color = '#FF8619'}
                                  onMouseLeave={(e) => e.target.style.color = '#E5D2BC'}
                        >
                            Dashboard
                        </MenuItem>
                    </Link>
                    <Link to="/search" style={{ textDecoration: 'none' }}>
                        <MenuItem innerDivStyle={{color: '#E5D2BC', fontWeight: 'bold'}}
                                  onMouseEnter={(e) => e.target.style.color = '#FF8619'}
                                  onMouseLeave={(e) => e.target.style.color = '#E5D2BC'}
                        >
                            Wyszukaj
                        </MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}
