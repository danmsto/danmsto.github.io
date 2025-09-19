import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectList from "./component/ProjectList";
import ExperienceAccordion from "./component/ExperienceAccordion";
import HeaderConsole from "./component/HeaderConsole";
import "./App.css";
import CompentencyList from "./component/CompetencyList";
import { Tech } from "./util/enums.ts";
import { techDealer } from "./util/dealers.ts";
import Header from "./component/Header";

const App = () => {
    
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={8} sm={12} xs={12} className="monospaceText mb-3">
                        <HeaderConsole />
                    </Col>
                </Row>
                <Row>
                    <Col md={8} sm={12} xs={12}>
                        <Row>
                            <ProjectList />
                        </Row>
                    </Col>
                    <Col md={4} sm={12} xs={12}>
                        <ExperienceAccordion />
                        <CompentencyList />
                        <span className="centered mt-2">
                            Made using <span className="nfSymbol"> {techDealer[Tech.React].char} </span> React in <span className="nfSymbol">{techDealer[Tech.TypeScript].char}</span> TypeScript
                        </span>
                        <span className="centered mb-2">
                            with <span className="nfSymbol">{techDealer[Tech.Bootstrap].char}</span> Bootstrap components
                        </span>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
