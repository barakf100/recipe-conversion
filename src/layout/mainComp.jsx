// import React from "react";
import * as Mui from "@mui/material";
import EnterRecipe from "../pages/Enter_Recipe";
import RegularRecipe from "../pages/Regular_Recipe";

const MainComp = () => {
    return (
        <>
            <Mui.Grid container overflow={scroll} component={Mui.Paper} sx={{ boxShadow: 0 }}>
                <Mui.Grid item xs={12} md={5}>
                    <Mui.Typography variant="h3">מתכון רגיל</Mui.Typography>
                    <RegularRecipe />
                </Mui.Grid>
                <Mui.Grid item xs={12} md={1}>
                    <Mui.Box></Mui.Box>
                </Mui.Grid>
                <Mui.Grid item xs={12} md={6}>
                    <Mui.Typography variant="h3">הכנס מתכון</Mui.Typography>
                    <EnterRecipe />
                </Mui.Grid>
            </Mui.Grid>
        </>
    );
};

export default MainComp;
