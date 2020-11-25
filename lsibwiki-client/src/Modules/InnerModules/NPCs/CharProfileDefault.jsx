import React from "react";
import { Container } from "reactstrap";

import StatBlock from "../../assets/KetaSunsStatBlock.png";

function CharProfileDefault() {
  return (
    <Container className="contentContainer">
      <br />
      <div>
        <div>
          <h3 className="courierNewFont">[NAME]</h3>
          <h5 className="courierNewFont">
            <i>[...]</i>
          </h5>
          <hr />
          <div className="flexCards">
            <img
              src={StatBlock}
              alt="Keta Suns Stat Block"
              style={{
                width: "75%",
                borderRadius: "10px",
                border: "1px solid rgba(0,0,0,0.75)",
                boxShadow: "0px 5px 20px 5px rgba(0,0,0,0.25)",
                margin: "10px auto",
                marginBottom: "25px",
              }}
            />
          </div>
          <br />
          <div>
            <div className="card tableCards">
              <p>
                <b>Statistics:</b>
              </p>
              <table className="tableHouses">
                <tr>
                  <th>Sex</th>
                  <td>[...]</td>
                  <th>Race</th>
                  <td>[...]</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>[...]</td>
                  <th>Body Type</th>
                  <td>[...]</td>
                </tr>
                <tr>
                  <th>Class</th>
                  <td>[...]</td>
                  <th>Background</th>
                  <td>[...]</td>
                </tr>
              </table>
            </div>
            <br />
            <hr />
          </div>
          <p>
            <b>Introduction</b>
          </p>
          <p>TBD [...]</p>
          <br />
          <p>
            <b>Early Life</b>
          </p>
          <p>TBD [...]</p>
          <br />
          <p>
            <b>Adulthood</b>
          </p>
          <p>TBD [...]</p>
        </div>
      </div>
    </Container>
  );
}

export default CharProfileDefault;
