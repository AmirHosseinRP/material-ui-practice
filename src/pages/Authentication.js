import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import {Box} from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Typography from "@mui/material/Typography";
import {mainNavbarItems} from "../consts/navbaritems";

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
            <PrimaryButton><SentimentVeryDissatisfiedIcon/></PrimaryButton>
        </Box>
    )
}

export default Authentication;