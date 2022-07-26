import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {mainNavbarItems} from "../consts/navbaritems";
import {Link} from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';

const linkStyle = {
    color: 'rgba(255,255,255,0.7)',
    padding:'10px 20px 10px 10px',
    transition: 'all .2s',
    '&:hover': {
        backgroundColor: '#22304f',
    }
};

const menuStyle = {
    color: 'rgba(255,255,255,0.7)',
    borderRadius: '5px',
    transition: 'all .2s',
    '&:hover': {
        backgroundColor: '#22304f',
    }
};

function NavBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <Box>
            <AppBar component="nav" sx={{backgroundColor: '#101F33'}}>
                <Toolbar id={'toolBar'} sx={{height:'64px',paddingLeft:'24px'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2,pl:2, display: {md: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs:'none',sm: 'none', md: 'block'}}}
                    >
                        Material UI
                    </Typography>
                    <Box sx={{display: {xs:'none',sm: 'none', md: 'flex'}}}>
                        {mainNavbarItems.map((item) => (

                                <Link to={item.route}
                                      key={item.id}
                                      style={{textDecoration: 'none'}}>
                                    <ListItem
                                        sx={menuStyle} button>
                                        <ListItemText primary={item.label}/>
                                    </ListItem>
                                </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{p:3}}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            backgroundColor: '#101F33',
                            color: 'rgba(255,255,255,0.7)',
                        }
                    }}
                >
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            padding: '30px 0 10px 20px',
                            color : "#fff"
                        }}
                    >
                        Material UI
                    </Typography>
                    <List>
                        {mainNavbarItems.map((item) => (
                            <Link to={item.route}
                                  key={item.id}
                                  style={{textDecoration: 'none'}}>
                                <ListItem
                                    sx={linkStyle}
                                    button
                                    disablePadding
                                    onClick={handleDrawerToggle}
                                >
                                    <ListItemIcon sx={{color: 'rgba(255,255,255,0.7)', marginLeft: '15px'}}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} sx={{position: 'relative', right: '10px'}}/>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Drawer>
            </Box>
        </Box>
    );
}

export default NavBar;
