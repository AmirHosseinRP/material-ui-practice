import React, {useRef} from "react";
import {Box, Button, Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {mainNavbarItems} from "../consts/navbaritems";
import {useLocalStorage} from '../Hooks/useLocalStorage'

const Hosting = () => {
    const [name, setName] = useLocalStorage("name", "please enter your name");
    const textInputRef = useRef();

    const textCase = (text) => {
        text = text.toLowerCase();
        let array = text.split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }

    const handleEnter = () => {
        if (textInputRef.current.value !== '') {
            setName(textInputRef.current.value)
        } else {
            setName('please enter your name');
        }
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            if (textInputRef.current.value !== '') {
                setName(textInputRef.current.value)
            } else {
                setName('please enter your name');
            }
        }
    }

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
            >{mainNavbarItems[3].label}</Typography>
            <Box>
                <Typography
                    variant={'h6'}
                >Your name will permanently be saved: {textCase(name)}</Typography>
                <Stack spacing={2} direction={'row'} sx={{mt:2}}>
                    <TextField
                        id="outlined-basic" label="name" variant="outlined"
                        type="text"
                        inputRef={textInputRef}
                        size={"small"}
                        onKeyPress={handleKeyPress}
                    />
                    <Button onClick={handleEnter} variant={'contained'}>Click</Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default Hosting;