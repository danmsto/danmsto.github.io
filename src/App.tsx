import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ProjectCarouselList from "./components/ProjectCarouselList";
import ExperienceAccordion from "./components/ExperienceAccordion";
import HeadingConsoleDisplay from "./components/HeadingConsoleDisplay";
import BadgeDisplay from "./components/BadgeDisplay";
import { SVG, svgDealer } from "./content/svgDealer";
import "./App.css";
import CompetenciesDisplay from "./components/CompetenciesDisplay.tsx";

function App() {
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    var b = document.querySelector("body");
    if (b === null) return;
    switch (theme) {
      default:
      case 1:
        b.style.setProperty("--background", "black");
        b.style.setProperty("--foreground", "#2C394B");
        b.style.setProperty("--highlight", "#334756");
        b.style.setProperty("--text", "white");
        b.style.setProperty("--buttoninteract", "#202d36");
        b.style.setProperty("--badge-invert-value", "1");
        b.style.setProperty("--accordion-button-after", createAccordionButton(false));
        break;
      case 2:
        b.style.setProperty("--background", "white");
        b.style.setProperty("--foreground", "whitesmoke");
        b.style.setProperty("--highlight", "#ECE8DD");
        b.style.setProperty("--text", "black");
        b.style.setProperty("--buttoninteract", "#dad2bc");
        b.style.setProperty("--badge-invert-value", "0");
        b.style.setProperty("--accordion-button-after", createAccordionButton(true));
        break;
      case 3:
        b.style.setProperty("--background", "mediumseagreen");
        b.style.setProperty("--foreground", "white");
        b.style.setProperty("--highlight", "powderblue");
        b.style.setProperty("--text", "black");
        b.style.setProperty("--buttoninteract", "#9DC7CC");
        b.style.setProperty("--badge-invert-value", "0");
        b.style.setProperty("--accordion-button-after", createAccordionButton(true));
        break;
    }
  }, [theme]);

  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        className="navbar"
        variant={theme === 1 ? "dark" : undefined}
      >
        <Container>
          <Row style={{ flexGrow: 1 }}>
            <Col xs={0} sm={0}>
              <Navbar.Brand className="brandText">
                {"DS> Dan Stoddart"}
              </Navbar.Brand>
            </Col>
            <Col className="navbarCol" xs="auto" sm="auto">
              <Nav.Link
                href="https://github.com/danmsto"
                style={{ alignItems: "center" }}
              >
                <img
                  src={svgDealer[SVG.GitHub]}
                  className="linkImg badgeBrightness"
                  alt="GitHub Logo"
                  title="GitHub"
                />
              </Nav.Link>
            </Col>
            <Col className="navbarCol" xs="auto" sm="auto">
              <Nav.Link href="https://linkedin.com/in/danmsto">
                <img
                  src={svgDealer[SVG.LinkedIn]}
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
                  <NavDropdown.Item onClick={() => setTheme(1)}>
                    🌑 Dark
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setTheme(2)}>
                    ☀️ Light
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setTheme(3)}>
                    🟩 Colourful
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md={8} sm={12} xs={12} className="headerText">
            <HeadingConsoleDisplay />
          </Col>
        </Row>
        <Row>
          <Col md={8} sm={12} xs={12}>
            <Row className="blackText">
              <ProjectCarouselList />
            </Row>
          </Col>
          <Col md={4} sm={12} xs={12} className="blackText">
            <ExperienceAccordion />
            <CompetenciesDisplay />
            <Row className="bodySection mt-2">
              <BadgeDisplay />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function createAccordionButton(isDark: boolean): string {
  // return `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${(isDark ? "black" : "white")}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e`
    return `url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${isDark ? "black" : "white"}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")`;
}

export default App;
