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
        openTable: false,
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
                    if (result) {
                        this.setState({
                            favoriteCurrency: Object.keys(result),
                        });
                    }
                    this.setState({
                        isLoaded: true,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    };

    handleOpenTable = () => {
        this.setState({openTable: true});
    };

    handleCloseTable = () => {
        this.setState({openTable: false});
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
            return (
                <div>
                </div>
            )
        } else {
            const actionsTable = [
                <FlatButton
                    label="Zamknij"
                    primary={true}
                    keyboardFocused={true}
                    onClick={this.handleCloseTable}
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
                    addFavotire(event.target.value);
                } else {
                    removeFavorite(event.target.value);
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
                                this.handleOpenTable();
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
                                <TableHeaderColumn colSpan="4" style={styles.textAlignCenter}>
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
                        actions={actionsTable}
                        modal={false}
                        open={this.state.openTable}
                        onRequestClose={this.handleCloseTable}
                    >
                        <GetCurrencyValue currencyCode={this.state.currencyCode}/>
                    </Dialog>
                </div>
            );
        }
    }
}

export default TableResults;