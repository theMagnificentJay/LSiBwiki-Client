import React from "react";
import { Container } from "reactstrap";

import WorldMap from "./assets/WorldMap.jpg";

function World() {
  return (
    <Container className="contentContainer">
      <div>
        <div>
          <h3 className="courierNewFont">The Land Soaked in Blood</h3>
          <h5 className="courierNewFont">
            <i>Map of the Known World</i>
          </h5>
          <hr />
          <p>
            The map of the known world of the Land Soaked in Blood. Ancient
            cartographers charted the known world and its regions long ago.
          </p>
          <p>
            There are three continents, the first which has the Nelfin
            Matriarchy and the Immortal Empire. Nation of Wrights, the Dragon
            Ascendancy, the Northern Council, and the Forged Kingdoms are on the
            second continent. The shifting of the techonic plates formed a
            mountain range where the city of Tondur was built. The third content
            is the fractured lands.
          </p>
          <br />
          <img
            src={WorldMap}
            alt="LSiB World Map"
            style={{
              width: "100%",
              borderRadius: "10px",
              border: "1px solid rgba(0,0,0,0.75)",
              boxShadow: "0px 5px 20px 5px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </div>
      <br />
      <hr />
      <p>
        <i>Author(s): theMagnificentJay</i>
      </p>
    </Container>
  );
}

export default World;
