import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search"

class  App extends React.Component {
  render () {
    return(
      <div>
      <Navbar />
      <Jumbotron></Jumbotron>
      <Search></Search>
    </div>
    );
  }
}


export default App;
