import { Accordion } from "react-bootstrap";
import content from "../content/content";

function AboutMe() {
    return (
        <>
            <Accordion defaultActiveKey={content.experience[0].heading}>
                {content.experience.map((experience) => {
                    return (
                        <Accordion.Item eventKey={experience.heading} key={experience.heading}>
                            <Accordion.Header>
                                <img
                                    className="badgeBrightness"
                                    src={experience.image}
                                    alt={experience.heading}
                                    height={48}
                                    width={48}
                                />
                                &emsp;{experience.location}&emsp;
                                <em style={{ fontSize: 12 }}>{experience.dates}</em>
                            </Accordion.Header>
                            <Accordion.Body>
                                <strong>{experience.heading}</strong>
                                <br />
                                <text>{experience.subtitle}</text>
                                <ul>
                                    {experience.bulletPoints.map((bulletPoint) => {
                                        return (
                                            <li className="experienceBulletPoints" key={bulletPoint}>
                                                {bulletPoint}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </>
    );
}

export default AboutMe;
