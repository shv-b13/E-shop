import React, {Component} from 'react';
import './Header.css';
import shopLogo from "./img/e-shop(logo).svg"
import iconPocket from "./img/pocket.svg"
import iconPerson from "./img/Person.svg"
import iconHeart from "./img/Heart.svg"
import iconZoom from "./img/Lupa.svg"


class Header extends Component {

    render(){
        return (
            <div>
                <div className="top-header">
                    <div/>
                    <div className="left-top-header">
                        <p>БЛОГ</p>
                        <p>О НАС</p>
                        <p>КОНТАКТЫ</p>
                    </div>
                    <div/>
                    <div className="right-top-header">
                        <div className="phoneNumber">
                            <p>+996 XXX XX XX XX</p>
                            <p>+996 XXX XX XX XX</p>
                        </div>
                        <div className="faq">F.A.Q.</div>
                        <div className="language">
                            <select className="lang-menu">
                                <option className="lang-option" selected>KG</option>
                                <option className="lang-option">RUS</option>
                                <option className="lang-option">ENG</option>
                            </select>
                        </div>
                    </div>
                    <div/>
                </div>
                <div className="bottom-header">
                    <div className="header-logo">
                        <img src={shopLogo} alt={"logo"}/>
                    </div>
                    <div className="header-section">
                        <div className="section-men">
                            <p>MEN</p>
                        </div>
                        <div className="section-line"/>
                        <div className="section-women">
                            <p>WOMEN</p>
                        </div>
                    </div>
                    <div className="header-search">
                        <div className="search-field">
                            <p>Искать по запросу...</p>
                            <img src={iconZoom} alt=""/>
                        </div>
                    </div>
                    <div className="header-icons">
                        <img className="header-icons-item" src={iconPerson} alt=""/>
                        <img className="header-icons-item" src={iconHeart} alt=""/>
                        <img className="header-icons-item" src={iconPocket} alt=""/>
                    </div>
                </div>
            </div>
        );
    }

}


export default Header;
