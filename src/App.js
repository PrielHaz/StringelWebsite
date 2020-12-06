import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import ResumePage from "./components/pages/ResumePage";
import SignUp from "./components/pages/SignUp";
import ContactUsPage from "./components/pages/ContactUsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/Resume" component={ResumePage} />
          <Route path="/contact" component={ContactUsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
