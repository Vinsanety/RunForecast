import React from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import LocalWeatherContainer from "./components/LocalWeatherContainer.js";
import Home from "./components/Home.js";
import Cams from "./components/Cams.js";
import Footer from "./components/Footer.js";

const appRoutes = (
  <Router>
    <div className="nav-routes">
      <ul className="navbar">
        <Navbar />
      </ul>
      <LocalWeatherContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/weathercam" element={<Cams />} />
      </Routes>
    </div>
  </Router>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="routes">{appRoutes}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
