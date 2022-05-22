import React, { Component } from "react";
import { Route } from "react-router-dom";

import LayarUtama from "./Components/LayarUtama";

export default class App extends Component {
  render() {
    return <Route path="/" render={() => <LayarUtama />} />;
  }
}
