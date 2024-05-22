import { Drawer, Box } from "@mui/material";
import LogoutAndThemeButton from "./buttons";
import PropTypes from "prop-types";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer, isDarkTheme, handleThemeChange }) => {
    return (
        <Drawer sx={{ mt: 2 }} anchor="left" open={isOpen} onClose={onCloseDrawer}>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <LogoutAndThemeButton isDarkTheme={isDarkTheme} onThemeChange={handleThemeChange} />
            </Box>
        </Drawer>
    );
};

LeftDrawerComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCloseDrawer: PropTypes.func.isRequired,
    isDarkTheme: PropTypes.bool.isRequired,
    handleThemeChange: PropTypes.func.isRequired,
};

export default LeftDrawerComponent;
