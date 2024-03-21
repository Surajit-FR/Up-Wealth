import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/landing/page')
    }, [navigate]);

    return (<></>)
};

export default Index;