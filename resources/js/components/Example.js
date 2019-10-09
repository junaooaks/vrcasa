import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./layouts/Menu";
import Footerbar from "./layouts/Footerbar";

export default class Example extends Component {
    render() {
        return (
            <div className="page text-center">
                <Menu />

                <Footerbar />
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
