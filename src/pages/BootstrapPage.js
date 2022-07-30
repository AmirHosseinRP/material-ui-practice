import React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {mainNavbarItems} from "../consts/navbaritems";

const BootstrapPage = () => {
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
            >{mainNavbarItems[4].label}</Typography>

            <button className={'btn btn-danger'} type={'button'}>bootstrap button</button>
            <div className={'container'} style={{paddingRight:'30px'}}>

                <div id="demo" className="carousel slide mt-4" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"/>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"/>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"/>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Los Angeles"
                                 className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago"
                                 className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York"
                                 className="d-block w-100"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"/>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"/>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-8" style={{backgroundColor:'blue',height:'70px'}}>
                    .col-8
                    <div className="row">
                        <div className="col-6" style={{backgroundColor:'red'}}>.col-6</div>
                        <div className="col-6" style={{backgroundColor:'green'}}>.col-6</div>
                    </div>
                </div>
                <div className="col-4" style={{backgroundColor:'yellow'}}>.col-4</div>
            </div>
        </Box>
    )
}

export default BootstrapPage;