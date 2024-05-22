// import React from "react";
import * as Mui from "@mui/material";
import TableComponent from "./table";

const MainComp = () => {
    return (
        <>
            <Mui.Grid container overflow={scroll} component={Mui.Paper} sx={{ boxShadow: 0 }}>
                <Mui.Grid item xs={12} md={5}>
                    <Mui.Typography variant="h3">המרת מידות</Mui.Typography>
                </Mui.Grid>
                <Mui.Grid item xs={12} md={1}>
                    <Mui.Box></Mui.Box>
                </Mui.Grid>
                <Mui.Grid item xs={12} md={6}>
                    <Mui.Typography variant="h3">הכנס מתכון</Mui.Typography>
                    <TableComponent />
                </Mui.Grid>
            </Mui.Grid>
        </>
    );
};

export default MainComp;
