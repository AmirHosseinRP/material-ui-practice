import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PrimaryButton from "./PrimaryButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AuthenticationModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [btnText,btnTextSet] = useState(()=><SentimentVeryDissatisfiedIcon/>);
    function hoverIn() {
        btnTextSet(()=><SentimentSatisfiedAltIcon/>);
    }
    function hoverOut() {
        btnTextSet(()=><SentimentVeryDissatisfiedIcon/>);
    }

    return (
        <div>
            <PrimaryButton onMouseEnter={hoverIn} onMouseLeave={hoverOut} onClick={handleOpen}>{btnText}</PrimaryButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Modal Header
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        this is gonna be the modal body
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default AuthenticationModal;