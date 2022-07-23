import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import {Box} from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Authentication = () => {
    return (
        <Box>
            <h1>
                Authentication page
            </h1>
            <PrimaryButton><SentimentVeryDissatisfiedIcon/></PrimaryButton>
        </Box>
    )
}

export default Authentication;