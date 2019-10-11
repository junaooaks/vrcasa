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

export default class Photography extends Component {
    render() {
        return (
            <div className="page text-center">
                <Menu />
                <MDBContainer>
                    <MDBRow className="spacetop"></MDBRow>
                    <MDBRow>
                        <p className="h1 text-center mb-4">
                            Making Your Passion a Career
                        </p>
                    </MDBRow>
                    <MDBRow>
                        <div>
                            <h1>Add Your Profile</h1>
                            <p>
                                If you're a high-quality photographer who
                                specializes in showcasing real estate, we want
                                to invite you to join our community. By
                                attracting both realtors and private homeowners
                                who are looking to sell their properties, we'll
                                be building your potential customer base for
                                you.
                            </p>
                            <h1>Expand Your Offerings</h1>
                            <p>
                                If you haven't done so already, you may want to
                                consider broadening your product offerings to
                                include virtual tour production. It's a service
                                that's in high-demand, and your background as a
                                professional photographer gives you an
                                advantage. After all, you will already have
                                access to customers looking for still pictures
                                of their homes. Upsell a video service and help
                                your clients offer a virtual tour of their
                                properties.
                            </p>
                        </div>
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
                    </MDBRow>
                </MDBContainer>
                <Footerbar />
            </div>
        );
    }
}

if (document.getElementById("photography")) {
    ReactDOM.render(<Photography />, document.getElementById("photography"));
}
