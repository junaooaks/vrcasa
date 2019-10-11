import React, { Component } from "react";

export default class Menu extends Component {
    render() {
        return (
            <header className="page-head">
                <div className="rd-navbar-wrap">
                    <nav
                        className="rd-navbar rd-navbar-top-panel rd-navbar-light"
                        data-lg-stick-up-offset="79px"
                        data-md-device-layout="rd-navbar-fixed"
                        data-lg-device-layout="rd-navbar-static"
                        data-lg-auto-height="true"
                        data-md-layout="rd-navbar-fixed"
                        data-lg-layout="rd-navbar-static"
                        data-lg-stick-up="true"
                    >
                        <div className="container">
                            <div className="rd-navbar-inner">
                                <div className="rd-navbar-top-panel">
                                    <div className="left-side">
                                        <ul className="rd-navbar-top-links list-unstyled">
                                            <li>
                                                <a
                                                    className="text-uppercase text-ubold"
                                                    href="/singin"
                                                >
                                                    <small>Log in</small>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-uppercase text-ubold"
                                                    href="/singup"
                                                >
                                                    <small>Sign up</small>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="right-side">
                                        <address className="contact-info text-left">
                                            <span className="p">
                                                <span className="icon mdi mdi-email-open"></span>
                                                <a href="mailto:#">
                                                    info@3dcape.com
                                                </a>
                                            </span>
                                            {/*<span className="p">
                                                <span className="icon mdi mdi-phone"></span>
                                                <a href="tel:#">
                                                    1-508-500-0000
                                                </a>
        </span>*/}
                                        </address>
                                    </div>
                                </div>

                                <div className="rd-navbar-panel">
                                    <button
                                        className="rd-navbar-toggle"
                                        data-rd-navbar-toggle=".rd-navbar, .rd-navbar-nav-wrap"
                                    >
                                        <span></span>
                                    </button>

                                    <button
                                        className="rd-navbar-top-panel-toggle"
                                        data-rd-navbar-toggle=".rd-navbar, .rd-navbar-top-panel"
                                    >
                                        <span></span>
                                    </button>

                                    <div className="rd-navbar-brand">
                                        <a href="/">
                                            <img
                                                width="70"
                                                height="70"
                                                src="assets/logo.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className="rd-navbar-menu-wrap">
                                    <div className="rd-navbar-nav-wrap">
                                        <div className="rd-navbar-mobile-scroll">
                                            <div className="rd-navbar-mobile-brand">
                                                <a href="">
                                                    <li className="active">
                                                        <a href="/">
                                                            <img
                                                                width="70"
                                                                height="70"
                                                                src="assets/logo.png"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </li>
                                                </a>
                                            </div>

                                            <ul className="rd-navbar-nav ">
                                                <li>
                                                    <a href="/buy">
                                                        <span>Buy</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/rent">
                                                        <span>Rent</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/sell">
                                                        <span>Sell</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/hotel">
                                                        <span>Hotel</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/owner">
                                                        <span>Homeowner</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/realestate">
                                                        <span>Real Estate</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/photography">
                                                        <span>Photography</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
