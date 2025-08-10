import { useEffect } from "react";
import introduction from "../content/introduction";

const HeaderConsole = () => {
  useEffect(() => {
    const b: HTMLBodyElement | null = document.querySelector("body");
    if (!b) return;

    const bs: CSSStyleDeclaration = getComputedStyle(b);

    const fadeEffect = () => {
      let i: number = 0;
      const change = (): void => {
        const doc: HTMLElement | null = document.getElementById("consoleEffect");
        if (!doc) return;

        const color: string[] = [
          bs.getPropertyValue("--background"),
          bs.getPropertyValue("--text"),
        ];
        doc.style.color = color[i];
        i = (i + 1) % color.length;
      };

      setInterval(change, 750);
    };

    fadeEffect();
  }, []);

  return (
    <div>
      {introduction.lines.map((line: string, index: number, array: string[]) => (
        <>
          {"DS> " + line}
          {index !== array.length - 1 && <br />}
        </>
      ))}
      <span id="consoleEffect">█</span>
    </div>
  );
};

export default HeaderConsole;
