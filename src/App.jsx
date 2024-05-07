import "./App.css";
import * as Mui from "@mui/material";
import ButtonComp from "./components/button";
import Ads from "./components/ads";
function App() {
    return (
        <Mui.Container maxWidth="false">
            <Mui.Box width="100%">
                {/* nav bar */}
                <ButtonComp text={"Home"} />
            </Mui.Box>
            <Mui.Grid container>
                <Mui.Grid item xs={12} md={8}>
                    {/* main */}
                </Mui.Grid>
                <Mui.Grid item xs={12} md={4}>
                    <Ads />
                </Mui.Grid>
            </Mui.Grid>
            <Mui.Box width="100%">{/* footer */}</Mui.Box>
        </Mui.Container>
    );
}

export default App;
