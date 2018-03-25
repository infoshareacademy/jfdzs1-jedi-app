import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

const check = (e, isChecked) => {
    if (isChecked) {
        console.log('dodane do ulubionych');
    } else {
        console.log('usuniete z ulubionych');
    }
};

const TableResults = (props) => {

    return (
        <div>
            <Table
                onCellClick={(row, col, event) => {
                    if (!event.target.value) {
                        console.log(props.tableData[row]);
                    }else{
                        console.log(props.tableData[row].code);
                    }
                }}
                height={'65vh'}
                fixedHeader={true}
                fixedFooter={true}
                selectable={true}
                multiSelectable={false}
                style={{
                    marginLeft: '256px',
                    width: '70%',
                }}
            >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
                            {props.tableName}
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn>Nazwa</TableHeaderColumn>
                        <TableHeaderColumn>Kod</TableHeaderColumn>
                        <TableHeaderColumn>Wartość (PLN)</TableHeaderColumn>
                        <TableHeaderColumn>Ulubione</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    deselectOnClickaway={true}
                    showRowHover={true}
                    stripedRows={false}
                >
                    {props.tableData.map((row, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{row.currency}</TableRowColumn>
                            <TableRowColumn>{row.code}</TableRowColumn>
                            <TableRowColumn>{row.mid}</TableRowColumn>
                            <TableRowColumn>
                                <Checkbox
                                    checkedIcon={<ActionFavorite/>}
                                    uncheckedIcon={<ActionFavoriteBorder/>}
                                    style={styles.checkbox}
                                    onCheck={check}
                                />
                            </TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableResults;
