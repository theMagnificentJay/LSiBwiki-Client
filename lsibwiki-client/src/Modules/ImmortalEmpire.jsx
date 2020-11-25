import React from "react";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect,
} from "react-router-dom";

//Testing House Default
import HouseDefault from "./InnerModules/HouseDefault";

import HouseSuns from "./InnerModules/HouseSuns";
import HouseLegionnaires from "./InnerModules/HouseLegionnaires";
import HouseLamoves from "./InnerModules/HouseLamoves";

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
                  <h5 className="card-title courierNewFont bold">House Suns</h5>
                  <h6 className="card-subtitle mb-2 text-muted courierNewFont oblique">
                    Beacons of Freedom
                  </h6>
                  <p className="card-text">
                    This adolescent family is new to the Immortal Empires
                    political scene, only having secured a title 7 years ago.
                    They aspire for wealth and power, however with the death of
                    Montachade, the previous patriarch, they have been
                    handicapped with political strife and interior conflict.
                    Keta Suns, the eldest daughter of Montachade Suns, was
                    ushered into the role of matriarch and is the present leader
                    of House Suns.
                  </p>
                  <Link to="/HouseSuns">Further Reading</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title courierNewFont bold">
                    House Legionares
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted courierNewFont oblique">
                    Swords of the Lion
                  </h6>
                  <p className="card-text">
                    Known as the noble family of the lion, these members are
                    typically highly involved in war time politics. Most of
                    their members are paladins and trust and loyalty are held
                    above all else. Led by their Patriarch Maximillian
                    Legionnaires. Maximilian served faithfully with the Leonem
                    Gladii (Swords of the Lion), a sect of paladins in Sanguinem
                    and for a while were the personal guards of the Emperor.
                    Maximilian was seen supporting Montachade early on in his
                    career as House Legionnaires holds the values House Suns of
                    racial equality and his progressive legislature.
                  </p>
                  <Link to="/HouseLegionares">Further Reading</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title courierNewFont bold">
                    House Lamoves
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted courierNewFont oblique">
                    The Elders
                  </h6>
                  <p className="card-text">
                    An elder in the political scene, house Lamoves is led by
                    patriarch Malaqar Lamoves. Malaqar Lamoves has two sons and
                    a wife. The family has been a long and close ally to House
                    Suns. Malaqar Lamoves having been on the campaigning trip
                    with Montachade Suns, also believes House Abollards to be
                    the cause of the Patriarchs assassination. House Lamoves is
                    made of mostly human family members, however they have
                    vocalized their support for Nelfin influence and policies
                    through the Empire.
                  </p>
                  <Link to="/HouseLamoves">Further Reading</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title courierNewFont bold">
                    House Bemonts
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted courierNewFont oblique">
                    subtitle
                  </h6>
                  <p className="card-text">text</p>
                  <Link to="/HouseBemonts">Further Reading</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title courierNewFont bold">
                    House Alberes
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted courierNewFont oblique">
                    subtitle
                  </h6>
                  <p className="card-text">text</p>
                  <Link to="/HouseAlberes">Further Reading</Link>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title courierNewFont bold">
                    House Abollards
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted courierNewFont oblique">
                    subtitle
                  </h6>
                  <p className="card-text">text</p>
                  <Link to="/HouseAbollards">Further Reading</Link>
                </div>
              </div>
            </div>
            <hr />

            <Switch>
              <Route path="/HouseSuns">
                <HouseSuns />
              </Route>
              <Route path="/HouseLegionares">
                <HouseLegionnaires />
              </Route>
              <Route path="/HouseLamoves">
                <HouseLamoves />
              </Route>
              <Route path="/HouseBemonts">
                <HouseDefault />
              </Route>
              <Route path="/HouseAlberes">
                <HouseDefault />
              </Route>
              <Route path="/HouseAbollards">
                <HouseDefault />
              </Route>
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
