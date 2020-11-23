import React from "react";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect,
} from "react-router-dom";

import HouseSuns from "./InnerModules/HouseSuns";

function ImmortalEmpire() {
  return (
    <Router>
      <Container className="contentContainer">
        <div>
          <div>
            <h3 className="courierNewFont">The Immortal Empire</h3>
            <h5 className="courierNewFont">
              <i>Beacon of the Land Soaked in Blood</i>
            </h5>
            <hr />
            <p>
              The Immortal Empire is the beacon of utopianism for the Land
              Soaked in Blood. Their government is a form of bureaucracy that is
              made up of six noble houses.
            </p>
            <p>
              The six noble houses enact and vote on policies that are enforced
              within the empire. Their latest enactments were progressive racial
              reforms instilling equal rights for all races within the empire.
              This policy was pushed by Montachade from House Suns. Montachade
              was to be the next Chancellor of the governement, second only to
              the Emperor themself. Sadly, Montachade was assassinated while
              campaigning for his position which has left the bureaucracy in
              chaos as now they are unsure who should hold the position.
            </p>
            <p>The six houses of nobility are listed here below.</p>
            <div className="flexCards">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">House Suns</h5>
                  <h6 className="card-subtitle mb-2 text-muted">subtitle</h6>
                  <p className="card-text">text</p>
                  <Link to="/HouseSuns">Info</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">House Legionares</h5>
                  <h6 className="card-subtitle mb-2 text-muted">subtitle</h6>
                  <p className="card-text">text</p>
                  <Link to="/HouseLegionares">Info</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">House Lamoves</h5>
                  <h6 className="card-subtitle mb-2 text-muted">subtitle</h6>
                  <p className="card-text">text</p>
                  <Link to="/HouseLamoves">Info</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">House Bemonts</h5>
                  <h6 className="card-subtitle mb-2 text-muted">subtitle</h6>
                  <p className="card-text">text</p>
                  <Link to="/HouseBemonts">Info</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">House Alberes</h5>
                  <h6 className="card-subtitle mb-2 text-muted">subtitle</h6>
                  <p className="card-text">text</p>
                  <Link to="/HouseAlberes">Info</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">House Abollards</h5>
                  <h6 className="card-subtitle mb-2 text-muted">subtitle</h6>
                  <p className="card-text">text</p>
                  <Link to="/HouseAbollards">Info</Link>
                </div>
              </div>
            </div>
            <hr />

            <Switch>
              <Route path="/HouseSuns">
                <HouseSuns />
              </Route>
              <Route path="/HouseLegionares"></Route>
              <Route path="/HouseLamoves"></Route>
              <Route path="/HouseBemonts"></Route>
              <Route path="/HouseAlberes"></Route>
              <Route path="/HouseAbollards"></Route>
            </Switch>
          </div>
          <br />
          <hr />
          <p>
            <i>Author(s): theMagnificentJay, PapidaPumpkin</i>
          </p>
        </div>
      </Container>
    </Router>
  );
}

export default ImmortalEmpire;
