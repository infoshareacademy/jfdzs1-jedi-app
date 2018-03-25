import React from 'react';
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

const TableResults = (props) => {

    return (
        <div>
            <Table
                onCellClick={(row, col, event) => console.log(props.tableData[row])}
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default TableResults;
