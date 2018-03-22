import React, {Component} from 'react';
import './App.css';
import TopNav from './components/nav.components/top.nav.component/top.nav.component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideMenu from './components/nav.components/side.nav.component/side.nav.component'
import LoginForm from './components/login.components/login.component'

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
                    <LoginForm/>
                </main>
            </div>
        );
    }
}

export default App;
