import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Hooks from "./Hooks";



const DashboardRoutes = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/hooks" component={Hooks} />
      </Switch>
  )
} 

export default DashboardRoutes;