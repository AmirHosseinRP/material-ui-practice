import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ModalPage from "./pages/ModalPage";
import AccordionPage from "./pages/AccordionPage";
import FormPage from "./pages/FormPage";
import CookiePage from "./pages/CookiePage";
import BootstrapPage from "./pages/BootstrapPage";
import ApiPage from "./pages/ApiPage";
import App from "./App";

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path='modal-page' element={<ModalPage/>}/>
                        <Route path='accordion-page' element={<AccordionPage/>}/>
                        <Route path='form-page' element={<FormPage/>}/>
                        <Route path='cookie-page' element={<CookiePage/>}/>
                        <Route path='bootstrap-page' element={<BootstrapPage/>}/>
                        <Route path='api-page' element={<ApiPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter/>)

