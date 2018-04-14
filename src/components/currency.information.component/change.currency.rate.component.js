import React, {Component} from 'react';
import './change.currency.rate.component.css';

class ChangeCurrencyRate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            askPrevious: null,
            askCurrent: null,
            bidPrevious: null,
            bidCurrent: null, bid: null,
        };
    }

    componentWillMount() {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/c/${this.props.currencyCode}/last/2/?format=json`)
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        askPrevious: result.rates[0].ask,
                        bidPrevious: result.rates[0].bid,
                        askCurrent: result.rates[1].ask,
                        bidCurrent: result.rates[1].bid,
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

    componentWillUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            console.log(`Nowe propsy ${nextProps.currencyCode} stare propsy ${this.props.currencyCode}`);
            fetch(`http://api.nbp.pl/api/exchangerates/rates/c/${nextProps.currencyCode}/last/2/?format=json`)
                .then(res => res.json())
                .then(result => {
                        console.log(result);
                        this.setState({
                            askPrevious: result.rates[0].ask,
                            bidPrevious: result.rates[0].bid,
                            askCurrent: result.rates[1].ask,
                            bidCurrent: result.rates[1].bid,
                        });
                    },
                    (error) => {
                        this.setState({
                            askPrevious: 0,
                            bidPrevious: 0,
                            askCurrent: 0,
                            bidCurrent: 0,
                        });
                    }
                )
        }
    }

    render() {
        const {error, isLoaded, askPrevious, bidPrevious, askCurrent, bidCurrent} = this.state;
        if (error) {
            return (
                <main>
                    Error: {error.message}
                </main>
            );
        } else if (!isLoaded) {
            return (
                <main>
                    Loading...
                </main>
            )
        } else {
            return (
                <div>
                    <div>Kupno: {askCurrent}PLN {(askCurrent - askPrevious) < 0 ?
                        <span className="negative">{Math.round((askCurrent - askPrevious) * 100000) / 100000}</span> :
                        <span
                            className="positive">{Math.round((askCurrent - askPrevious) * 100000) / 100000}</span>}</div>
                    <div>Sprzedaż: {bidCurrent}PLN {(bidCurrent - bidPrevious) < 0 ?
                        <span className="negative">{Math.round((bidCurrent - bidPrevious) * 100000) / 100000}</span> :
                        <span
                            className="positive">{Math.round((bidCurrent - bidPrevious) * 100000) / 100000}</span>}</div>
                </div>
            );
        }
    }
}

export default ChangeCurrencyRate;