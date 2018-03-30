import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import Star from 'material-ui-icons/Star';
import StarBorder from 'material-ui-icons/StarBorder';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import GetCurrencyValue from './get.currency.value.component';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {addFavotire, removeFavorite} from '../favorites.component/add.remove.functions';
import styles from '../../styles';

const user = 'test';

class TableResults extends Component {

    state = {
        open: false,
        currencyName: '',
        currencyCode: '',
        favoriteCurrency: [],
        error: null,
        isLoaded: false,
    };

    componentWillMount() {
        fetch(`https://project-jedi-72218.firebaseio.com/${user}/favorite.json`)
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        favoriteCurrency: Object.keys(result),
                    });
                },
            );
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const {error, isLoaded} = this.state;
        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else if (!isLoaded) {

            const actions = [
                <FlatButton
                    label="Zamknij"
                    primary={true}
                    keyboardFocused={true}
                    onClick={this.handleClose}
                    style={styles.flatButton}
                />,
            ];

            const isFavorite = (currencyCode) => {
                if (this.state.favoriteCurrency.indexOf(currencyCode) === -1) {
                    return false;
                }
                return true;
            };

            const check = (event, isChecked) => {
                if (isChecked) {
                    console.log(`${event.target.value} dodane do ulubionych`);
                    addFavotire(event.target.value);
                    console.log(this.state.favoriteCurrency);
                } else {
                    console.log(`${event.target.value} usunięte z ulubionych`);
                    removeFavorite(event.target.value);
                    this.setState({
                        favoriteCurrency: this.state.favoriteCurrency.splice(this.state.favoriteCurrency.indexOf(event.target.value),1),
                    });
                    console.log(this.state.favoriteCurrency);
                }
            };


            return (
                <div>
                    <Table
                        onCellClick={(row, col, event) => {

                            if (!event.target.value) {
                                this.setState({
                                    currencyName: this.props.tableData[row].currency,
                                    currencyCode: this.props.tableData[row].code,
                                });
                                this.handleOpen();
                            }
                        }}
                        height={'65vh'}
                        fixedHeader={true}
                        fixedFooter={true}
                        selectable={true}
                        multiSelectable={false}
                        style={styles.table}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            enableSelectAll={false}
                        >
                            <TableRow>
                                <TableHeaderColumn colSpan="3" className="textAlignCenter">
                                    {this.props.tableName}
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn>Nazwa</TableHeaderColumn>
                                <TableHeaderColumn style={styles.textAlignCenter}>Kod</TableHeaderColumn>
                                <TableHeaderColumn style={styles.textAlignCenter}>Wartość (PLN)</TableHeaderColumn>
                                <TableHeaderColumn>Ulubione</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            deselectOnClickaway={true}
                            showRowHover={true}
                            stripedRows={false}
                        >
                            {this.props.tableData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn>{row.currency}</TableRowColumn>
                                    <TableRowColumn style={styles.textAlignCenter}>{row.code}</TableRowColumn>
                                    <TableRowColumn style={styles.textAlignCenter}>{row.mid}</TableRowColumn>
                                    <TableRowColumn style={styles.favoriteStar}>
                                        {console.log(isFavorite(row.code))}
                                        <Checkbox
                                            defaultChecked={isFavorite(row.code) ? true : false}
                                            checkedIcon={<Star style={styles.checkedIconStyle}/>}
                                            uncheckedIcon={<StarBorder/>}
                                            onCheck={check}
                                            value={row.code}
                                        />
                                    </TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Dialog
                        title={this.state.currencyName}
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <GetCurrencyValue currencyCode={this.state.currencyCode}/>
                    </Dialog>
                </div>
            );
        }
    }
}

export default TableResults;
