import React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {mainNavbarItems} from "../consts/navbaritems";

const Functions = () => {
    return (
        <Box sx={{
            padding: '30px 0 10px 20px',
            fontWeight: 'bold',
        }}>
            <Typography
                variant="h3"
                component="div"
                sx={{
                    padding: '0 0 20px 0',
                    fontWeight: 'bold',
                }}
            >{mainNavbarItems[4].label}</Typography>
        </Box>
    )
}

export default Functions;