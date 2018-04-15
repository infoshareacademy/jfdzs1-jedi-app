import React, {PureComponent} from 'react';
import './App.css';
import TopNav from './components/nav.components/top.nav.component/top.nav.component'
import SideMenu from './components/nav.components/side.nav.component/side.nav.component';
import PreciousMetals from './components/dashboard.component/precious.metals.component';
import WIGComponent from './components/dashboard.component/wig.component';
import Cryptocurrency from './components/dashboard.component/cryptocurrency.component';
import CurrencyInformation from './components/currency.information.component/currency.information.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends PureComponent {

    render() {
        return (
            <div>
                <header className="App-header">
                    <TopNav/>
                    <SideMenu/>
                </header>
        //        {console.log()}
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

