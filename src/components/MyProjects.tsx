import { Button, Carousel, Container, Image } from "react-bootstrap";
import projects from "../content/projects.js";

function MyProjects() {
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
                                <h3>
                                    <Image src={p.logo}></Image> {p.title}{" "}
                                </h3>
                                <p style={{ marginBottom: 8 }}>{p.description}</p>
                                {p.linkActive && (
                                    <Button href={p.link} size="sm">
                                        Link
                                    </Button>
                                )}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            ))}
        </Container>
    );
}

export default MyProjects;
