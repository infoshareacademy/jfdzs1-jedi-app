import React from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './side.nav.component.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles, {appColors} from '../../../styles';

export default class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                <Drawer
                    containerClassName={"sideBar"}
                    zDepth={0}
                    open={this.state.open}
                >
                    <Link to="/" style={styles.link}>
                        <MenuItem innerDivStyle={styles.menuItemTop}
                                  onMouseEnter={(e) => e.target.style.color= appColors.orange}
                        onMouseLeave={(e) => e.target.style.color = appColors.creamy}
                        >
                            Dashboard
                    </MenuItem>
                    </Link>
                    <Link to="/map" style={styles.link}>
                        <MenuItem innerDivStyle={styles.menuItem}
                                  onMouseEnter={(e) => e.target.style. color= appColors.orange}
                        onMouseLeave={(e) => e.target.style.color = appColors.creamy}
                        >
                            Waluty Świata
                    </MenuItem></Link>
                    <Link to="/search" style={styles.link}>
                        <MenuItem innerDivStyle={styles.menuItem}
                                  onMouseEnter={(e) => e.target.style.color = appColors.orange}
                                  onMouseLeave={(e) => e.target.style.color = appColors.creamy}
                        >
                            Wyszukaj
                        </MenuItem>
                    </Link>
                    <Link to="/favorites" style={styles.link}>
                        <MenuItem innerDivStyle={styles.menuItem}
                                  onMouseEnter={(e) => e.target.style.color = appColors.orange}
                                  onMouseLeave={(e) => e.target.style.color = appColors.creamy}
                        >
                            Ulubione
                        </MenuItem>
                    </Link>
                </Drawer>
            </div></MuiThemeProvider>
        );
    }
}
