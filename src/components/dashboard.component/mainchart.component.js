import React from 'react';
import {PureComponent} from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import EuroSymbol from 'material-ui/svg-icons/action/euro-symbol';
//import UsdSymbol from 'material-ui/svg-icons/editor/attach-money';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Main extends PureComponent {

    constructor() {
        super();
        this.state = {
            'firstcurrency': {
                cur: "",
                toggle: true
            },
            error: null,
            items:[]
        };
    }

    componentWillMount() {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/eur/last/10/?format=json`)
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        items: result,
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }


    Switcher (currency, shortcut){
        this.setState({
            currency: {
                cur: shortcut,
                toggle: !currency.toggle
            }
        })

    };
    render() {
        const {items} = this.state;
        const currencyName = `${items.currency} (${items.code})`;

        const currencyRates = [];
        for (let item in items.rates) {
            currencyRates[item] = [items.rates[item].effectiveDate, items.rates[item].mid];
        }
        const dataCurrencyShow = [['Number', currencyName]].concat(currencyRates);

        return(
            <MuiThemeProvider>
                <div className={'my-pretty-chart-container'}>
                    <FloatingActionButton
                        onClick={(curr='firstcurrency', short='eur') => this.Switcher(curr, short)}><EuroSymbol/></FloatingActionButton>


                    <Chart
                        chartType="LineChart"
                        data={dataCurrencyShow}
                        options={{}}
                        graph_id="LineChart"
                        width="100%"
                        height="400px"
                        legend_toggle
                    />
                </div>
            </MuiThemeProvider>
        )

    }
}
export default Main