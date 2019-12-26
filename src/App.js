import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Schooling from "./Components/Schooling";
import Info from "./Components/Info";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import SkillCard from "./Components/SkillCard";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar
            style={{
              dispaly: "inline",
              width: "200px",
              heigght: "100%"
            }}
          />

          {/** <Profile />
<SkillCard />
v
<Skills /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Schooling" component={Schooling} />
            <Route path="/Info" component={Info} />
            <Route path="/skills" component={Skills} />

            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
// <Home />

// {/** <BrowserRouter>
//       <div >
//         <NavBar
//           style={{
//             dispaly: "inline",
//             width: "200px",
//             heigght: "100%"
//           }}
//         />

//         {/** <Profile />
// <SkillCard />
// v
// <Skills /> */}
// {/**<Switch>
// <Route exact path="/" component={Home} />
// <Route path="/Schooling" component={Schooling} />
// <Route path="/Info" component={Info} />
// <Route path="/skills" component={Skills} />

// <Route path="/profile" component={Profile} />
// </Switch>
// </div>{" "}
// </BrowserRouter>
// */}
