import React from 'react';
import Navbar from './components/Navbar';
import {Outlet} from "react-router-dom";
import Grid from '@mui/material/Grid';

function App() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default App;
