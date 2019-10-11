import React, { Component } from "react";
import ReactDOM from "react-dom";

import { MDBRow, MDBBtn, MDBCol } from "mdbreact";
import Menu from "./layouts/Menu";
import Footerbar from "./layouts/Footerbar";

export default class Sell extends Component {
    render() {
        return (
            <div className="page text-center">
                <Menu />

                <MDBRow>
                    <h1>Sell your house....</h1>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="4">
                        <p>Work with Realtors, get estimate </p>
                    </MDBCol>
                    <MDBCol size="4">
                        <p>Sell it yourself, </p>
                    </MDBCol>

                    <MDBCol size="4">
                        <p>Personalized support, </p>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBBtn color="primary" href="#">
                        Find my agent
                    </MDBBtn>
                </MDBRow>
                <Footerbar />
            </div>
        );
    }
}

if (document.getElementById("sell")) {
    ReactDOM.render(<Sell />, document.getElementById("sell"));
}
