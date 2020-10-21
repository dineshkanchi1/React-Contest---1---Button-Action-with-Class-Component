import React from "react";
import "../styles/App.css";
class Paragraph extends React.Component {
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
  };
  render() {
    return (
      <>
        <button id="click" onClick={this.setParagraph}>
          Click
        </button>
        <p id="para">{this.state.paragraph}</p>
      </>
    );
  }
}

export default Paragraph;
