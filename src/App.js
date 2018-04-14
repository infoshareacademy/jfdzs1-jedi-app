import React, {Component} from 'react';
import './App.css';
import TopNav from './components/nav.components/top.nav.component/top.nav.component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideMenu from './components/nav.components/side.nav.component/side.nav.component';
import PreciousMetals from './components/dashboard.component/precious.metals.component';
import WIGComponent from './components/dashboard.component/wig.component';
import Cryptocurrency from './components/dashboard.component/cryptocurrency.component';
import CurrencyInformation from './components/currency.information.component/currency.information.component';

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
                    <MuiThemeProvider>
                        <CurrencyInformation/>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <Cryptocurrency/>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <WIGComponent/>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <PreciousMetals/>
                    </MuiThemeProvider>
                </main>
            </div>
        );
    }
}

export default App;
