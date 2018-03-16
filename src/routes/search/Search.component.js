import React, {Component} from 'react';
import {MuiThemeProvider, AutoComplete} from 'material-ui';
import './Search.component.css';

class SearchItem extends Component {

    state = {
        searchText: '',
        dataSource2: ['12345', '23456', '34567'],
    };

    handleUpdateInput = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    render() {

        const wypisz = (item) => {
            const dataS = this.state.dataSource2.filter((item) => {
                return item.search(this.state.searchText) !== -1;
            });
            if (dataS.length && item !== '') {
                console.log(dataS);
            }
        };


        const styles = {
            underlineStyle: {
                borderColor: '#FF8619',
            },
            floatingLabelFocusStyle: {
                color: '#FF8619',
            },
        };

        return (
            <MuiThemeProvider>
                <div>
                    <AutoComplete
                        floatingLabelText="Wybierz walutę"
                        filter={AutoComplete.caseInsensitiveFilter}
                        openOnFocus={true}
                        dataSource={this.state.dataSource2}
                        searchText={this.state.searchText}
                        onUpdateInput={this.handleUpdateInput}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle}
                    />
                </div>
                {wypisz(this.state.searchText)}
            </MuiThemeProvider>
        );
    }
}

export default SearchItem;









