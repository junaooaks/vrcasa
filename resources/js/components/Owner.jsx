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

export default class Owner extends Component {
    render() {
        return (
            <div className="page text-center">
                <Menu />
                <MDBContainer>
                    <MDBRow className="spacetop"></MDBRow>
                    <MDBRow>
                        <p className="h1 text-center mb-4">
                            Make faster your sell or rent
                        </p>
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
                            <h1>
                                We're here to help you sell or rent your home!
                            </h1>
                            <p>
                                If you're beginning the process of selling or
                                renting your home, you may feel a bit
                                overwhelmed. Sure, there are a lot of resources
                                available today, but where do you begin? Join
                                our team that's focused on bringing together
                                homeowners, real estate agents, photographers,
                                and virtual tour creators. We can work together
                                to help you find the right buyer or renter for
                                your home.
                            </p>
                            <h1>Add Your Profile</h1>
                            <p>
                                Tell our visitors more about you and your
                                property. Although you want to be complete about
                                amenities and features your home offers, don't
                                forget to tell your unique story. Everyone loves
                                to be part of a great tale. Share the historic
                                story of your home. Explain why it has unusual
                                features. Help potential buyers or renters
                                envision themselves taking advantage of all your
                                home has to offer.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footerbar />
            </div>
        );
    }
}

if (document.getElementById("owner")) {
    ReactDOM.render(<Owner />, document.getElementById("owner"));
}
