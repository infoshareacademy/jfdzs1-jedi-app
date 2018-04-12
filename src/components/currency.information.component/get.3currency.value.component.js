import React, {Component} from 'react';
import LineChart from '../line.chart.component/line.chart.component';

class Get3CurrencyValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items1: [],
            items2: [],
            items3: [],
        };
    }

    componentWillMount() {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${this.props.currencyCode1}/last/93/?format=json`)
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        items1: result,
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
        // fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${this.props.currencyCode3.toLowerCase()}/last/93/?format=json`)
        //     .then(res => res.json())
        //     .then(result => {
        //             this.setState({
        //                 items3: result,
        //                 isLoaded: true,
        //             });
        //         },
        //         (error) => {
        //             this.setState({
        //                 error
        //             });
        //         }
        //     )
        // fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${this.props.currencyCode2.toLowerCase()}/last/93/?format=json`)
        //     .then(res => res.json())
        //     .then(result => {
        //             this.setState({
        //                 items2: result,
        //             });
        //         },
        //         (error) => {
        //             this.setState({
        //                 error
        //             });
        //         },
        //     )
    }


    render() {
        const {error, isLoaded, items1, items2, items3} = this.state;
        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else if (isLoaded) {
            const currencyName1 = `${items1.currency} (${items1.code})`;
            // const currencyName2 = `${items2.currency} (${items2.code})`;
            // const currencyName3 = `${items3.currency} (${items3.code})`;
            let currencyRates = [];
            // for (let item in items1.rates) {
            //     currencyRates[item] = [items1.rates[item].effectiveDate, items1.rates[item].mid, items2.rates[item].mid, items3.rates[item].mid];
            // }
            for (let item in items1.rates) {
                currencyRates[item] = [items1.rates[item].effectiveDate, items1.rates[item].mid];
            }
            const dataCurrencyShow = [['Number', currencyName1]].concat(currencyRates);
            // const dataCurrencyShow = [['Number', currencyName1, currencyName2, currencyName3,]].concat(currencyRates);
            return (
                <div>
                    <LineChart currencyRates={dataCurrencyShow}/>
                    {console.log(items1)}
                    {console.log(items2)}
                    {console.log(items3)}
                    {/*{console.log(dataCurrencyShow)}*/}
                </div>
            );
        }
    };
}

export default Get3CurrencyValue;