import React, { Component } from "react";

export default class Footerbar extends Component {
    render() {
        return (
            <footer className="section-relative section-top-66 section-bottom-34 page-footer bg-gray-base context-dark">
                <div className="container">
                    <div className="row justify-content-md-center text-xl-left">
                        <div className="col-md-8 col-lg-12">
                            <div className="row justify-content-sm-center">
                                <div className="col-sm-5 offset-top-41 offset-sm-top-0 text-sm-left col-lg-3 col-xl-2 order-xl-3">
                                    <h6 className="text-uppercase text-spacing-60">
                                        Useful Links
                                    </h6>
                                    <div className="d-block">
                                        <div className="d-inline-block">
                                            <ul className="list list-marked">
                                                <li>
                                                    <a href="#">Photography</a>
                                                </li>
                                                <li>
                                                    <a href="#">Agents</a>
                                                </li>
                                                <li>
                                                    <a href="#">Mortgages</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 offset-top-41 col-lg-5 offset-lg-top-0 text-lg-left col-xl-4 order-xl-2">
                                    <h6 className="text-uppercase text-spacing-60">
                                        Newsletter
                                    </h6>
                                    <p>
                                        Keep up with the latest company news and
                                        events. Enter your e-mail and subscribe
                                        to our newsletter.
                                    </p>
                                    <div className="offset-top-30">
                                        <form
                                            className="rd-mailform"
                                            data-form-output="form-subscribe-footer"
                                            data-form-type="subscribe"
                                            method="post"
                                            action="bat/rd-mailform.php"
                                        >
                                            <div className="form-group">
                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-prepend">
                                                        <span className="input-group-text input-group-icon">
                                                            <span className="mdi mdi-email"></span>
                                                        </span>
                                                    </span>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Type your E-Mail"
                                                        type="email"
                                                        name="email"
                                                        data-constraints="@Required @Email"
                                                    />
                                                    <span className="input-group-append">
                                                        <button
                                                            className="btn btn-sm btn-primary"
                                                            type="submit"
                                                        >
                                                            Subscribe
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className="form-output"
                                                id="form-subscribe-footer"
                                            ></div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-sm-12 offset-top-66 col-xl-3 order-xl-1 offset-xl-top-0">
                                    <div className="footer-brand">
                                        <a href="index.html">
                                            <img
                                                width="100"
                                                height="100"
                                                src="assets/logo.png"
                                                alt="3D Cape Views"
                                            />
                                        </a>
                                    </div>
                                    <p className="text-darker offset-top-4 inset-right-15 inset-xl-right-0 inset-xl-left-15">
                                        3D Cape Views
                                    </p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a
                                                className="icon fa fa-facebook icon-xxs icon-circle icon-darkest-filled"
                                                href="#"
                                            ></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                className="icon fa fa-youtube icon-xxs icon-circle icon-darkest-filled"
                                                href="#"
                                            ></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                className="icon fa fa-instagram icon-xxs icon-circle icon-darkest-filled"
                                                href="#"
                                            ></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                className="icon fa fa-linkedin icon-xxs icon-circle icon-darkest-filled"
                                                href="#"
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
