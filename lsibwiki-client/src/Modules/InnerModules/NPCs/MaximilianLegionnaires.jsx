import React from "react";
import { Container } from "reactstrap";

import StatBlock from "../../assets/MaxLegionnairesStatBlock.png";

function MaximilianLegionnaires() {
  return (
    <Container className="contentContainer">
      <br />
      <div>
        <div>
          <h3 className="courierNewFont">Maximilian Legionnaires</h3>
          <h5 className="courierNewFont">
            <i>The Lion</i>
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
                  <td>Male</td>
                  <th>Race</th>
                  <td>Human</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>53</td>
                  <th>Body Type</th>
                  <td>Athletic</td>
                </tr>
                <tr>
                  <th>Class</th>
                  <td>Paladin</td>
                  <th>Background</th>
                  <td>
                    Paladin / Politician / <i>*Former*</i> Emperor's Guard
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <hr />
          </div>
          <p>
            <b>Introduction</b>
          </p>
          <p>
            Patriarch of House Legionnaires, and is known as the incorruptible
            lion. His service and loyalty are unmatched and unquestioned by any
            in Sanguinem. As one of the leaders of the paladin sect Leonem
            Gladii (Swords of the Lion), Maximilian is a highly respected
            individual within the Sanguinem political scene.
          </p>
          <br />
          <p>
            <b>Early Life</b>
          </p>
          <p>
            Maximilian Legionnaires was born into his house before they held a
            seat on the council within Sanguinem. During his adolescent years,
            Maximilian was trained to become a knight. He strived day and night
            to bring honor and fortune to his family, as they currently were
            just blacksmiths, artisans, and weapon forgers. The Legionnaires'
            family name was renowned but they still had to dedicate much of
            their free time in order to keep their bellies full and a roof over
            their heads.
          </p>
          <p>
            Max assisted his father and mother to their daily duties, but was
            often found dabbling in the art of the sword behind their shops.
            Max’s father told him stories of brave nights that defended the land
            and slayed beasts, and from then on Max idolized these characters
            whether they were real or fiction. Eventually he became well trained
            in the sword and went as far as one could through self training. His
            mother noticed his abilities and dedications, she saved up enough
            coin to be able to send him to a sect of paladins to be trained. Max
            excelled upholding the core values they taught and art of the sword
            and shield. He was truly unrivaled by any of his peers.
          </p>
          <br />
          <p>
            <b>Adulthood</b>
          </p>
          <p>
            Eventually the time came for Max to be promoted to the sect of
            paladins and he took his oath. Max served with the paladins, known
            as Leonem Gladii (Swords of the Lion) and garnered a grandiose
            reputation. His company of paladins rose to fame on the back of
            Maximilian and finally they became chosen to be the Emperor’s
            personal guard. They served faithfully as the personal guard of the
            Emperor until the Emperor granted them a noble status as not only
            knights of the realm but as the fifth house of the Sanguinem
            council, regretfully though, they would be unable to continue their
            duties as the personal guards of the Emperor due to the possibility
            of a conflict of interest.
          </p>
          <p>
            So Max left Leonem Gladii and headed his house as Patriarch
            following his fathers death. The Emperor personally funded a wake
            for his father and all of Sanguinem and their forces attended the
            event. Max was personally bestowed the Medal of the Lion by the
            Emperor, a symbol of utmost bravery, loyalty, and dedication to the
            government, an honor only given to the few. Max is one of the only
            individuals to receive this medal while living as mostly it is given
            to those who have paid the ultimate sacrifice.
          </p>
          <p>
            Max continues to head his house as Patriarch and became long time
            friends with Montachade, a progressive and idealist within the
            council. Max had the utmost respect for Montachade and considered
            him one of his closest friends. Following the death of Montachade
            and the accusations of him being assassinated he was personally
            appointed by the council to look into this matter. Max and his house
            have been leading the investigation since its occurence.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default MaximilianLegionnaires;
