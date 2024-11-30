import { Col, Container, Row, Image } from "react-bootstrap";
import { SVG, svgDealer } from "../content/svgDealer";

const BadgeDisplay = () => {
    return (
        <Container className="mt-1 p-0">
            <div className="centered">Site made using</div>
            <Row>
                <Col className="centered p-20">
                    <Image alt="TypeScript" title="TypeScript" className="badges" src={svgDealer[SVG.TypeScript]} />
                </Col>
                <Col className="centered p-20">
                    <Image alt="React" title="React" className="badges" src={svgDealer[SVG.React]} />
                </Col>
                <Col className="centered p-20">
                    <Image alt="Bootstrap" title="Bootstrap" className="badges" src={svgDealer[SVG.Bootstrap]} />
                </Col>
            </Row>
        </Container>
    );
};

export default BadgeDisplay;
