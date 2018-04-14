import React, {Component} from 'react';
import PieChart from '../pie.chart.component/pie.chart.component';
import './dashboard.style.css';

class cryptocurrencyValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            userFavoritesCurrency: [['Kryptowaluta', 'Wartość (PLN)']],
        };
    }

    componentWillMount() {
        const cryptocurrencyCode = ["BTCPLN", "BCCPLN", "LTCPLN", "ETHPLN", "LSKPLN", "GAMEPLN", "DASHPLN", "BTGPLN", "XRPPLN"];
        const cryptocurrencyName = ["Bitcoin", "Bitcoin Cash", "Litecoin", "Ethereum", "Lisk", "Game Credits", "Dash", "Bitcoin Gold", "Ripple"];
        for (let i = 0; i < cryptocurrencyCode.length; i++) {
            fetch(`https://bitbay.net/API/Public/${cryptocurrencyCode[i]}/ticker.json`)
                .then(res => res.json())
                .then(result => {
                        this.setState({
                            userFavoritesCurrency: [...this.state.userFavoritesCurrency, [cryptocurrencyName[i], result.average]],
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );
        }
        this.setState({
            isLoaded: true,
        });
    }

    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div className="displayInline">
                    {console.log(this.state.userFavoritesCurrency)}
                    <PieChart id="pieChartCryptocurrency" name="Kryptowaluty" data={this.state.userFavoritesCurrency}/>
                </div>
            );
        }
    }
}

export default cryptocurrencyValue;
