import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const PagesRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </>
    )
};

export default PagesRoute;