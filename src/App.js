import React, {PureComponent} from 'react';
import './App.css';
import TopNav from './components/nav.components/top.nav.component/top.nav.component'
import SideMenu from './components/nav.components/side.nav.component/side.nav.component'

class App extends PureComponent {
    render() {
        return (
            <div>
                <header className="App-header">
                    <TopNav/>
                    <SideMenu/>
                </header>
                <main>
                </main>
            </div>
        );
    }
}

export default App;
