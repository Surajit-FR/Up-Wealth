import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const Home = () => {
    const slides = [1, 2, 3, 4, 5];
    const initialSlideIndex = Math.floor(slides.length / 2);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = new Swiper(swiperRef.current, {
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
                    depth: 1000,
                    modifier: 0.5,
                    slideShadows: true,
                },
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                },
                loop: true,
                initialSlide: initialSlideIndex,
            });

            return () => {
                swiper.destroy();
            };
        }
    }, [initialSlideIndex]);

    return (
        <>
            <div className="swiper-container" style={{
                border: '1px solid black',
                width: 'auto',
                padding: '20px',
                overflow: 'hidden',
            }} ref={swiperRef}>
                <div className="swiper-wrapper"
                // style={{ border: '1px solid red' }}
                >
                    {slides.map((item, index) => (
                        <div key={index} className="swiper-slide" style={{
                            border: '1px solid black',
                            height: '550px',
                            width: '550px',
                            textAlign: 'center'
                        }}>
                            <h1>Slide {item}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;