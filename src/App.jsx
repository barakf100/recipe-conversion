import "./App.css";
import * as Mui from "@mui/material";
import Header from "./layout/header/header";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "./store/darkThemeSlice";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./layout/theme/theme";
import MainComp from "./layout/mainComp";

function App() {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector((store) => store.darkThemeSlice.darkTheme);
    const handleThemeChange = () => {
        dispatch(darkThemeActions.changeTheme());
    };
    return (
        <ThemeProvider theme={theme(isDarkTheme)}>
            {/* <Mui.Container sx={{ width: "100vw", height: "90vh" }}> */}
            <Mui.CssBaseline />
            <Header isDarkTheme={isDarkTheme} onThemeChange={handleThemeChange} />
            <MainComp />
            <Mui.Box width="100%">{/* footer */}</Mui.Box>
            {/* </Mui.Container> */}
        </ThemeProvider>
    );
}

export default App;
