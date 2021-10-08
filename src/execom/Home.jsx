import React, { Component, Fragment } from "react";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import Helmet from "../component/common/Helmet";
import { slideSlick } from "../page-demo/script";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Service from "./components/Service";


const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'image--main-slide',
        category: '',
        title: 'RETHINK . DESIGN . INNOVATE . TRANSFORM',
        description: 'End-to-end digital transformation solution providers',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]


class Home extends Component{
    render(){
        return(
            <Fragment> 
                <Helmet pageTitle="" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation slider-startup">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                // Start Single Slider 
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="5">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title theme-gradient-">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 // End Single Slider 
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area ptb--120">
                    <About />
                </div>
                {/* End About Area */}
                
                {/* Start Service Area */}
                <div className="service-area ptb--75  bg_image bg_image--3">
                   <div className="container">
                        <Service />
                   </div>
                </div>
                {/* End Service Area */}

                {/* Start Designer Portfolio  */}
                <div className="designer-portfolio-area ptb--120 bg_color--1">
                    <div className="wrapper plr--70 plr_sm--30 plr_md--30">
                        <Projects column="col-lg-4 col-md-6 col-sm-6 col-12" />
                    </div>
                </div>
                {/* End Designer Portfolio  */}


                {/* Start Back To Top */}
                 <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </Fragment>
        )
    }
}
export default Home;