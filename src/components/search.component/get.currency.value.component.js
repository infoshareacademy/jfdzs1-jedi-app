import React, {Component} from 'react';
import LineChart from '../line.chart.component/line.chart.component'

class GetCurrencyValue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            date: '',
        };
    }

    componentWillMount() {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${this.props.currencyCode.toLowerCase()}/last/93/?format=json`)
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else {
            return (
                <div>
                    {console.log(this.state.items)}
                    <LineChart/>
                </div>
            );
        }
    };
}

export default GetCurrencyValue;