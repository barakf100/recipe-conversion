import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import PropTypes from "prop-types";
import LogoutAndThemeButton from "./buttons";
import LeftDrawerComponent from "./drawer";

const Header = ({ isDarkTheme, onThemeChange }) => {
    const linksScreenSize = useMediaQuery("(min-width:750px)");
    const [isOpen, setIsOpen] = useState(false);

    const handleThemeChange = (event) => {
        onThemeChange(event.target.checked);
    };
    const handleOpenDrawerClick = () => {
        setIsOpen(true);
    };
    const handleCloseDrawerClick = () => {
        setIsOpen(false);
    };
    return (
        <Box sx={{ zIndex: 999, width: "100%", mb: 7 }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ display: linksScreenSize ? "none" : "block" }}
                        onClick={handleOpenDrawerClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap component="div" sx={{ cursor: "pointer" }}>
                        המרת מתכונים
                    </Typography>
                    <Box>{linksScreenSize && <LogoutAndThemeButton isDarkTheme={isDarkTheme} onThemeChange={handleThemeChange} />}</Box>
                </Toolbar>
            </AppBar>
            <LeftDrawerComponent
                isOpen={isOpen}
                onCloseDrawer={handleCloseDrawerClick}
                handleThemeChange={handleThemeChange}
                isDarkTheme={isDarkTheme}
            />
        </Box>
    );
};

Header.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
    onThemeChange: PropTypes.func.isRequired,
};

export default Header;
