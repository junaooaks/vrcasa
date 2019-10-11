import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./layouts/Menu";
import Footerbar from "./layouts/Footerbar";

export default class Buy extends Component {
    render() {
        return (
            <div className="page text-center">
                <Menu />

                <h1>buy</h1>

                <Footerbar />
            </div>
        );
    }
}

if (document.getElementById("buy")) {
    ReactDOM.render(<Buy />, document.getElementById("buy"));
}
