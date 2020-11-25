import React from "react";
import { Container } from "reactstrap";

function HouseLamoves() {
  return (
    <Container className="contentContainer">
      <div>
        <div>
          <h3 className="courierNewFont">House Lamoves</h3>
          <h5 className="courierNewFont">
            <i>The Elders</i>
          </h5>
          <hr />
          <p>
            <b>Bio:</b>
          </p>
          <p>
            An elder in the political scene, house Lamoves is led by patriarch
            Malaqar Lamoves. Malaqar Lamoves has two sons and a wife. The family
            has been a long and close ally to House Suns. Malaqar Lamoves having
            been on the campaigning trip with Montachade Suns, also believes
            House Abollards to be the cause of the Patriarchs assassination.
            House Lamoves is made of mostly human family members, however they
            have vocalized their support for Nelfin influence and policies
            through the Empire.
          </p>
          <p>
            <b>History:</b>
          </p>
          <p>House Lamoves has been led by Patriarch Malaqar for decades.</p>
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
                <td>Malaqar Lamoves</td>
                <td>
                  Patriarch of House Lamoves, and has been leading the house for
                  decades. In recent years has been personal council for Keta
                  Suns.
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
                <td>House Suns</td>
                <td>
                  Political allies and Malaqar and his house have been assisting
                  House Suns following the assassination of the Patriarch.
                  Malaqar himself helping and consoling Keta Suns during this
                  time.
                </td>
              </tr>
              <tr>
                <td>House Legionnaires</td>
                <td>
                  House Legionnaires has a distrust towards House Lamoves and
                  they equally distrust them as well. Considered political
                  rivals, it is surprising that they have remained somewhat
                  peaceful throughout the years.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HouseLamoves;
