import cog from "../asset/svg/ferrio.svg";
import console from "../asset/svg/eyup.svg";
import can from "../asset/svg/infineum.svg";
import flask from "../asset/svg/mchem.svg";
import scanner from "../asset/svg/lablogic.svg";
import { Svg, Tech } from "./enums.ts";
import { SvgDetails, TechDetails } from "./types.ts";

export const svgDealer: SvgDetails = {
    [Svg.Ferrio]: cog,
    [Svg.EyUp]: console,
    [Svg.Infineum]: can,
    [Svg.UofYork]: flask,
    [Svg.LabLogic]: scanner,
};

export const techDealer: TechDetails = {
    [Tech.Java]: { label: "Java", char: `\ue738` },
    [Tech.JavaScript]: { label: "JavaScript", char: `\ue781` },
    [Tech.TypeScript]: { label: "TypeScript", char: `\ue8ca` },
    [Tech.CSharp]: { label: "C#", char: `\ue648` },
    [Tech.Spring]: { label: "Spring", char: `\ue8ac` },
    [Tech.DotNet]: { label: ".NET", char: `\udb82\udeae` },
    [Tech.Blazor]: { label: "Blazor", char: `\ue765` },
    [Tech.NodeJS]: { label: "Node.js", char: `\ued0d` },
    [Tech.React]: { label: "React.js", char: `\ue7ba` },
    [Tech.NextJS]: { label: "Next.js", char: `\ue83e` },
    [Tech.HTML]: { label: "HTML", char: `\ue736` },
    [Tech.CSS]: { label: "CSS", char: `\ue749` },
    [Tech.Sass]: { label: "SassyCSS", char: `\ue74b` },
    [Tech.Bootstrap]: { label: "Bootstrap", char: `\ue747` },
    [Tech.Tailwind]: { label: "TailwindCSS", char: `\ue8ba` },
    [Tech.MongoDB]: { label: "MongoDB", char: `\ue7a4` },
    [Tech.MySQL]: { label: "MySQL", char: `\ue704` },
    [Tech.CosmosDB]: { label: "CosmosDB", char: `\ue79f` },
    [Tech.SqlServer]: { label: "SQL Server", char: `\ue64d` },
    [Tech.PostgreSQL]: { label: "PostgreSQL", char: `\ue76e` },
};
