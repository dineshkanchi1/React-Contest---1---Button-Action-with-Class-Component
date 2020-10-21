import React from "react";
import "../styles/App.css";
import Paragraph from "./Paragraph";
//import Paragraph from "./Paragraph";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="main">
        {
          <>
            <Paragraph />
          </>
        }
      </div>
    );
  }
}

export default App;
