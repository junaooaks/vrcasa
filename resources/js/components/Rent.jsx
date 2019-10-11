import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./layouts/Menu";
import Footerbar from "./layouts/Footerbar";

export default class Rent extends Component {
    render() {
        return (
            <div className="page text-center">
                <Menu />

                <h1>Rent house, apartament, condon, studio</h1>

                <Footerbar />
            </div>
        );
    }
}

if (document.getElementById("rent")) {
    ReactDOM.render(<Rent />, document.getElementById("rent"));
}
