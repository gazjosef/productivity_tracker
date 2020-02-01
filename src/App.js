import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// LAYOUT
import Calendar from "./Layout/Calendar";
import Navbar from "./Layout/Navbar/Navbar";

// PAGES
import Home from "./Pages/Home/Home";
import Journal from "./Pages/Journal/Journal";
import Goals from "./Pages/Goals/Goals";

const style = {
  position: "relative",
  margin: "50px auto"
};

class App extends Component {
  onDayClick = (e, day) => {
    alert(day);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Home />
            <Journal />
            <Goals />
          </Switch>
          <Calendar
            style={style}
            width="302px"
            onDayClick={(e, day) => this.onDayClick(e, day)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
