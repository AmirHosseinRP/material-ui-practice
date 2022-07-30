import React, {useEffect, useState} from "react";
import {Avatar, Box, Grid, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import {mainNavbarItems} from "../consts/navbaritems";
import List from "@mui/material/List";

const usersList = 'https://api.github.com/users';


const MachineLearning = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(usersList);
        const users = await response.json();
        setUsers(users);
    }

    const listItemStyle = {
        backgroundColor: '#e5e5e5',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px 0 grey'
    };

    useEffect(() => {
        getUsers();
    }, []);


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
            >{mainNavbarItems[5].label}</Typography>
            <List>
                <Grid container spacing={3} columnSpacing={4} sx={{paddingRight:'1rem'}}>
                    {users.map((user) => {
                        const {id, login, avatar_url} = user;
                        return <Grid item xs={12} sm={6} md={4} key={id}>
                            <ListItem sx={listItemStyle}>
                                <ListItemAvatar>
                                    <Avatar src={avatar_url} sx={{width: '3rem', height: '3rem', marginRight: '1rem'}}>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>{login}</ListItemText>
                            </ListItem>
                        </Grid>
                    })}
                </Grid>
            </List>
        </Box>
    )
}

export default MachineLearning;