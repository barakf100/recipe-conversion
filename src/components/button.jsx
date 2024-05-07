import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const ButtonComp = ({ text, onClick }) => {
    return (
        <Button variant="outlined" onClick={onClick}>
            {text}
        </Button>
    );
};

ButtonComp.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default ButtonComp;
