import React, { Component } from "react";
import { Link } from 'react-router-dom';


const logoImageMap = {
    'light': <img src="/assets/images/logo/logo-light.png" alt="ExecomTech" />,
    'dark': <img src="/assets/images/logo/logo-dark.png" alt="ExecomTech" />,
    'gradient': <img src="/assets/images/logo/logo-gradient.png" alt="ExecomTech" />,
    'symbol-dark' : <img src="/assets/images/logo/logo-symbol-dark.png" alt="ExecomTech" />,
    'symbol-light': <img src="/assets/images/logo/logo-symbol-light.png" alt="ExecomTech" />,
    'symbol-gradient': <img src="/assets/images/logo/logo-symbol-gradient.png" alt="ExecomTech" />,
    'default': <img src="/assets/images/logo/logo.png" alt="ExecomTech" />
}

class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }


    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo='default', color='default-color' } = this.props;
        const logoUrl = logoImageMap[logo];

        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-btn">
                            <Link className="rn-btn" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;