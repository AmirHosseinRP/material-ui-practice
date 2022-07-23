import React from "react";
import {Button} from "@mui/material";

const PrimaryButton = ({children}) => {
    let innerHTMLText = children;
    const myStyle = {
        transition : 'all 0.3s',
        '&:hover' : {
            backgroundColor : 'white',
            outline: '2px solid #1876D1',
            color : '#1876D1',
            borderRadius:'50px',
        }
    }
    return (
        <Button variant={"contained"} sx={myStyle}>{innerHTMLText}</Button>
    )
}

export default PrimaryButton;