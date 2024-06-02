import * as Mui from "@mui/material";

const subheader = ["משקל", "מידה"];
const subheader2 = [
    { name: "משקל", value: ["ליטר", "מיליליטר", "גרם", "קילוגרם"] },
    { name: "מידה", value: ["כפית", "כף", "כוס", "קופסא"] },
];

const DropDown = () => {
    return (
        <Mui.FormControl sx={{ width: "8vw" }}>
            <Mui.InputLabel htmlFor="grouped-native-select">מידה</Mui.InputLabel>
            <Mui.Select dir="ltr" native label="מידה">
                <option aria-label="None" value="" />
                {subheader2.map((index) => (
                    <optgroup key={index} label={index.name}>
                        {index.value.map((val) => (
                            <option key={val} value={val}>
                                {val}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </Mui.Select>
        </Mui.FormControl>
    );
};

export default DropDown;
