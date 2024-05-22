import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PropTypes from "prop-types";

const LogoutAndThemeButton = ({ isDarkTheme, onThemeChange }) => {
    return (
        <>
            <IconButton size="medium" color="inherit" sx={{ display: { cursor: "pointer" } }} onClick={onThemeChange}>
                {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        </>
    );
};

LogoutAndThemeButton.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
    onThemeChange: PropTypes.func.isRequired,
};

export default LogoutAndThemeButton;
