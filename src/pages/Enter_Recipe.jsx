import { Box, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import ButtonComp from "../components/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient } from "../store/recipeSlice";
import TableCellComp from "../components/Table_Cell_Component";
import DropDown from "../components/Drop_Down";

const EnterRecipe = () => {
    const state = useSelector((store) => store.recipeSlice);
    console.log(state);
    const dispatch = useDispatch();
    const [ingredients, setIngredients] = useState(Array.from({ length: 6 }, () => ({ name: "", amount: "", unit: "" })));
    const [save, setSave] = useState(false);

    const handleSave = () => {
        console.log(ingredients, "ingredients");
        dispatch(addIngredient(ingredients));
    };

    const handleInputChange = (index, field) => (event) => {
        const newIngredients = ingredients.map((ingredient, i) => {
            if (i === index) {
                return { ...ingredient, [field]: event.target.value };
            }
            return ingredient;
        });
        setIngredients(newIngredients);
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
                            <TableCellComp sx={{ width: "6vw" }}>
                                <TextField placeholder="כמות" onChange={handleInputChange(index, "amount")} />
                            </TableCellComp>
                            <TableCellComp sx={{ width: "8vw" }}>
                                <DropDown />
                            </TableCellComp>
                            <TableCellComp sx={{ width: "10vw" }}>
                                <TextField placeholder="סוג המוצר" onChange={handleInputChange(index, "name")} />
                            </TableCellComp>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <ButtonComp sx={{ ml: 3 }} text="הוסף שורה" onClick={() => addIngredientRow()} />
                <ButtonComp
                    text="המר"
                    onClick={() => {
                        setSave(!save);
                        handleSave();
                    }}
                />
            </Box>
        </TableContainer>
    );
};

export default EnterRecipe;
