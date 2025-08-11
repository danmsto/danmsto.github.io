import { Accordion, Carousel, Container, Image } from "react-bootstrap";
import projects from "../content/projects.js";
import { Tech } from "../util/enums.ts";
import { techDealer } from "../util/dealers.ts";
import { Project } from "../util/types.ts";

const ProjectList = () => {
    return (
        <Container className="p-0">
            {projects.map((p: Project) => (
                <div>
                    <span className="card-header status-card">
                        {p.active ? "Active" : "Archived"}
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
                                        <Accordion.Body>
                                            <h3 className="stackDivHeading">
                                                {p.stack?.map((s: Tech) => (
                                                    <span
                                                        key={s}
                                                        className="stackDiv"
                                                        title={techDealer[s].label}
                                                    >
                                                        <span className="stackDivIcon"> {techDealer[s].char}</span>{techDealer[s].label}
                                                    </span>
                                                ))}
                                            </h3>
                                            <h6>
                                                {p.linkActive ? (
                                                    <a href={p.link} target="_blank" className="projectLinkText">
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

export default ProjectList;
