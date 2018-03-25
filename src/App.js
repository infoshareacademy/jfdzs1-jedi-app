import React, {Component} from 'react';
import './App.css';
import TopNav from './components/nav.components/top.nav.component/top.nav.component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideMenu from './components/nav.components/side.nav.component/side.nav.component'
import LoginForm from './components/login.components/login.component'
import ErrorContainer from './containers/error.container'
import UserComponent from "./containers/user.container";

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
                    <UserComponent/>
                </main>
            </div>
        );
    }
}

export default App;
