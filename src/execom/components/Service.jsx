import React, { Component } from "react";
import { FiCodesandbox, FiMonitor, FiSmartphone } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCodesandbox />,
        title: 'Digital Transformation Consultancy',
        description: 'Transform your business into an end to end digital solution which is efficient profitable user friendly innovative  with a competitive edge.'
    },
    {
        icon: <FiMonitor />,
        title: 'Website Design and Development',
        description: 'Web solution to cater all your business needs with responsiveness, user experience, functionality, innovation, performance and quality in mind.'
    },
    {
        icon: <FiSmartphone />,
        title: 'Mobile Application Development',
        description: 'Create your perfect mobile application in both iOS and Android that solves the purpose with great user experience innovation and functionality.'
    }
]

class Service extends Component{
    render(){
        let title = 'Services',
        description = 'We provide a variety of digital solution catered to meet all your business needs.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Service;
