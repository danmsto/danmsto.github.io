import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import MyProjects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";
import Heading from "./components/Heading";
import Badges from "./components/Badges";
import badgeDealer from "./content/badgeDealer";
import { useEffect, useState } from "react";

function App() {
    const [theme, setTheme] = useState(1);

    useEffect(() => {
        var b = document.querySelector("body");
        switch (theme) {
            default:
            case 1:
                b.style.setProperty("--background", "black");
                b.style.setProperty("--foreground", "#2C394B");
                b.style.setProperty("--highlight", "#334756");
                b.style.setProperty("--text", "white");
                b.style.setProperty("--buttoninteract", "#202d36");
                b.style.setProperty("--badge-invert-value", "1");
                break;
            case 2:
                b.style.setProperty("--background", "white");
                b.style.setProperty("--foreground", "whitesmoke");
                b.style.setProperty("--highlight", "#ECE8DD");
                b.style.setProperty("--text", "black");
                b.style.setProperty("--buttoninteract", "#dad2bc");
                b.style.setProperty("--badge-invert-value", "0");
                break;
            case 3:
                b.style.setProperty("--background", "mediumseagreen");
                b.style.setProperty("--foreground", "white");
                b.style.setProperty("--highlight", "powderblue");
                b.style.setProperty("--text", "black");
                b.style.setProperty("--buttoninteract", "#9DC7CC");
                b.style.setProperty("--badge-invert-value", "0");
                break;
        }
    }, [theme]);

    return (
        <>
            <Navbar sticky="top" expand="lg" className="navbar" variant={theme === 1 ? "dark" : undefined}>
                <Container>
                    <Row style={{ flexGrow: 1 }}>
                        <Col xs={0} sm={0}>
                            <Navbar.Brand className="brandText" align="start">
                                {"DS> Dan Stoddart"}
                            </Navbar.Brand>
                        </Col>
                        <Col className="navbarCol" xs="auto" sm="auto">
                            <Nav.Link href="https://github.com/danmsto" style={{ alignItems: "center" }}>
                                <img
                                    src={badgeDealer.github}
                                    className="linkImg badgeBrightness"
                                    alt="GitHub Logo"
                                    title="GitHub"
                                />
                            </Nav.Link>
                        </Col>
                        <Col className="navbarCol" xs="auto" sm="auto">
                            <Nav.Link href="https://linkedin.com/in/danmsto">
                                <img
                                    src={badgeDealer.linkedin}
                                    className="linkImg badgeBrightness"
                                    alt="LinkedIn Logo"
                                    title="LinkedIn"
                                />
                            </Nav.Link>
                        </Col>
                        <Col className="navbarCol" xs="auto" sm={0}>
                            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                                <NavDropdown
                                    align="end"
                                    title="🎨"
                                    menuVariant={theme === 1 ? "dark" : undefined}
                                    drop="start"
                                >
                                    <NavDropdown.Item onClick={() => setTheme(1)}>🌑 Dark</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => setTheme(2)}>☀️ Light</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => setTheme(3)}>🟩 Colourful</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col md={8} sm={12} xs={12} className="headerText">
                        <Heading />
                    </Col>
                </Row>
                <Row>
                    <Col md={8} sm={12} xs={12}>
                        <Row className="blackText">
                            <MyProjects />
                        </Row>
                    </Col>
                    <Col md={4} sm={12} xs={12} className="blackText">
                        <AboutMe />
                        <Row className="bodySection mt-2">
                            <Badges />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
