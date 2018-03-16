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
            dataSerch: [],
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
                        this.state.dataSource.push(`${this.state.items[i].currency.split('(')[0]}, ${this.state.items[i].code}`);
                    }
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

    render() {

        const showSearchResult = (item) => {
            const dataS = this.state.dataSource.filter((item) => {
                return item.search(this.state.searchText) !== -1;
            });
            // if (dataS.length !=0 && item !== '') {
                console.log(dataS);
            // }
        };


        const styles = {
            underlineStyle: {
                borderColor: '#FF8619',
            },
            floatingLabelFocusStyle: {
                color: '#FF8619',
            },
        };


        const {error, isLoaded, items} = this.state;
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
                                dataSource={this.state.dataSource}
                                searchText={this.state.searchText}
                                onUpdateInput={this.handleUpdateInput}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                underlineFocusStyle={styles.underlineStyle}
                            />
                        </div>
                        {showSearchResult(this.state.searchText)}
                    </MuiThemeProvider>
                    {/*<ul>*/}
                    {/*{items.map(item => (*/}
                    {/*<li key={item.Team}>*/}
                    {/*{item.Team} {item.Team_name}*/}
                    {/*</li>*/}
                    {/*))}*/}
                    {/*</ul>*/}
                </div>
            );
        }
    }
}

export default SearchItem;
