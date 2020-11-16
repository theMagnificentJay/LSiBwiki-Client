import React from "react";
import { Container, Jumbotron } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Navbar from "./Modules/Navbar";
import Content from "./Modules/Content";
import Home from "./Modules/Home";
import Emergence from "./Modules/Emergence";
import Acolytes from "./Modules/Acolytes";
import Dragons from "./Modules/Dragons";
import ImmortalLineage from "./Modules/ImmortalLineage";
import Present from "./Modules/Present";
import World from "./Modules/World";

function App() {
  return (
    <Router className="masterContainer">
      <Navbar />
      <div className="mainContainer">
        <Container className="nav courierNewFont">
          <div className="innerNav">
            <h3 className="navLink" style={{ color: "rgb(140, 20, 20)" }}>
              Categories
            </h3>
            <br />
            <h4 className="navLink">History</h4>
            <hr />
            <p>
              <Link to="/Emergence" className="navLink">
                The Time of Emergence
              </Link>
            </p>
            <p>
              <Link to="/Acolytes" className="navLink">
                Birth of the Acolytes
              </Link>
            </p>
            <p>
              <Link to="/Dragons" className="navLink">
                The Birth of Dragons
              </Link>
            </p>
            <p>
              <Link to="/ImmortalLineage" className="navLink">
                The Immortal Lineage
              </Link>
            </p>
            <p>
              <Link to="/Present" className="navLink">
                Present
              </Link>
            </p>
            <br />
            <h4>Geography</h4>
            <hr />
            <Link to="/World">
              <p>World</p>
            </Link>
            <br />
            <h4>Nations</h4>
            <hr />
            <Link to="/">
              <p>Nelfin Matriarchy</p>
            </Link>
            <Link to="/">
              <p>The Immortal Empire</p>
            </Link>
            <Link to="/">
              <p>Nation of Wright</p>
            </Link>
            <Link to="/">
              <p>The Northern Council</p>
            </Link>
            <Link to="/">
              <p>The Dragon Ascendancy</p>
            </Link>
            <Link to="/">
              <p>The Forged Kingdom</p>
            </Link>
            <Link to="/">
              <p>The Fractured Lands</p>
            </Link>
            <Link to="/">
              <p>The Badlands</p>
            </Link>

            <br />
            <h4 className="navLink">Races</h4>
            <hr />
            <Link to="/">
              <p className="navLink">Human</p>
            </Link>
            <Link to="/">
              <p className="navLink">Antumbra-Nelfin</p>
            </Link>
            <Link to="/">
              <p className="navLink">Umbra-Nelfin</p>
            </Link>
            <Link to="/">
              <p className="navLink">Dragonborn</p>
            </Link>
            <Link to="/">
              <p className="navLink">Halfling</p>
            </Link>
            <Link to="/">
              <p className="navLink">Dwarves</p>
            </Link>
            <Link to="/">
              <p className="navLink">Orcs</p>
            </Link>
            <Link to="/">
              <p className="navLink">Goliaths</p>
            </Link>
            <Link to="/">
              <p className="navLink">Tieflings</p>
            </Link>
            <Link to="/">
              <p className="navLink">Half-Breeds</p>
            </Link>
          </div>
        </Container>

        <Container className="displayContainer">
          <Jumbotron className="crimsonColorBackground courierNewFont">
            <div>
              <h1>Land Soaked in Blood Wiki</h1>
              <hr />
              <p>
                A fantasy setting for tabletop roleplaying games. The Land
                Soaked in Blood is a dark fantasy setting built upon the theme
                that morality is not black and white and lies somewhere within
                the grey.
              </p>
            </div>
          </Jumbotron>

          {/* <Content /> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Emergence">
              <Emergence />
            </Route>
            <Route path="/Acolytes">
              <Acolytes />
            </Route>
            <Route path="/Dragons">
              <Dragons />
            </Route>
            <Route path="/ImmortalLineage">
              <ImmortalLineage />
            </Route>
            <Route path="/Present">
              <Present />
            </Route>
            <Route path="/World">
              <World />
            </Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
