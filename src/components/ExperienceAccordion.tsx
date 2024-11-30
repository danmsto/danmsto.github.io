import { Accordion } from "react-bootstrap";
import experience from "../content/experience";
import { svgDealer } from "../content/svgDealer";

const ExperienceAccordion = () => {
    return (
        <>
            <Accordion defaultActiveKey={experience[0].heading}>
                {experience.map((e) => {
                    return (
                        <Accordion.Item eventKey={e.heading} key={e.heading}>
                            <Accordion.Header>
                                <img
                                    className="badgeBrightness"
                                    src={svgDealer[e.image]}
                                    alt={e.heading}
                                    height={48}
                                    width={48}
                                />
                                &emsp;{e.location}&emsp;
                                <em style={{ fontSize: 12 }}>{e.dates}</em>
                            </Accordion.Header>
                            <Accordion.Body>
                                <strong>{e.heading}</strong>
                                <br />
                                <span>{e.subtitle}</span>
                                <ul>
                                    {e.bulletPoints.map((bulletPoint) => {
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
};

export default ExperienceAccordion;
