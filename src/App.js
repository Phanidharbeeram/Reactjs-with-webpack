import React, { Profiler } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Schooling from "./Components/Schooling";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Info from "./Components/Info";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import SmoothScroll from "./SmoothScroll/SmoothScroll";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <SmoothScroll />
        <Switch>
          <Route path="/" component={Home}></Route>

          <Route path="/Schooling" component={Schooling}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/Info" component={Info}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route exact path="/smoothscroll" component={SmoothScroll}></Route>
        </Switch>
      </div>{" "}
    </BrowserRouter>
  );
}
