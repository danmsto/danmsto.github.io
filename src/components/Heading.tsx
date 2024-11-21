import { useEffect } from "react";
import content from "../content/content";

function Heading() {
    useEffect(() => {
        const b = document.querySelector("body");
        if (!b) return;

        const bs = getComputedStyle(b);

        const fadeEffect = () => {
            let i = 0;
            const change = () => {
                const doc = document.getElementById("consoleEffect");
                if (!doc) return;

                const color = [bs.getPropertyValue("--background"), bs.getPropertyValue("--text")];
                doc.style.color = color[i];
                i = (i + 1) % color.length;
            };

            setInterval(change, 750);
        };

        fadeEffect();
    }, []);

    return (
        <div>
            {"DS> " + content.siteHeaders.uni}
            <br />
            {"DS> " + content.siteHeaders.rnd}
            <br />
            {"DS> " + content.siteHeaders.cod}
            <br />
            {"DS> " + content.siteHeaders.dev1}
            <span id="consoleEffect">█</span>
        </div>
    );
}

export default Heading;
