import React from "react";
import {Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {mainNavbarItems} from "../consts/navbaritems";
import AuthenticationModal from "../components/AuthenticationModal";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";

const Authentication = () => {

    return (
        <Box sx={{
            padding: '30px 0 10px 20px',
            fontWeight:'bold',
        }}>
            <Typography
                variant="h3"
                component="div"
                sx={{
                    padding: '0 0 20px 0',
                    fontWeight:'bold',
                }}
            >{mainNavbarItems[0].label}
            </Typography>
            <AuthenticationModal/>
        </Box>
    )
}

export default Authentication;