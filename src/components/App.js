import React from "react";
import "../styles/App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  setParagraph() {
    this.setState({ clicked: true });
  }
  render() {
    return (
      <div id="main">
        <button id="click" type="button" onClick={this.setParagraph}>
          Click
        </button>
        {this.state.clicked && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;
