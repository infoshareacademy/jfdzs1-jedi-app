import React, {Component} from 'react';
import TopNav from '../../components/nav.components/top.nav.component/top.nav.component'
import SideMenu from '../../components/nav.components/side.nav.component/side.nav.component'
import {MuiThemeProvider} from 'material-ui';
import {Chart} from 'react-google-charts';
import {dataWorldCurrency} from '../../_mock_/world.cyrrency.data'

class WorldCurrencyMap extends Component {
    render() {
        const options = {
            displayMode: 'auto',
            colors: ['#E5D2BC', '#FF8619'],
            legend: 'none',
        };
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
                    <Chart chartType="GeoChart"
                           width={"95%"}
                           height={"85vh"}
                           data={dataWorldCurrency}
                           options={options}
                           graph_id="GeoChart"
                    />
                </main>
            </div>
        )
    }
}

export default WorldCurrencyMap;
