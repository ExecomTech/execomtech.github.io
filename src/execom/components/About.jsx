import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'Us at Execom',
        description1 = 'Team of dedicated, enthusiastic and innovative industry experts in Ecommerce with over 8 years of experience is launching end to end digital transformation solutions.',
        description2 = 'The team consists of members who had worked together seamlessly for years with expertise in different domains that compliment each other. ',
        description3 = 'We assure you with the best possible solutions to meet your end to end requirements whilst maintaining a complete visibility of the progress and guaranteed product quality.';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/execom/about.jpg" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description1}</p>
                                        <p className="description">{description2}</p>
                                        <p className="description">{description3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;