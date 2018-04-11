import React, {Component} from 'react';
import './App.css';
import TopNav from './components/nav.components/top.nav.component/top.nav.component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideMenu from './components/nav.components/side.nav.component/side.nav.component';
import PreciousMetals from './components/dashboard.component/precious.metals.component';
import WIGComponent from './components/dashboard.component/wig.component';

class App extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <MuiThemeProvider>
                        <TopNav/>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <SideMenu/>
                    </MuiThemeProvider>
                </header>
                <main>
                    <div>
                        <PreciousMetals/>
                    </div>
                    <div>
                        <WIGComponent/>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
