import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink instead of Link
import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';


const Banner = () => {

    const slides = [
        {
            imgUrl: '/assets/img/1.png',
            slideClass: 'one',
        },
        {
            imgUrl: '/assets/img/2.png',
            slideClass: 'two',
        },
        {
            imgUrl: '/assets/img/3.png',
            slideClass: 'three',
        },
        {
            imgUrl: '/assets/img/4.png',
            slideClass: 'four',
        },
        {
            imgUrl: '/assets/img/5.png',
            slideClass: 'five',
        },
    ]

    // useEffect to control the slides
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
            effect: 'coverflow',
            transition: {
                duration: 500,
            },
            grabCursor: true,
            centeredSlides: true, // Center the active slide
            slidesPerView: 'auto', // Number of slides per view
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 800,
                modifier: 0.5,
                slideShadows: true,
            },
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            //     reverseDirection: true,
            // },
            loop: true,
            initialSlide: 1,
            breakpoints: {
                640: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 3
                },
                1600: {
                    slidesPerView: 5
                }
            }
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="text_h1">
                            <h1>Discover the Latest Issue of
                                <span className="up_1"> Upwealth</span>
                                <span className="ma_1"> Magazine</span>
                            </h1>
                            <p>Stay informed with our insightful articles and expert advice.</p>
                            <Link className="subscribe" to="#">Subscribe Now!
                                <img className="h_hover" src="/assets/img/right1.png" alt='' />
                            </Link>
                            {/* Link to the AboutUs section */}
                            <HashLink className="dwonarrow" to="#aboutUs">
                                <img className="arrow1" src="/assets/img/arrow1.png" alt='' />
                                <img className="arrow2" src="/assets/img/arrow2.png" alt='' />
                            </HashLink>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                {
                                    slides?.map((item, index) => {
                                        return (
                                            <div key={index} className={`swiper-slide swiper-slide--${item?.slideClass} bet_bg`} style={{ backgroundImage: `url(${item?.imgUrl})`, width: "400px" }}>
                                                <div>

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;