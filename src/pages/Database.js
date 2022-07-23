import React from "react";
import {mainNavbarItems} from "../consts/navbaritems";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import DatabaseAccordion from "../components/DatabaseAccordion";

const Database = () => {
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
            >{mainNavbarItems[1].label}</Typography>
            <DatabaseAccordion/>
        </Box>
    )
}
export default Database;