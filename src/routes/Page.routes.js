import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/others/LandingPage';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const PagesRoutes = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Page routes */}
            <Routes>
                <Route path='/landing/page' element={<LandingPage />} />
            </Routes>

            {/* Footer */}
            <Footer />
        </>
    )
};

export default PagesRoutes;