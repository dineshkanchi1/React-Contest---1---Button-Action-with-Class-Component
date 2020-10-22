import React from "react";
import "../styles/App.css";
//import Paragraph from "./Paragraph";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: ""
    };
  }
  setParagraph = () => {
    this.setState({
      paragraph:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
    let container = document.getElementById("container");
    if (container.childElementCount === 2) return;
    let p = document.createElement("p");
    p.setAttribute("id", "para");
    p.innerHTML = this.state.paragraph;
    container.appendChild(p);
  };
  render() {
    return (
      <div id="main">
        <div id="container">
          <button id="click" onClick={this.setParagraph}>
            Click
          </button>
        </div>
      </div>
    );
  }
}

export default App;
