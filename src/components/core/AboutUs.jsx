import React from 'react';
import { HashLink } from 'react-router-hash-link';

const AboutUs = () => {
    // const [clickedImages, setClickedImages] = useState([]);

    // const handleClick = (index) => {
    //     const newClickedImages = [...clickedImages];
    //     newClickedImages[index] = !newClickedImages[index];
    //     setClickedImages(newClickedImages);
    // };

    // const handleMouseLeave = (index) => {
    //     if (clickedImages[index]) {
    //         const newClickedImages = [...clickedImages];
    //         newClickedImages[index] = !newClickedImages[index];
    //         setClickedImages(newClickedImages);
    //     }
    // };

    const imageArray = [
        {
            className: "f_bottom1",
            url: "/assets/img/abouts1.png",
            hover_url: "/assets/img/abouts1_other.png",
            alt: ""
        },
        {
            className: "f_bottom2",
            url: "/assets/img/abouts2.png",
            hover_url: "/assets/img/abouts2_other.png",
            alt: ""
        },
        {
            className: "f_bottom3",
            url: "/assets/img/abouts3.png",
            hover_url: "/assets/img/abouts3_other.png",
            alt: ""
        },
        {
            className: "f_bottom4",
            url: "/assets/img/abouts4.png",
            hover_url: "/assets/img/abouts4_other.png",
            alt: ""
        },
    ];

    return (
        <>
            <div id="aboutUs" className="abouts">
                <div className="container">
                    <div className="bg_box">
                        <img className="bg_img" src="/assets/img/about-bg.png" alt='' />

                        <div className="text-cnter up_img">
                            <img src="/assets/img/up-text.png" alt='' />
                        </div>

                        {
                            imageArray?.map((item, index) => {
                                return (
                                    <div className={`${item?.className} flip-card`} key={index}>
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src={item?.url} alt={item?.alt} />
                                            </div>
                                            <div className="flip-card-back">
                                                <img src={item?.hover_url} alt={item?.alt} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div
                            className={`f_bottom1 ${clickedImages[0] ? 'active' : ''}`}
                            onClick={() => handleClick(0)}
                            onMouseLeave={() => handleMouseLeave(0)}
                        >
                            <img src={`/assets/img/abouts1${clickedImages[0] ? '_other' : ''}.png`} alt='' />
                        </div>
                        <div
                            className={`f_bottom2 ${clickedImages[1] ? 'active' : ''}`}
                            onClick={() => handleClick(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                        >
                            <img src={`/assets/img/abouts2${clickedImages[1] ? '_other' : ''}.png`} alt='' />
                        </div>
                        <div
                            className={`f_bottom3 ${clickedImages[2] ? 'active' : ''}`}
                            onClick={() => handleClick(2)}
                            onMouseLeave={() => handleMouseLeave(2)}
                        >
                            <img src={`/assets/img/abouts3${clickedImages[2] ? '_other' : ''}.png`} alt='' />
                        </div>
                        <div
                            className={`f_bottom4 ${clickedImages[3] ? 'active' : ''}`}
                            onClick={() => handleClick(3)}
                            onMouseLeave={() => handleMouseLeave(3)}
                        >
                            <img src={`/assets/img/abouts4${clickedImages[3] ? '_other' : ''}.png`} alt='' />
                        </div> */}

                        <div className="center_top ">
                            <img src="/assets/img/rectangle.png" alt='' />
                        </div>
                    </div>

                    <div className="ab_bg">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="about_text br_right">
                                    <h4>About us</h4>
                                    <h2>Grow your net worth by growing your network.</h2>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="about_text">
                                    <p>UpWealth magazine is a premier magazine for entrepreneurs by entrepreneurs. Do you ever wonder how
                                        entrepreneurs become debt-free and financially free while spending time with their loved ones and doing
                                        the thing they enjoy? Well, look no further. UPWealth has all the answers you need. Read from small to
                                        large business owners who have mastered the art of creating and maintaining business systems, sticking
                                        to their visions and persisting in their missions!The power of leveraging other businesses is unmatched.
                                    </p>
                                    <HashLink className="dwonarrow left_margan" to="#contact-section">
                                        <img className="arrow1" src="/assets/img/arrow1.png" alt='' />
                                        <img className="arrow2" src="/assets/img/arrow2.png" alt='' />
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default AboutUs;