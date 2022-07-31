import React from "react";
import {Button, createTheme, styled, ThemeProvider} from "@mui/material";
import {indigo} from "@mui/material/colors";

const CustomStyledButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.status.primary,
    border: `2px solid ${theme.status.primary}`,
    height:'2.3rem',
    '&:hover': {
        backgroundColor: 'white',
        color: theme.status.primary,
        borderRadius: '50px',
    }
}));

const theme = createTheme({
    status: {
        primary: indigo['900'],
    },
});


function PrimaryButton(props) {
    let innerHTMLText = props.children;
    const myStyle = {
        transition: 'all 0.3s',
    }
    return (
        <ThemeProvider theme={theme}>
            <CustomStyledButton variant={"contained"} onClick={props.onClick} onMouseEnter={props.onMouseEnter}
                                onMouseLeave={props.onMouseLeave} sx={myStyle}>{innerHTMLText}</CustomStyledButton>
        </ThemeProvider>
    )
}

export default PrimaryButton;