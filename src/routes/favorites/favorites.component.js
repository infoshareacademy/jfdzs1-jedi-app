import React, {Component} from 'react';
import TopNav from '../../components/nav.components/top.nav.component/top.nav.component'
import SideMenu from '../../components/nav.components/side.nav.component/side.nav.component'
import {MuiThemeProvider} from 'material-ui';
import TableFavorites from '../../components/favorites.component/table.favorites.component'

const user = 'test';

class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            userFavoritesCurrency: [],
        };
    }

    componentWillMount() {
        fetch(`https://project-jedi-72218.firebaseio.com/${user}/favorite.json`)
            .then(res => res.json())
            .then(result => {
                    if (result) {
                        const keys = Object.keys(result);
                        for (let i = 0; i < keys.length; i++) {
                            fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${keys[i]}/?format=json`)
                                .then(resV => resV.json())
                                .then(resultV => this.setState({
                                        userFavoritesCurrency: [...this.state.userFavoritesCurrency, resultV]
                                    })
                                )
                        }
                        this.setState({
                            isLoaded: true,
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const {error, isLoaded, userFavoritesCurrency} = this.state;
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
                            <TableFavorites tableName={'Ulubione waluty'}
                                            tableData={userFavoritesCurrency}/>
                        </MuiThemeProvider>
                    </main>
                </div>
            );
        }
    }
}

export default SearchItem;
