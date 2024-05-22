import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const ButtonComp = ({ text, onClick, sx, ...props }) => {
    return (
        <Button variant="outlined" onClick={onClick} sx={sx} {...props}>
            {text}
        </Button>
    );
};

ButtonComp.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    sx: PropTypes.object,
};

export default ButtonComp;
