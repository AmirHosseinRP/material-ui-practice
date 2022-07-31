import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useContext, useState} from "react";
import {Button, FormControl, Stack, TextField} from "@mui/material";
import {PersonContext,PeopleContext} from '../pages/ModalPage'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '30rem',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '.5rem',
    boxShadow: 24,
    p: 4,
};


function AuthenticationModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [person,setPerson] = useContext(PersonContext);
    const [people,setPeople] = useContext(PeopleContext);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.fullName && person.email && person.age) {
            setPeople([...people,person]);
            setPerson({fullName: '', email: '', age: ''});
            handleClose();
        }
    }

    return (
        <div>
            <Button sx={{marginBottom:'1rem'}} onClick={handleOpen} variant={"contained"}>add a user</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack>
                        <FormControl>
                            <TextField label={'Name'}
                                       variant={'outlined'}
                                       size={'small'}
                                       sx={{margin: '.5rem'}}
                                       value={person.fullName}
                                       onChange={handleChange}
                                       name={'fullName'}
                            >Name</TextField>
                            <TextField label={'Email'}
                                       variant={'outlined'}
                                       size={'small'}
                                       sx={{margin: '.5rem'}}
                                       value={person.email}
                                       onChange={handleChange}
                                       name={'email'}
                            >Email</TextField>
                            <TextField label={'Age'}
                                       variant={'outlined'}
                                       size={'small'}
                                       sx={{margin: '.5rem'}}
                                       value={person.age}
                                       onChange={handleChange}
                                       name={'age'}
                            >Age</TextField>
                            <Button type={'submit'}
                                    variant={"contained"}
                                    sx={{margin: '1.5rem 4rem 0 4rem'}}
                                    onClick={handleSubmit}
                            >Submit</Button>
                        </FormControl>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

export default AuthenticationModal;