import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./layouts/Menu";
import Footerbar from "./layouts/Footerbar";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBInput
} from "mdbreact";

export default class Realestate extends Component {
    render() {
        return (
            <div className="page text-center">
                <Menu />

                <MDBContainer>
                    <MDBRow></MDBRow>
                    <MDBRow>
                        <p className="h1 text-center mb-4">Real Estate</p>
                    </MDBRow>
                    <MDBRow>
                        <p>Sing in for free.</p>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h5 text-center mb-4">
                                    Write to us
                                </p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Your name"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Subject"
                                        icon="tag"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        type="textarea"
                                        rows="2"
                                        label="Your message"
                                        icon="pencil-alt"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn outline color="secondary">
                                        Send{" "}
                                        <MDBIcon
                                            far
                                            icon="paper-plane"
                                            className="ml-1"
                                        />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                        <MDBCol md="6">
                            <h1>List Your Properties</h1>
                            <p>
                                Finally, don't forget to list your current
                                properties on our site. As we drive traffic to
                                our web page, we want to showcase the best homes
                                available for sale. Our site will make it easy
                                for potential buyers to sort and review their
                                top choices and take advantage of the beautiful
                                photography and virtual tours to learn more
                                about their potential home.
                            </p>
                            <h1>Add Your Profile</h1>
                            <p>
                                Tell our visitors more about you and your real
                                estate business. Tout your strengths. Showcase
                                your skills. And attract more buyers and sellers
                                to work with you to manage their real estate
                                needs.
                            </p>
                            <h1>Offer a Virtual Tour</h1>
                            <p>
                                Although virtual tours used to be rare, they are
                                more commonplace today. Potential buyers expect
                                to be able to gather a great deal of information
                                before they ever jump in their car to physically
                                go to a house. Work with our virtual tour
                                creators to generate an attractive and appealing
                                first visit to all your properties. Allow
                                potential buyers to explore both the inside of a
                                home with 360-degree views and take a virtual
                                walk around the outside of the home. Our virtual
                                tour experts can help you put together a package
                                that will boost your inquiries.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footerbar />
            </div>
        );
    }
}

if (document.getElementById("realestate")) {
    ReactDOM.render(<Realestate />, document.getElementById("realestate"));
}
