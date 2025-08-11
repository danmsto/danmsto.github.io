import cog from "./svg/ferrio.svg";
import console from "./svg/eyup.svg";
import can from "./svg/infineum.svg";
import flask from "./svg/mchem.svg";
import scanner from "./svg/lablogic.svg";
import { SvgDetails } from "../types";

export enum Svg {
    Ferrio,
    EyUp,
    Infineum,
    UofYork,
    LabLogic,
}

export const svgDealer: SvgDetails = {
    [Svg.Ferrio]: cog,
    [Svg.EyUp]: console,
    [Svg.Infineum]: can,
    [Svg.UofYork]: flask,
    [Svg.LabLogic]: scanner,
};
