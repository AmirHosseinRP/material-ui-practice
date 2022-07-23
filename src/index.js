import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authentication from "./pages/Authentication";
import Database from "./pages/Database";
import Storage from "./pages/Storage";
import Hosting from "./pages/Hosting";
import Functions from "./pages/Functions";
import MachineLearning from "./pages/MachineLearning";
import App from "./App";

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path='authentication' element={<Authentication/>}/>
                        <Route path='database' element={<Database/>}/>
                        <Route path='storage' element={<Storage/>}/>
                        <Route path='hosting' element={<Hosting/>}/>
                        <Route path='functions' element={<Functions/>}/>
                        <Route path='machine-learning' element={<MachineLearning/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter/>)

