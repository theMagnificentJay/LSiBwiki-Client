import React from "react";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect,
} from "react-router-dom";

//Default
import CharProfileDefault from "./NPCs/CharProfileDefault";
import MaximilianLegionnaires from "./NPCs/MaximilianLegionnaires";

function HouseLegionnaires() {
  return (
    <Router>
      <Container className="contentContainer">
        <div>
          <div>
            <h3 className="courierNewFont">House Legionnaires</h3>
            <h5 className="courierNewFont">
              <i>Swords of the Lion</i>
            </h5>
            <hr />
            <p>
              <b>Bio:</b>
            </p>
            <p>
              Known as the noble family of the lion, these members are typically
              highly involved in war time politics. Most of their members are
              paladins and trust and loyalty are held above all else. Led by
              their Patriarch Maximillian Legionnaires. Maximilian served
              faithfully with the Leonem Gladii (Swords of the Lion), a sect of
              paladins in Sanguinem and for a while were the personal guards of
              the Emperor. Maximilian was seen supporting Montachade early on in
              his career as House Legionnaires holds the values House Suns of
              racial equality and his progressive legislature.
            </p>
            <p>
              <b>History:</b>
            </p>
            <p>
              Most of the House are paladins and have served the sects
              faithfully. There has not been any corruption or scandals within
              House Legionnaires since its creation. The House is one of the
              main members of Leonem Gladii and their largest supporter, because
              of this the House has always been held in high regard by the
              Emperor and has been above reproach for many years.
            </p>
            <p>
              After Montachades assassination Maximillian and his paladins have
              been heading the investigation regarding his death. Since the
              House is the most lawfully bound no houses voted against this
              decree, although Malaqar was seen being reluctant in this.
            </p>
            <div className="card tableCards">
              <p>
                <b>Notable Family Members:</b>
              </p>
              <table className="tableHouses">
                <tr>
                  <th>Name</th>
                  <th>Brief Description</th>
                </tr>
                <tr>
                  <td>
                    <Link to="/MaximilianLegionnaires">
                      Maximilian Legionnaires
                    </Link>
                  </td>
                  <td>
                    Patriarch of House Legionnaires, and is known as the
                    incorruptible lion. His service and loyalty are unmatched
                    and unquestioned. As one of the leaders of the paladin sect
                    Leonem Gladii (Swords of the Lion), Maximilian is a highly
                    respected individual within the Sanguinem political scene.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/CharProfileDefault">Xavier Legionnaires</Link>
                  </td>
                  <td>
                    Granted increased political standing within the house due to
                    their military service. Son of one of the head members of
                    House Legionnaires. Xavier is one of the few members that
                    did not join a paladin sect. Being neither paladin or cleric
                    for a long while he was not regarded within House politics.
                    Due to his service records with the Immortal Legion and one
                    of the soldiers responsible for slaying the dragon that
                    threatened the Immortal Empire he was able to join the
                    Sellswords of the Damned. He soon after retired from the
                    mercenary company for unknown reasons, however it is
                    speculated that this was a direct order from the Patriarch
                    of his house, as the Sellswords of the Damned and House
                    Legionnaires have conflicting values about honor and
                    warfare.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/CharProfileDefault">Bellulus Legionnaires</Link>
                  </td>
                  <td>
                    Director of Foreign Policy for the House, Bellulus has been
                    a trusted advisor for the house and the Emperor. She is also
                    the director of foreign policy for the Immortal Empire.
                    Bellulus is one the head clerics for Leonem Gladii and has
                    been regarded as one of the most renowned healers in the
                    Land Soaked in Blood.
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <div className="card tableCards">
              <p>
                <b>Relations:</b>
              </p>
              <table className="tableHouses">
                <tr>
                  <th>House</th>
                  <th>Brief Description</th>
                </tr>
                <tr>
                  <td>House Suns </td>
                  <td>
                    Both houses remained friends for a long time due to
                    Maximilian always being in Montachades corner. Since
                    Montachades assassination House Legionnaires has been
                    heading the investigation.
                  </td>
                </tr>
                <tr>
                  <td>House Lamoves </td>
                  <td>
                    House Legionnaires have never trusted House Lamoves and
                    there is a hidden dark history. Maximilian and Malaqor both
                    being trusted by Montachade, and being present in his
                    company were still rarely seen speaking.
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/MaximilianLegionnaires">
            <MaximilianLegionnaires />
          </Route>
          <Route path="/CharProfileDefault">
            <CharProfileDefault />
          </Route>
          <Route path="/CharProfileDefault">
            <CharProfileDefault />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default HouseLegionnaires;
