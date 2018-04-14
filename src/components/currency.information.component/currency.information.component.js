import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import ChangeCurrencyRate from './change.currency.rate.component';
import Get3CurrencyValue from './get.3currency.value.component';
import './change.currency.rate.component.css';
import styles from '../../styles';

class CurrencyInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 'USD',
            value2: 'EUR',
            value3: 'CHF',
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentWillMount() {
        fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        items: result[0].rates,
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

    handleChange1 = (event, index, value) => {
        this.setState({value1: value});
    };
    handleChange2 = (event, index, value) => {
        this.setState({value2: value});
    };
    handleChange3 = (event, index, value) => {
        this.setState({value3: value});
    };

    render() {
        const {error, isLoaded} = this.state;
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
                    <div className="elementCenter">
                        <Paper style={styles.paper} zDepth={2}>
                            <SelectField
                                value={this.state.value1}
                                onChange={this.handleChange1}
                                maxHeight={200}
                            >
                                {this.state.items.map(item => <MenuItem value={item.code} key={item.code}
                                                                        primaryText={`${item.currency} ${item.code}`}/>)}
                            </SelectField>
                            <ChangeCurrencyRate currencyCode={this.state.value1}/>
                        </Paper>
                        <Paper style={styles.paper} zDepth={2}>
                            <SelectField
                                value={this.state.value2}
                                onChange={this.handleChange2}
                                maxHeight={200}
                            >
                                {this.state.items.map(item => <MenuItem value={item.code} key={item.code}
                                                                        primaryText={`${item.currency} ${item.code}`}/>)}
                            </SelectField>
                            <ChangeCurrencyRate currencyCode={this.state.value2}/>
                        </Paper>
                        <Paper style={styles.paper} zDepth={2}>
                            <SelectField
                                value={this.state.value3}
                                onChange={this.handleChange3}
                                maxHeight={200}
                            >
                                {this.state.items.map(item => <MenuItem value={item.code} key={item.code}
                                                                        primaryText={`${item.currency} ${item.code}`}/>)}
                            </SelectField>
                            <ChangeCurrencyRate currencyCode={this.state.value3}/>
                        </Paper>
                    </div>
                    <Get3CurrencyValue currencyCode1={this.state.value1}
                                       currencyCode2={this.state.value2}
                                       currencyCode3={this.state.value3}/>
                </div>
            );
        }
    }
}

export default CurrencyInformation;