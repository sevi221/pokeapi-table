import React, { useState} from 'react';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TableHeader = ({ tHeaders, onSorting }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <>
            <TableHead>
                <TableRow>
                    {tHeaders.map(({ name, field, isSortable }) => (
                        <TableCell
                            key={name}
                        >
                            {name}
                            {isSortable && (
                                <button
                                    className="button-sort"
                                    onClick={() =>
                                        isSortable ? onSortingChange(field) : null
                                    }>
                                    <i className="fa fa-sort"></i>
                                </button>)}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        </>
    );
}

export default TableHeader;