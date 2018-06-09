import React, { Component } from "react";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="main-header">
          <div className="quoteDiv">
            <h1>"Build 'em Up, Break 'em Down."</h1>
          </div>
        </div>
        <h2>The last line of defense.</h2>
        <p>
          Torbjörn Lindholm (called "Torby" by his friends) is one of the
          greatest weaponsmiths and engineers in the world. He has a low opinion
          of omnics, believing them to be incapable of empathy, instead acting
          purely on logic, and disagrees with giving them the same rights as
          humans.
        </p>
      </div>
    );
  }
}

export default App;
