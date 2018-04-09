import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import Star from 'material-ui-icons/Star';
import StarBorder from 'material-ui-icons/StarBorder';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import GetCurrencyValue from '../search.component/get.currency.value.component';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {removeFavorite} from '../favorites.component/add.remove.functions';
import styles from '../../styles';

class TableResults extends Component {
    state = {
        openTable: false,
        currencyName: '',
        currencyCode: '',
    };

    handleOpenTable = () => {
        this.setState({openTable: true});
    };

    handleCloseTable = () => {
        this.setState({openTable: false});
    };

    render() {
        const actionsTable = [
            <FlatButton
                label="Zamknij"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleCloseTable}
                style={styles.flatButton}
            />,
        ];

        const check = (event, isChecked) => {
            if (!isChecked) {
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
                    height={'70vh'}
                    fixedHeader={true}
                    fixedFooter={true}
                    selectable={true}
                    multiSelectable={false}
                    style={styles.tableFavorites}
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
                                        defaultChecked={true}
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

export default TableResults;
