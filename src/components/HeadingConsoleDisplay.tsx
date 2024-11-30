import { useEffect } from "react";
import introduction from "../content/introduction";

const HeadingConsoleDisplay = () => {
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
            {"DS> " + introduction.points.uni}
            <br />
            {"DS> " + introduction.points.rnd}
            <br />
            {"DS> " + introduction.points.cod}
            <br />
            {"DS> " + introduction.points.dev1}
            <span id="consoleEffect">█</span>
        </div>
    );
};

export default HeadingConsoleDisplay;
