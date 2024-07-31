import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import TableContainer from "./components/TableContainer";
import useFetchData from "./hooks/useFetchData";
import userColumns from "./data/tableColumns";

const App = () => {
  const { data, loading, error } = useFetchData();
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "20px" }}>
        <TableContainer
          columns={userColumns}
          data={data}
          loading={loading}
          error={error}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
