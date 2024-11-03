import { Button, Carousel, Container, Image } from "react-bootstrap";
import projects from "../content/projects.js";

function MyProjects() {
    return (
        <Container className="p-0">
            {projects.map((p) => (
                <div>
                    <span
                        class="status-card"
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
                    <Carousel variant="light" className="mb-1" fade interval={null} touch={false}>
                        <Carousel.Item key={p.description}>
                            <img className="carousel-image" src={p.image} alt="Not appearing" />
                            <Carousel.Caption className="mb-4">
                                <h3>
                                    <Image src={p.logo}></Image> {p.title}
                                </h3>
                                <p>{p.description}</p>
                                {p.linkActive && (
                                    <Button variant="light" href={p.link} target="_blank" rel="noreferrer">
                                        {p.linkText}
                                    </Button>
                                )}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item key={p.functionality}>
                            <img className="carousel-image" src={p.image1} alt="Not appearing" />
                            <Carousel.Caption className="mb-4">
                                <h3>
                                    <Image src={p.logo}></Image> {p.title}
                                </h3>
                                <p>{p.functionality}</p>
                                <Button variant="light" href={p.link} target="_blank" rel="noreferrer">
                                    {p.linkText}
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item key={p.madeWith}>
                            <img className="carousel-image" src={p.image2} alt="Not appearing" />
                            <Carousel.Caption className="mb-4">
                                <h3>
                                    <Image src={p.logo}></Image> {p.title}
                                </h3>
                                <p>{p.madeWith}</p>
                                <Button variant="light" href={p.link} target="_blank" rel="noreferrer">
                                    {p.linkText}
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            ))}
        </Container>
    );
}

export default MyProjects;
