import { CircularProgress, Typography } from "@mui/material";
import TableComponent from "./TableComponent";

// eslint-disable-next-line react/prop-types
const TableContainer = ({ columns, data, loading, error }) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography color="error">
        An error occurred: {
        // eslint-disable-next-line react/prop-types
        error.message}
      </Typography>
    );
  }

  return <TableComponent columns={columns} data={data} />;
};

export default TableContainer;