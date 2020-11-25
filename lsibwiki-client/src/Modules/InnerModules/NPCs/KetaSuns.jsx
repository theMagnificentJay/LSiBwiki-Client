import React from "react";
import { Container } from "reactstrap";

import StatBlock from "../../assets/KetaSunsStatBlock.png";

function KetaSuns() {
  return (
    <Container className="contentContainer">
      <br />
      <div>
        <div>
          <h3 className="courierNewFont">Keta Suns</h3>
          <h5 className="courierNewFont">
            <i>The Serpent Princess</i>
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
                  <td>Female</td>
                  <th>Race</th>
                  <td>Half-Tiefling</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>26 years</td>
                  <th>Body Type</th>
                  <td>Athletic</td>
                </tr>
                <tr>
                  <th>Class</th>
                  <td>Rogue / Fighter</td>
                  <th>Background</th>
                  <td>Crime Lord / Politician</td>
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
            Keta Suns is the eldest daughter of Montachade Suns, a visionary in
            progressive politics for Sanguinem located in the Immortal Empire.
            From a very young age Keta was surrounded by noble politics and the
            aristocratic lifestyle since she was one of the children of
            Montachade. During her early years she was taught in the ways of
            politics and debate and through her years of being groomed in the
            skills of communication she became a fierce political rival for
            House Suns within the Sanguinem Noble Council. Bureaucratic politics
            can be difficult for some but due to Keta Suns’ early upbringings
            she received an unmatched education. Being highly intellectual and
            fierce within debate and politics she was one of Montachades
            greatest assets in his path to becoming Chancellor. However during
            an election campaign to the Fractured Lands, still within the
            borders of the Immortal Empire near the Apothic Throne, Montachade
            was assassinated.
          </p>
          <br />
          <p>
            <b>Early Life</b>
          </p>
          <p>
            Growing up Keta was tutored and molded into an intelligent
            politician by Montachade Suns, her father. Keta was the oldest
            daughter and was always the shining jewel of Montachade’s children.
            At an early age Keta liked to wander the city and used to escape the
            noble walls to explore the surrounding city. This became so much an
            issue that for a while Keta always had a personal bodyguard. During
            her adolescent years Keta became involved in criminal activity
            within Sanguinem, but this information was kept from the public eye.
            She was the shining pupil of Montachade and he expected nothing but
            perfection from his first daughter. Eventually Montachade demanded
            she leave any involvement with criminal activity or he would disown
            her, which would cause her to lose her noble status. Keta did not
            want her power taken away from her and so she agreed to her fathers
            ultimatum, or so he thought.
          </p>
          <br />
          <p>
            <b>Adulthood</b>
          </p>
          <p>
            Following in her fathers footsteps Keta became a fierce politician
            and helped aid her fathers success. Together they were an
            unstoppable force. Montachade remained unaware of Keta’s criminal
            involvement, but she continued to use this involvement to enforce
            her fathers policies. Montachade was a great persuader, but what of
            those who could not be swayed in his policies? Keta would enforce
            his will within the council and became known as the shadow enforcer
            of the council. Some know the truth of Keta’s corruption, some
            believe it slander her image, and others simply do not know her true
            character. Keta was good at hiding any evidence of her corruption.
          </p>
          <p>
            Keta was expertly skilled in the arts of deception, persuasion,
            stealth, and all around skullduggery, and using these skills she
            built a criminal empire. Keta has a very involved position with
            Sanguinem politics but she is one of the most successful criminal
            overlords in the undercity of Sanguinem. Under the guise of the
            Serpent Princess and her alter ego very few know of her true
            identity. Her disguise and alter ego work so well in fact, that
            corrupt officials in government fail to recognize her as Keta Suns.
            She is the wittiest and most ruthless criminal overlord the
            Undercity has ever seen and is on a path to becoming the first to
            control all of crime in Sanguinem. Within the criminal underworld
            she is known as the Serpent Princess and her name is justified by
            her actions. Keta is rarely caught in a lie and like a serpent is
            deceivious. Other criminal organizations have been unable to thwart
            any of her plans and she remains unrivaled by any of her peers. The
            Serpent Princess is also rumored to have worked with the Sellswords
            of the Damned on many occasions and are believed to either have an
            agreement with them to continue to conduct criminal business or are
            her puppet and under her control, although either situation is
            purely speculation.
          </p>
          <p>
            In recent years Keta began meeting with Patriarch of House Lamoves
            Malaqar Lamoves. Neither Malaqar of Keta have revealed their true
            intentions to one another, but have been increasing the times they
            meet. During Montachades campaign to the Fractured States she joined
            Malaqar and her father, who would meet his end to a successful
            assanination against him. Reports state the Keta was seen distraught
            and deeply saddened during this time and was recorded being
            comforted by Malaqar when being questioned by these events. During
            the council meetings when she was being questioned, multiple members
            within the meeting accused House Abbolards of the act since their
            political philosophies directly conflict with the policies
            Montachade was proposing. Of course they denied these claims and a
            trial hearing date is currently being decided on.
          </p>
          <p>
            During the meetings following the death of Keta’s father it was
            agreed that she would be acting Matriarch of House Suns and the
            council is currently deciding on who the next Chancellor should be.
            House Suns argues it was their time to hold the position and Keta
            was Montachades pupil and should be granted the title. While others
            believe she is still too inexperienced to hold the position.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default KetaSuns;
