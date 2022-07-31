import React, {useState, createContext} from "react";
import {Box, Grid, ListItem, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import {mainNavbarItems} from "../consts/navbaritems";
import AuthenticationModal from "../components/AuthenticationModal";
import List from "@mui/material/List";

export const PersonContext = createContext(undefined);
export const PeopleContext = createContext(undefined);

const ModalPage = () => {
    const [person, setPerson] = useState({
        fullName: '', email: '', age: ''
    });
    const [people, setPeople] = useState([{
        fullName: 'john', email: 'john@gamil.com', age: '22'
    }]);

    const listItemStyle = {
        backgroundColor: '#c3d5ff',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px 0 grey'
    };

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
            >{mainNavbarItems[0].label}
            </Typography>
            <PeopleContext.Provider value={[people,setPeople]}>
                <PersonContext.Provider value={[person, setPerson]}>
                    <AuthenticationModal/>
                </PersonContext.Provider>
            </PeopleContext.Provider>
            <List>
                <Grid container spacing={3} columnSpacing={4} sx={{paddingRight: '1rem'}}>
                    {people.map((person) => {
                        const {fullName,email,age} = person;
                        return <Grid item xs={12} sm={6} md={4}>
                            <ListItem sx={listItemStyle}>
                                <ListItemText><strong>Name :</strong> {fullName}</ListItemText>
                                <ListItemText><strong>Email :</strong> {email}</ListItemText>
                                <ListItemText><strong>Age :</strong> {age}</ListItemText>
                            </ListItem>
                        </Grid>
                    })}
                </Grid>
            </List>
        </Box>
    )
}

export default ModalPage;