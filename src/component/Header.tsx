import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import ThemeSelect from "./ThemeSelect";
import { useState } from "react";

const Header = () => {
	const [theme, setTheme] = useState(1);

	return (
		<Navbar
			sticky="top"
			expand="lg"
			className="navbar"
			variant={theme === 1 ? "dark" : "undefined" }
		>
			<Container>
				<Row style={{ flexGrow: 1 }}>
					<Col xs={0} sm={0}>
						<Navbar.Brand className="monospaceText">
							{"DS> Dan Stoddart"}
						</Navbar.Brand>
					</Col>
					<Col className="navbarCol" xs="auto" sm="auto">
						<Nav.Link href="https://github.com/danmsto">
							<span className="fontIcon">{`\ue709`}</span>
							<span className="fontText"> GitHub</span>
						</Nav.Link>
					</Col>
					<Col className="navbarCol" xs="auto" sm="auto">
						<Nav.Link href="https://linkedin.com/in/danmsto">
							<span className="fontIcon">{`\ue820`}</span>
							<span className="fontText"> LinkedIn</span>
						</Nav.Link>
					</Col>
					<Col className="navbarCol" xs="auto" sm={0}>
						<ThemeSelect theme={theme} setTheme={setTheme} />
					</Col>
				</Row>
			</Container>
		</Navbar>
	); 
}

export default Header;
