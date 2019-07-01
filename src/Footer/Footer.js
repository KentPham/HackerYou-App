import React, {Component} from 'react';
import logo from "./img/Logo.png";
import insta from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import youtube from "./img/youtube.svg";
import twitter from "./img/twitter.svg";

class Footer extends Component {

    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <a href="/home">
                                <img
                                    className="Logo"
                                    src={logo} width="75"
                                    alt="TIFF Logo"
                                />
                            </a>
                        </div>
                        <div className="col-4"></div>
                        <div className="col 4">
                            <div className="row align-items-center" style={{height: "100%"}}>
                                <div className="col-3">
                                    <a href="https://twitter.com/TIFF_net">
                                        <img
                                            className="social-logo"
                                            src={twitter} width="75"
                                            alt="TIFF Logo"
                                        />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="https://www.facebook.com/TIFF">
                                        <img
                                            className="social-logo"
                                            src={facebook} width="75"
                                            alt="TIFF Logo"
                                        />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="https://www.instagram.com/tiff_net/">
                                        <img
                                            className="social-logo"
                                            src={insta} width="75"
                                            alt="TIFF Logo"
                                        />
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href="https://www.youtube.com/user/TIFF">
                                        <img
                                            className="social-logo"
                                            src={youtube} width="75"
                                            alt="TIFF Logo"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;