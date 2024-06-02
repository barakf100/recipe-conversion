import * as Mui from "@mui/material";
import { useSelector } from "react-redux";
import TableCellComp from "../components/Table_Cell_Component";
const RegularRecipe = () => {
    const recipe = useSelector((state) => state.recipeSlice.recipes);
    console.log(recipe.ingredients);
    return (
        <Mui.Box>
            <Mui.TableContainer dir="rtl" component={Mui.Paper} sx={{ boxShadow: 0 }}>
                <Mui.Table>
                    <Mui.TableHead>
                        <Mui.TableRow>
                            <TableCellComp>כמות</TableCellComp>
                            <TableCellComp>סוג</TableCellComp>
                            <TableCellComp>מוצר</TableCellComp>
                        </Mui.TableRow>
                    </Mui.TableHead>
                    <Mui.TableBody>
                        {recipe.ingredients.map((ingredient, index) => (
                            <Mui.TableRow key={index}>
                                <TableCellComp>{ingredient.amount}</TableCellComp>
                                <TableCellComp>{ingredient.unit}</TableCellComp>
                                <TableCellComp>{ingredient.name}</TableCellComp>
                            </Mui.TableRow>
                        ))}
                    </Mui.TableBody>
                </Mui.Table>
            </Mui.TableContainer>
        </Mui.Box>
    );
};

export default RegularRecipe;
