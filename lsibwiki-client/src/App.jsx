import React from "react";
import { Container, Jumbotron } from "reactstrap";
import Navbar from "./Modules/Navbar";
import Content from "./Modules/Content";

function App() {
  return (
    <div className="masterContainer">
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
            <p className="navLink">The Time of Emergence</p>
            <p className="navLink">Birth of the Acolytes</p>
            <p className="navLink">The Birth of Dragons</p>
            <p className="navLink">The Immortal Lineage</p>
            <p className="navLink">Present</p>
            <br />
            <h4 className="navLink">Geography</h4>
            <hr />
            <p className="navLink">World</p>
            <br />
            <h4 className="navLink">Nations</h4>
            <hr />
            <p className="navLinkIndent">Nelfin Matriarchy</p>
            <p className="navLinkIndent">The Immortal Empire</p>
            <p className="navLinkIndent">Nation of Wright</p>
            <p className="navLinkIndent">The Northern Council</p>
            <p className="navLinkIndent">The Dragon Ascendancy</p>
            <p className="navLinkIndent">The Forged Kingdom</p>
            <p className="navLinkIndent">The Fractured Lands</p>
            <p className="navLinkIndent">The Badlands</p>
            <br />
            <h4 className="navLink">Races</h4>
            <hr />
            <p className="navLink">Human</p>
            <p className="navLink">Antumbra-Nelfin</p>
            <p className="navLink">Umbra-Nelfin</p>
            <p className="navLink">Dragonborn</p>
            <p className="navLink">Halfling</p>
            <p className="navLink">Dwarves</p>
            <p className="navLink">Orcs</p>
            <p className="navLink">Goliaths</p>
            <p className="navLink">Tieflings</p>
            <p className="navLink">Half-Breeds</p>
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
          <Content />
        </Container>
      </div>
    </div>
  );
}

export default App;
