import { Col, Container, Row, Image } from "react-bootstrap";
import JSImage from "../content/logos/js.svg";
import reactImage from "../content/logos/react.svg";
import boostrapImage from "../content/logos/bootstrap.svg";

function Badges() {
  return (
    <Container className="mt-1 p-0">
      <div className="centered">Site made using</div>
      <Row>
        <Col className="centered p-20">
          <Image
            alt="JavaScript"
            title="JavaScript"
            className="badges"
            src={JSImage}
          />
        </Col>
        <Col className="centered p-20">
          <Image
            alt="React"
            title="React"
            className="badges"
            src={reactImage}
          />
        </Col>
        <Col className="centered p-20">
          <Image
            alt="React Bootstrap"
            title="React Bootstrap"
            className="badges"
            src={boostrapImage}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Badges;
