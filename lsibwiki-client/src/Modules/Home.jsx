import React from "react";
import { Container } from "reactstrap";

function Home() {
  return (
    <Container className="contentContainer">
      <div>
        <div>
          <h3 className="courierNewFont">Welcome</h3>
          <h5 className="courierNewFont">
            <i>Introductions to the Wiki</i>
          </h5>
          <hr />
          <p>
            Hello roleplayers and curious ones! Welcome to the Land Soaked in
            Blood Wiki. In this Wiki you will find lore pages and information
            about much of the known world of the Land Soaked in Blood, the story
            of its Genesis and all the articles of lore up until present times.
          </p>
          <p>
            This wiki is one of the main resources for a roleplaying game
            utilizing the{" "}
            <i>
              <b> Land Soaked in Blood </b>
            </i>{" "}
            dark fantasy setting. It was created to be used with
            <i>
              {" "}
              <b>Dungeons and Dragons 5e</b>{" "}
            </i>
            however, with some slight adjustment it could be used as a homebrew
            setting within many different rulesets.
          </p>
          <br />
          <h3 className="courierNewFont">How to Use</h3>
          <h5 className="courierNewFont">
            <i>Technical Introductions</i>
          </h5>
          <hr />
          <p>
            The webpage has a categorised list on the left that is seperately
            scrollable. To select an article, simply hover your cursor over the
            link, then the text will turn oblique, underlined, and red. Click
            the link and the page will render that article. This wiki is created
            as a single page application, so no need to load the page for every
            article you select.
          </p>
          <p>
            You still have the ability to open a link in a new tab as you would
            normally be able to with other webpage applications and websites.
            This way you can quickly reference multiple articles at once.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
