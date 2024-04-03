import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isLink2_Hovered, setIsLink2_Hovered] = useState(false);
    const [isLink3_Hovered, setIsLink3_Hovered] = useState(false);

    return (
        <>
            <footer className="footer_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-3">
                            <div className="logo_footer">
                                <img src="/assets/img/logo.png" alt='' />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="ul_footer">
                                <ul className="footer_ul">
                                    <li>
                                        <Link to="#">Home</Link>
                                    </li>
                                    <li
                                        onMouseEnter={() => setIsLink2_Hovered(true)}
                                        onMouseLeave={() => setIsLink2_Hovered(false)}
                                    >
                                        <Link to="#">Kaltech <span className={isLink2_Hovered ? 'active' : ''}>Consultancy</span></Link>
                                    </li>
                                    <li
                                        onMouseEnter={() => setIsLink3_Hovered(true)}
                                        onMouseLeave={() => setIsLink3_Hovered(false)}
                                    >
                                        <Link to="#">Insurance Life <span className={isLink3_Hovered ? 'active' : ''}>Mafazine</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                            <ul className="footer_icon">
                                <li>
                                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa-brands fa-x-twitter"></i></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <p className="text-center ft_text">© 2022 - 2024 | Alrights reserved by Kaltech Designs</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;