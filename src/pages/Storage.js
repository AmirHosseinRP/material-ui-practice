import React, {useEffect, useRef, useState} from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    Select,
    Stack
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {mainNavbarItems} from "../consts/navbaritems";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {pink} from "@mui/material/colors";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WcIcon from '@mui/icons-material/Wc';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge', 'you see nothing in here'];

const StyledBtn = styled(Button)((props) => ({
    color: 'white',
    textTransform: 'none',
    border: props.isDisabled ? '1px solid grey' : '1px solid #0063cc',
    backgroundColor: props.isDisabled ? 'grey' : '#0062cc',
    '&:hover': {
        backgroundColor: props.isDisabled ? 'grey' : 'white',
        color: props.isDisabled ? 'white' : '#0062cc',
        borderColor: props.isDisabled ? 'grey' : '#0062cc',
        boxShadow: 'none',
        cursor: props.isDisabled ? 'not-allowed' : 'pointer',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
}));

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const Storage = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [check, setCheck] = useState('Not Checked');
    const sendBtn = useRef();
    const [checked, setChecked] = useState(false);
    const [gender, setGender] = useState('female');
    const [rateValue, setRateValue] = useState(2);
    const [personName, setPersonName] = useState("Oliver Hansen");
    const [message, setMessage] = useState(`hello miss ${personName}`);
    const [openSelect, setOpenSelect] = useState(false);

    useEffect(() => {
        setMessage(`hello ${gender === "female" ? "miss" : "mr"} ${personName}`);
    }, [personName, gender]);

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];


    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
        switch (selectedIndex) {
            case 0 :
                alert('first');
                break;
            case 1 :
                alert('second');
                break;
        }
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
        if (checked) {
            setCheck("Not Checked");
        }
        if (!checked) {
            setCheck("Checked");
        }
    };

    const handleRadioChange = (event) => {
        setGender(event.target.value);
        if (event.target.value === 'male') {
            setMessage(`hello miss ${personName}`);
        }
        if (event.target.value === 'female') {
            setMessage(`hello mr ${personName}`);
        }
    };

    const handleSelectChange = (event) => {
        setPersonName(event.target.value)
    };

    const openingSelect = () => {
        setOpenSelect(true);
    }

    const closingSelect = () => {
        setOpenSelect(false);
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
            >{mainNavbarItems[2].label}</Typography>
            <Stack spacing={2} direction="row">
                <Button ref={sendBtn} variant={'outlined'} endIcon={<WcIcon/>}
                        onClick={() => alert(message)}>Gender</Button>
                <Button variant={'outlined'} startIcon={<ThumbUpIcon/>}
                        onClick={() => alert(`you rated ${rateValue}`)}>Rate</Button>
                <IconButton color={'primary'}><DeleteIcon/></IconButton>
                <StyledBtn onClick={() => {
                    if (check === 'Checked') {
                        alert('You are all set');
                    } else {
                        alert('Please check the Checkbox');
                    }
                }} isDisabled={!checked}>{check}</StyledBtn>

                <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                    <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                    <Button
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon/>
                    </Button>
                </ButtonGroup>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" autoFocusItem>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                disabled={index === 2}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Stack>
            <FormControlLabel control={
                <Checkbox onChange={handleCheckboxChange}
                          sx={{
                              color: 'blue',
                              '&.Mui-checked': {
                                  color: pink[800],
                              },
                              '& .MuiSvgIcon-root': {
                                  fontSize: 28
                              }
                          }}
                          icon={<FavoriteBorder/>}
                          checkedIcon={<Favorite/>}/>}
                              label="Checkbox"
                              labelPlacement={'start'}/>
            <RadioGroup
                name="radio-buttons-group"
                value={gender}
                onChange={handleRadioChange}
                row
            >
                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            </RadioGroup>
            <StyledRating
                value={rateValue}
                onChange={(event, newRateValue) => {
                    setRateValue(newRateValue)
                }}

                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit"/>}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
                max={10}
            />
            <Box sx={{mt: 2}}>
                <FormControl sx={{minWidth: 90}} size={"small"}>
                    <InputLabel id="demo-simple-select-label">Name</InputLabel>
                    <Select
                        open={openSelect}
                        onChange={handleSelectChange}
                        value={personName}
                        label="Name"
                        autoWidth
                        onOpen={openingSelect}
                        onClose={closingSelect}
                    >
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Field</FormHelperText>
                </FormControl>
                <Button onClick={openingSelect}>open select</Button>
            </Box>
        </Box>
    )
}

export default Storage;