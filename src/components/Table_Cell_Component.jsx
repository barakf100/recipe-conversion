import { TableCell } from "@mui/material";
import PropTypes from "prop-types";

const TableCellComp = ({ children, sx }) => {
    return (
        <TableCell align="center" sx={{ ...sx, border: 0 }}>
            {children}
        </TableCell>
    );
};
TableCellComp.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};

export default TableCellComp;
