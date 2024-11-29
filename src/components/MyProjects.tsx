import { Badge, Button, Carousel, Container, Image } from "react-bootstrap";
import projects from "../content/projects.js";
import { Tech, techDealer } from "../content/techDealer.js";

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
                                    <Image src={p.logo} /> {p.title}
                                    {/* {p.stack?.map((s: Tech) => (
                                        <span key={s} className="stackDiv" title={techDealer[s].label}>
                                            {techDealer[s].char}
                                        </span>
                                    ))} */}
                                </h3>
                                {/* <h5>
                                    {p.stack?.map((s: Tech) => (
                                        <Badge key={s} bg="secondary" className="stackDiv" pill>
                                            {techDealer[s].char} {techDealer[s].label}
                                        </Badge>
                                    ))}
                                </h5> */}
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
