import React, {Component} from 'react';
import {MuiThemeProvider, AutoComplete} from 'material-ui';

class SearchItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            date: '',
            searchText: '',
            dataSource: [],
            temp: [],
        };
    }

    componentWillMount() {
        fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        date: result[0].effectiveDate,
                        items: result[0].rates,
                    });
                    for (let i in this.state.items) {
                        this.state.dataSource.push(`${this.state.items[i].currency.split(' (')[0]}, ${this.state.items[i].code}`);
                    }
                    this.setState({
                        te: true,
                        temp: this.state.dataSource.slice(),
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

    handleUpdateInput = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    searchResult = (item) => {
        this.state.temp = this.state.dataSource.filter((item) => {
            return item.toLowerCase().search(this.state.searchText.toLowerCase()) !== -1;
        });
        return this.state.temp.map(item => <li key={item}>{item}</li>);
    };

    render() {
        const styles = {
            underlineStyle: {
                borderColor: '#FF8619',
            },
            floatingLabelFocusStyle: {
                color: '#FF8619',
            },
        };


        const {error, isLoaded, items, dataSource} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AutoComplete
                                floatingLabelText="Wybierz walutę"
                                filter={AutoComplete.caseInsensitiveFilter}
                                openOnFocus={true}
                                dataSource={dataSource}
                                searchText={this.state.searchText}
                                onUpdateInput={this.handleUpdateInput}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                underlineFocusStyle={styles.underlineStyle}
                                defaultValue="b"
                            />
                        </div>
                    </MuiThemeProvider>
                    <ul>
                        {this.searchResult(this.state.searchText)}
                    </ul>
                </div>
            );
        }
    }
}

export default SearchItem;
