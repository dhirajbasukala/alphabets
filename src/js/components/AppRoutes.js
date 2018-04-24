import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Barnamala from "./Barnamala";

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    };
    this.gotoBarnamala= this.gotoBarnamala.bind(this);
  }
  gotoBarnamala(){
    return <Barnamala letters={this.state.letters} />;
  }
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route exact path="/" render={this.gotoBarnamala} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Letters;