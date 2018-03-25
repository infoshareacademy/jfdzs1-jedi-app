import React, {Component} from 'react';
import TopNav from '../../components/nav.components/top.nav.component/top.nav.component'
import SideMenu from '../../components/nav.components/side.nav.component/side.nav.component'
import {MuiThemeProvider, AutoComplete, Toggle} from 'material-ui';
import TableResults from '../../components/search.component/TableResults.component'
import './Search.component.css';

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
            cryptocurrency: false,
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
                    this.setState({
                        dataSource: this.state.items.map(item => `${item.currency.split(' (')[0]}, ${item.code}`),
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

    searchResult = () => {
        const {searchText} = this.state;
        return (this.state.items.filter((item) => {
            return item.code.toLowerCase().search(searchText.split(',')[0].toLowerCase()) !== -1 || item.currency.split(' (')[0].toLowerCase().search(searchText.split(',')[0].toLowerCase()) !== -1;
        }));
    };

    handleChange = (event, logged) => {
        this.setState({cryptocurrency: logged});
    };

    render() {
        const styles = {
            underlineStyle: {
                borderColor: '#FF8619',
            },
            floatingLabelFocusStyle: {
                color: '#FF8619',
            },
            thumbOff: {
                backgroundColor: '#FF8619',
            },
            thumbSwitched: {
                backgroundColor: '#FF8619',
            },
            trackSwitched: {
                backgroundColor: 'rgb(190, 190, 190)',
            },
        };

        const {error, isLoaded, dataSource, searchText} = this.state;
        if (error) {
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
                        Error: {error.message}
                    </main>
                </div>
            );
        } else if (!isLoaded) {
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
                        Loading...
                    </main>
                </div>
            )
        } else {
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
                        <MuiThemeProvider>
                            <AutoComplete
                                floatingLabelText="Wybierz walutę"
                                filter={AutoComplete.caseInsensitiveFilter}
                                openOnFocus={true}
                                dataSource={dataSource}
                                searchText={searchText}
                                onUpdateInput={this.handleUpdateInput}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                underlineFocusStyle={styles.underlineStyle}
                            />
                        </MuiThemeProvider>
                        <span>Waluty</span>
                        <MuiThemeProvider>
                            <Toggle
                                label="Kryptowaluty"
                                defaultToggled={false}
                                onToggle={this.handleChange}
                                labelPosition="right"
                                thumbStyle={styles.thumbOff}
                                trackStyle={styles.trackOff}
                                thumbSwitchedStyle={styles.thumbSwitched}
                                trackSwitchedStyle={styles.trackSwitched}
                                style={{
                                    width: '10%',
                                    display: 'inline-block',
                                }}
                            />
                        </MuiThemeProvider>
                        <MuiThemeProvider>
                            <TableResults tableName={this.state.cryptocurrency ? 'Kryptowaluta' : 'Waluta'}
                                          tableData={this.searchResult(searchText)}/>
                        </MuiThemeProvider>
                    </main>
                </div>
            );
        }
    }
}

export default SearchItem;
