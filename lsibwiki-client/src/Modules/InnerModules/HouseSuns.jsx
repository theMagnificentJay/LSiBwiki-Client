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

import KetaSuns from "./NPCs/KetaSuns";

function HouseSuns() {
  return (
    <Router>
      <Container className="contentContainer">
        <div>
          <div>
            <h3 className="courierNewFont">House Suns</h3>
            <h5 className="courierNewFont">
              <i>Beacons of Freedom</i>
            </h5>
            <hr />
            <p>
              <b>Bio:</b>
            </p>
            <p>
              This adolescent family is new to the Immortal Empires political
              scene, only having secured a title 7 years ago. They aspire for
              wealth and power, however with the death of Montachade, the
              previous patriarch, they have been handicapped with political
              strife and interior conflict. Keta Suns, the eldest daughter of
              Montachade Suns, was ushered into the role of matriarch and is the
              present leader of House Suns.
            </p>
            <p>
              <b>History:</b>
            </p>
            <p>
              Montachade Suns was deemed a young charming champion of Empire
              politics. His optimism and dynamic leadership helped pave the way
              for the trade treaty with the mostly secluded Wright Empire. A
              major milestone for the Immortal Empire. Alongside this
              achievement, Montachade is remembered to have made friends with
              his enemies, and been a beloved political figure in the Empire
              public. This is without noted resistance however, as Montachade
              Suns was extremely progressive when it came to racial policies. He
              fought for anti-slavery with the Drow, open-borders with
              neighbors, free trade, and racial equality. Opposing houses such
              as House Abollards opposed many of these policies, constantly
              voting in opposition and even going as far as to upstart their own
              opposing political party of conservatism and Empire Nationalism.
            </p>
            <p>
              The patriarch, Keta Suns' father Montachade Suns, was assassinated
              during a political trip along the Broken Lands countryside within
              Empire territory, to the Apothic Throne to campaign for the
              Chancellor position. Although the aggressors of such an attack
              escaped without a trace, the Suns family believes the
              assassination coup was a result of House Abollard radical
              influence. House Abollard was also competing for the same
              Chancellor position as Montachade. House Abollard continues to
              deny the accusation.
            </p>
            <p>
              With the Death of Montachade Suns, Keta Suns, the eldest daughter,
              inherited the role of matriarch for the house.
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
                    <Link to="/KetaSuns">Keta Suns</Link>
                  </td>
                  <td>
                    Eldest daughter of Montachade and current acting matriarch
                    of House Suns following his death.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/CharProfileDefault">Leia Suns</Link>
                  </td>
                  <td>
                    Sister of Keta, youngest daughter of Montachade Suns, and
                    foreign policy advisor of House Suns.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/CharProfileDefault">Fainved Suns</Link>
                  </td>
                  <td>
                    Adopted son of Montachade, and half Drow. Somewhat
                    unmotivated in the political scene and serves more as a
                    loyal commander and knight to Keta Suns and Leia Suns. Is
                    beloved by both sisters, but keeps mostly reserved.
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
                  <td>House Legionnaires </td>
                  <td>
                    Eldest daughter of Montachade and current acting matriarch
                    of House Suns following his death.
                  </td>
                </tr>
                <tr>
                  <td>House Lamoves </td>
                  <td>
                    Political Ally. Malaqar knew Montachade Suns on a person
                    level, and is dubbed a trusted ally and counsel of Keta
                    Suns.
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/KetaSuns">
            <KetaSuns />
          </Route>
          <Route path="/CharProfileDefault">
            <CharProfileDefault />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default HouseSuns;
