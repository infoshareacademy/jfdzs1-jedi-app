import React, { Component } from 'react';
import './App.css';
import TopNav from './components/nav.components/top.nav.component/top.nav.component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideMenu from './components/nav.components/side.nav.component/side.nav.component'
import Picture from './components/nav.components/img/picture.component';

class App extends Component {
  render() {
    return (
        <div>
            <header className="App-header">
                <MuiThemeProvider>
                    <TopNav/>
                    <SideMenu/>
                </MuiThemeProvider>
            </header>
            <main>
            </main>
        </div>


    );
  }
}

export default App;
