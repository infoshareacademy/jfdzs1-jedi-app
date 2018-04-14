import React, {Component} from 'react';
import LineChart from '../line.chart.component/line.chart.component';

class Get3CurrencyValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            item1Name: '',
            items1: [],
            item2Name: '',
            items2: [],
            item3Name: '',
            items3: [],
        };
    }

    componentWillMount() {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${this.props.currencyCode1.toLowerCase()}/last/93/?format=json`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    items1Name: `${result.currency} (${result.code})`
                });
                return Object.values(result)
            })
            .then(result => Object.values(result[3]))
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
            );
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${this.props.currencyCode2.toLowerCase()}/last/93/?format=json`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    items2Name: `${result.currency} (${result.code})`
                });
                return Object.values(result)
            })
            .then(result => Object.values(result[3]))
            .then(result => {
                    this.setState({
                        items2: result,
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${this.props.currencyCode3.toLowerCase()}/last/93/?format=json`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    items3Name: `${result.currency} (${result.code})`
                });
                return Object.values(result)
            })
            .then(result => Object.values(result[3]))
            .then(result => {
                    this.setState({
                        items3: result,
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.currencyCode1 !== this.props.currencyCode1) {
            fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${nextProps.currencyCode1.toLowerCase()}/last/93/?format=json`)
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        items1Name: `${result.currency} (${result.code})`
                    });
                    return Object.values(result)
                })
                .then(result => Object.values(result[3]))
                .then(result => {
                        this.setState({
                            items1: result,
                            isLoaded1: true,
                        });
                    },
                    (error) => {
                        this.setState({
                            error
                        });
                    }
                );
        }
        if (nextProps.currencyCode2 !== this.props.currencyCode2) {
            fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${nextProps.currencyCode2.toLowerCase()}/last/93/?format=json`)
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        items2Name: `${result.currency} (${result.code})`
                    });
                    return Object.values(result)
                })
                .then(result => Object.values(result[3]))
                .then(result => {
                        this.setState({
                            items2: result,
                        });
                    },
                    (error) => {
                        this.setState({
                            error
                        });
                    }
                );
        }
        if (nextProps.currencyCode3 !== this.props.currencyCode3) {
            fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${nextProps.currencyCode3.toLowerCase()}/last/93/?format=json`)
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        items3Name: `${result.currency} (${result.code})`
                    });
                    return Object.values(result)
                })
                .then(result => Object.values(result[3]))
                .then(result => {
                        this.setState({
                            items3: result,
                        });
                    },
                    (error) => {
                        this.setState({
                            error
                        });
                    }
                );
        }
    }

    render() {
        const {error, items1Name, items1, items2Name, items2, items3Name, items3} = this.state;
        let currencyRates = [];
        const items1Values = Object.values(items1.map((item) => item.mid));
        const items2Values = Object.values(items2.map((item) => item.mid));
        const items3Values = Object.values(items3.map((item) => item.mid));
        const currencyDate = Object.values(items1.map((item) => item.effectiveDate));
        for (let i = 0; i < items1Values.length; i++) {
            currencyRates[i] = [currencyDate[i], items1Values[i], items2Values[i], items3Values[i]];
        }
        const dataCurrencyShow = [['Number', items1Name, items2Name, items3Name]].concat(currencyRates);
        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else {
            return (
                <div>
                    <LineChart currencyRates={dataCurrencyShow}/>
                </div>
            );
        }
    };
}

export default Get3CurrencyValue;
