import React from "react";
import { Container } from "reactstrap";

function HouseDefault() {
  return (
    <Container className="contentContainer">
      <div>
        <div>
          <h3 className="courierNewFont">House [NAME]</h3>
          <h5 className="courierNewFont">
            <i>Subtitle</i>
          </h5>
          <hr />
          <p>
            <b>Bio:</b>
          </p>
          <p>bio here</p>
          <p>
            <b>History:</b>
          </p>
          <p>history here</p>
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
                <td>[NAME]</td>
                <td>[...]</td>
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
                <td>House [...]</td>
                <td>TBD [...]</td>
              </tr>
              <tr>
                <td>House [...]</td>
                <td>TBD [...]</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HouseDefault;
