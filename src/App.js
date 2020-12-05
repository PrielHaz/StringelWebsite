import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Resume from "./components/pages/Resume";
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
          <Route path="/Resume" component={Resume} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/Resume" component={ContactUsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
