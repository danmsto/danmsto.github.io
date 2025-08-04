import { Accordion, Carousel, Container, Image } from "react-bootstrap";
import projects from "../content/projects.js";
import { Tech, techDealer } from "../content/techDealer.js";

const ProjectCarouselList = () => {
  return (
    <Container className="p-0">
      {projects.map((p) => (
        <div>
          <span
            className="status-card"
            style={{
              borderTopLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              height: "40px",
              width: "90px",
              position: "absolute",
              zIndex: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 13,
              wordWrap: "normal",
            }}
          >
            {p.status}
          </span>
          <Carousel
            variant="light"
            className="mb-1"
            fade
            interval={null}
            touch={false}
            indicators={false}
            controls={false}
          >
            <Carousel.Item key={p.description}>
              <img className="carousel-image" src={p.image} alt="Project" />
              <Carousel.Caption className="mb-4">
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Image src={p.logo} style={{ marginRight: "5px", }} />{" "}
                      {p.title}
                    </Accordion.Header>
                    <Accordion.Body className="stackDescBody">
                      <h3 className="stackDivHeading">
                        {p.stack?.map((s: Tech) => (
                            <span
                                key={s}
                                className="stackDiv"
                                title={techDealer[s].label}
                            >
                            {techDealer[s].char}
                          </span>
                        ))}
                      </h3>
                      <h6>
                        {p.linkActive ? (
                            <a href={p.link} target="_blank" className="projLink">
                              {p.description} {`\uf08e`}
                            </a>
                        ) : (
                            <span>{p.description}</span>
                        )}
                      </h6>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      ))}
    </Container>
  );
};

export default ProjectCarouselList;
