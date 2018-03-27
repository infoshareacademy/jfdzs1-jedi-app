import React, {Component} from 'react';
import LineChart from '../line.chart.component/line.chart.component'

class GetCurrencyValue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
        };
    }

    componentWillMount() {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${this.props.currencyCode.toLowerCase()}/last/93/?format=json`)
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

    render() {
        const {error, items} = this.state;
        const currencyName = `${items.currency} (${items.code})`;
        // const currencyRates =
        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else {
            return (
                <div>
                    <LineChart currencyName={currencyName}/>
                </div>
            );
        }
    };
}

export default GetCurrencyValue;