import React from "react";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {mainNavbarItems} from "../consts/navbaritems";
import {Link} from 'react-router-dom';


const Navbar = () => {
    let drawerWidth = 220;
    const linkStyle = {
        color: 'rgba(255,255,255,0.7)',
        '&:hover': {
            backgroundColor: '#22304f',
        }
    }
    return (
        <div>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#101F33',
                        color: 'rgba(255,255,255,0.7)',
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar/>
                <Divider/>
                <List>
                    {mainNavbarItems.map((item, index) => (
                        <Link to={item.route}
                              style={{textDecoration: 'none'}}>
                            <ListItem
                                sx={linkStyle}
                                button
                                key={item.id}
                                disablePadding
                            >
                                <ListItemIcon sx={{color: 'rgba(255,255,255,0.7)', marginLeft: '15px'}}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.label} sx={{position: 'relative', right: '10px'}}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider/>
            </Drawer>
        </div>
    )
}

export default Navbar;