import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MDBRow, MDBCol } from "mdbreact";
import Menu from "./layouts/Menu";
import Footerbar from "./layouts/Footerbar";

export default class Hotel extends Component {
    render() {
        return (
            <div className="page text-center">
                <Menu />
                <MDBRow>
                    <MDBCol>
                        <h1>360° Hotel Tours</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <p>Hotels & Spas Virtual Tours</p>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="3">1</MDBCol>
                    <MDBCol md="3">2</MDBCol>
                    <MDBCol md="3">3</MDBCol>
                    <MDBCol md="3">4</MDBCol>
                </MDBRow>
                <Footerbar />
            </div>
        );
    }
}

if (document.getElementById("hotel")) {
    ReactDOM.render(<Hotel />, document.getElementById("hotel"));
}
