import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./layouts/Menu";
import Footerbar from "./layouts/Footerbar";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBBtn
} from "mdbreact";

const FormPage = () => {
    return (
        <div>
            <Menu />

            <MDBContainer className="spacetop">
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h4 text-center py-4">
                                        Sign up
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
                                            label="Confirm your email"
                                            icon="exclamation-triangle"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Your password"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Register
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Footerbar />
        </div>
    );
};

export default class Singup extends Component {
    render() {
        return <FormPage />;
    }
}

if (document.getElementById("singup")) {
    ReactDOM.render(<Singup />, document.getElementById("singup"));
}
