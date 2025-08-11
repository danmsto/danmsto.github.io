import { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";

const ThemeSelect = ({ theme, setTheme }: { theme: number, setTheme: React.Dispatch<React.SetStateAction<number>> }) => {
	useEffect(() => {
		var b: HTMLElement | null = document.querySelector("body");
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
				b.style.setProperty("--accordion-button-after", createAccordionUrl(false));
				break;
			case 2:
				b.style.setProperty("--background", "white");
				b.style.setProperty("--foreground", "whitesmoke");
				b.style.setProperty("--highlight", "#ECE8DD");
				b.style.setProperty("--text", "black");
				b.style.setProperty("--buttoninteract", "#dad2bc");
				b.style.setProperty("--badge-invert-value", "0");
				b.style.setProperty("--accordion-button-after", createAccordionUrl(true));
				break;
			case 3:
				b.style.setProperty("--background", "mediumseagreen");
				b.style.setProperty("--foreground", "white");
				b.style.setProperty("--highlight", "powderblue");
				b.style.setProperty("--text", "black");
				b.style.setProperty("--buttoninteract", "#9DC7CC");
				b.style.setProperty("--badge-invert-value", "0");
				b.style.setProperty("--accordion-button-after", createAccordionUrl(true));
				break;
		}
	}, [theme]);

	return (
		<div style={{ display: "flex", flexDirection: "row-reverse" }}>
			<NavDropdown
				align="end"
				title={<span className={"fontIcon"}>{`\ueb2a`}</span>}
				menuVariant={theme === 1 ? "dark" : undefined}
				drop="start"
			>
				<NavDropdown.Item onClick={() => setTheme(1)}>
					<span>{`\uf522`}</span> Dark
				</NavDropdown.Item>
				<NavDropdown.Item onClick={() => setTheme(2)}>
					<span
						style={{ color: theme === 1 ? "gold" : "GoldenRod" }}>{`\uf186`}</span> Light
				</NavDropdown.Item>
				<NavDropdown.Item onClick={() => setTheme(3)}>
					<span style={{ color: "mediumseagreen" }}>{`\uf1fc`}</span> Colourful
				</NavDropdown.Item>
			</NavDropdown>
		</div>);
}

const createAccordionUrl = (isDark: boolean): string => {
	return `url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${isDark ? "black" : "white"}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")`;
}

export default ThemeSelect;