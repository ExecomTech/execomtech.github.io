import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { TabPanel, Tabs } from 'react-tabs';

const ProjectsList = [
    {
        image: '01',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
        category: 'Web Design',
        title: 'Design is a creative part'
    },
    {
        image: '02',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
        category: 'Mobile App',
        title: 'The service provide for designer'
    },
    {
        image: '03',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
        category: 'Web Design',
        title: 'Mobile App landing Design'
    },
]

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            tab2: 0,
            tab3: 0,
            tab4: 0,
            isOpen: false,
        };
    }
    render() {
        const {column } = this.props;
        const { tab1, isOpen } = this.state;
        const title = 'Our Portfolio';
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs>
                    <TabPanel className="row row--35">
                        {ProjectsList.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={ProjectsList[tab1].bigImage}
                                        nextSrc={ProjectsList[(tab1 + 1) % ProjectsList.length]}
                                        prevSrc={ProjectsList[(tab1 + ProjectsList.length - 1) % ProjectsList.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab1: (tab1 + ProjectsList.length - 1) % ProjectsList.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + 1) % ProjectsList.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}


export default Projects
