import github from "./svg/github.svg";
import linkedin from "./svg/linkedin.svg";
import cog from "./svg/ferrio.svg";
import console from "./svg/eyup.svg";
import can from "./svg/infineum.svg";
import flask from "./svg/mchem.svg";
import scanner from "./svg/lablogic.svg";
import bootstrap from "./svg/bootstrap.svg";
import typescript from "./svg/typescript.svg";
import react from "./svg/react.svg";

export enum SVG {
    GitHub,
    LinkedIn,
    Bootstrap,
    TypeScript,
    React,
    Ferrio,
    EyUp,
    Infineum,
    UofYork,
    LabLogic,
}

export const svgDealer = {
    [SVG.GitHub]: github,
    [SVG.LinkedIn]: linkedin,
    [SVG.Bootstrap]: bootstrap,
    [SVG.TypeScript]: typescript,
    [SVG.React]: react,
    [SVG.Ferrio]: cog,
    [SVG.EyUp]: console,
    [SVG.Infineum]: can,
    [SVG.UofYork]: flask,
    [SVG.LabLogic]: scanner,
};
