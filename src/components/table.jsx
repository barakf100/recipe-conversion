import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import ButtonComp from "./button";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import recipeSlice, { addIngredient, addRecipe } from "../store/recipeSlice";
import store from "../store/store";

const TableCellComp = ({ children, sx }) => {
    return (
        <TableCell align="right" sx={{ ...sx, border: 0 }}>
            {children}
        </TableCell>
    );
};
TableCellComp.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};

const TableComponent = () => {
    const state = useSelector((store) => store.recipeSlice);
    console.log(state);
    const dispatch = useDispatch();
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState(Array.from({ length: 6 }, () => ({ name: "", amount: "", unit: "" })));
    const [save, setSave] = useState(false);

    const handleSave = () => {
        console.log(ingredients, "ingredients");
        // dispatch(addRecipe(recipeName));
        ingredients.forEach((ingredient) => {
            if (ingredient.name === "" || ingredient.amount === "" || ingredient.unit === "") return;
            dispatch(addIngredient(ingredient));
        });
    };
    const handleInputChange = (index, field) => (event) => {
        const newIngredients = [...ingredients];
        newIngredients[index][field] = event.target.value;
        setIngredients(newIngredients);
        console.log(ingredients);
    };

    const addIngredientRow = () => {
        setIngredients([...ingredients, { name: "", amount: "", unit: "" }]);
    };

    return (
        <TableContainer dir="rtl" component={Paper} sx={{ boxShadow: 0 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCellComp>כמות</TableCellComp>
                        <TableCellComp>סוג</TableCellComp>
                        <TableCellComp>מוצר</TableCellComp>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ingredients.map((ingredient, index) => (
                        <TableRow key={index}>
                            <TableCellComp sx={{ width: "4vw" }}>
                                <TextField placeholder="כמות" onChange={handleInputChange(index, "amount")} />
                            </TableCellComp>
                            <TableCellComp sx={{ width: "8vw" }}>
                                <TextField placeholder="בחר סוג" onChange={handleInputChange(index, "unit")} />
                            </TableCellComp>
                            <TableCellComp sx={{ width: "12vw" }}>
                                <TextField placeholder="סוג המוצר" onChange={handleInputChange(index, "name")} />
                            </TableCellComp>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <ButtonComp disabled={save} sx={{ ml: 3 }} text="הוסף שורה" onClick={() => addIngredientRow()} />
                <ButtonComp
                    text={save ? "ערוך" : "המר"}
                    onClick={() => {
                        setSave(!save);
                        handleSave();
                    }}
                />
            </Box>
        </TableContainer>
    );
};

export default TableComponent;
