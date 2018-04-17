import React, {PureComponent} from 'react';
import './App.css';
import TopNav from './components/nav.components/top.nav.component/top.nav.component'
import SideMenu from './components/nav.components/side.nav.component/side.nav.component';
import PreciousMetals from './components/dashboard.component/precious.metals.component';
import WIGComponent from './components/dashboard.component/wig.component';
import Cryptocurrency from './components/dashboard.component/cryptocurrency.component';
import Main from './components/dashboard.component/mainchart.component'

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
                    <Main/>
                    <Cryptocurrency/>
                    <WIGComponent/>
                    <PreciousMetals/>
                </main>
            </div>
        );
    }
}

export default App;

