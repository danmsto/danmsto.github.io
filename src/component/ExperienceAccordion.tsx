import { Accordion, Col, Container, Row } from "react-bootstrap";
import experience from "../content/experience";
import { svgDealer } from "../util/dealers.ts";

const ExperienceAccordion = () => {
    return (
        <>
            <Accordion defaultActiveKey={experience[0].heading}>
                {experience.map((e) => {
                    return (
                        <Accordion.Item eventKey={e.heading} key={e.heading}>
                            <Accordion.Header>
                                <Container>
                                    <Row>
                                        <Col xs={5} md={2}>
                                            <img
                                                className="svgBadge"
                                                src={svgDealer[e.image]}
                                                alt={e.heading}
                                                height={48}
                                                width={48}
                                            />
                                        </Col>
                                        <Col xs={4} md={7} style={{ alignContent: "center" }}>
                                            {e.location}
                                        </Col>
                                        <Col xs={3} style={{ alignContent: "center", fontSize: "small" }}>
                                            {e.dates}
                                        </Col>
                                    </Row>
                                </Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                <strong>{e.heading}</strong>
                                <br />
                                <span>{e.subtitle}</span>
                                <ul>
                                    {e.bulletPoints.map((bulletPoint) => {
                                        return (
                                            <li style={{ padding: 0 }} key={bulletPoint}>
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
