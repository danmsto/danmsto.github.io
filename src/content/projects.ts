import poolPoolImage from "./projects/poolpool.png";
import poolPoolLogo from "./projects/poolpoollogo.png";
import pizzaImage from "./projects/doughjoe.png";
import pizzaLogo from "./projects/doughjoepizzalogo.png";
import gameImage from "./projects/sweetrelease.png";
import gameLogo from "./projects/sweetreleaselogo.png";
import deskotechImage from "./projects/deskotech.png";
import deskotechLogo from "./projects/deskotechlogo.png";
import ferriologo from "./projects/ferriologo.png";
import ferrioImage from "./projects/ferrioimage.png";
import labLogicLogo from "./projects/lablogiclogo.png";
import labLogicImage from "./projects/lablogic.png";
import wip from "./projects/wipBackground.jpg";
import duelsLogo from "./projects/duelsLogo.png";
import bHookLogo from "./projects/bHookLogo.png";
import thinklinkLogo from "./projects/thinklinkLogo.png";
import { Tech } from "./techDealer";

const Status = {
    Archived: "Archived",
    Active: "Active",
    Ferrio: "@ Ferrio",
    LabLogic: "@ LabLogic",
};

const projects = [
    {
        title: "Duels",
        description: "Full-stack web app remake of poolpool.",
        madeWith: "Next.js TypeScript",
        link: "https://duels-danmsto.vercel.app/",
        linkActive: false,
        image: wip,
        logo: duelsLogo,
        status: Status.Active,
        stack: [Tech.TypeScript, Tech.NodeJS, Tech.NextJS, Tech.Tailwind, Tech.PostgreSQL],
    },
    {
        title: "bHook",
        description: "System-monitoring application using Avalonia.",
        madeWith: "Avalonia/WPF",
        link: "https://github.com/danmsto/bhook",
        linkActive: false,
        image: wip,
        logo: bHookLogo,
        status: Status.Active,
        stack: [Tech.CSharp, Tech.DotNet],
    },
    {
        title: "ThinkLink",
        description: "Console application for file transfer over LAN.",
        madeWith: "TBD",
        link: "https://github.com/danmsto/thinklink",
        linkActive: false,
        image: wip,
        logo: thinklinkLogo,
        status: Status.Active,
        stack: [Tech.CSharp, Tech.DotNet],
    },
    {
        title: "LabLogic SPECTra",
        description: "SPECT radiopharmacy LIMS software.",
        madeWith: "WinForms",
        link: "https://lablogic.com/nuclear-medicine-and-pet/software/spectra",
        linkActive: true,
        image: labLogicImage,
        logo: labLogicLogo,
        status: Status.LabLogic,
        stack: [Tech.CSharp, Tech.DotNet, Tech.Blazor, Tech.SqlServer],
    },
    {
        title: "Ferrio Connect",
        description: " Low-code Automation & Integration platform.",
        madeWith: "TypeScript, React, and .NET",
        link: "https://ferrio.com/",
        linkActive: true,
        image: ferrioImage,
        logo: ferriologo,
        status: Status.Ferrio,
        stack: [Tech.TypeScript, Tech.NodeJS, Tech.React, Tech.CSharp, Tech.DotNet, Tech.CosmosDB],
    },
    {
        title: "Deskotech",
        description: "Hot-desk Booking App",
        madeWith: "JavaScript React and Java Spring Boot with MySQL",
        link: "https://github.com/danmsto/deskotech",
        linkActive: true,
        image: deskotechImage,
        logo: deskotechLogo,
        status: Status.Archived,
        stack: [Tech.Java, Tech.Spring, Tech.MySQL, Tech.JavaScript, Tech.NodeJS, Tech.React, Tech.Bootstrap],
    },
    {
        title: "DoughJoe Pizza",
        description: "Mock pizza vendor website.",
        madeWith: "JavaScript React",
        link: "https://danmsto.github.io/doughjoe-pizza",
        linkActive: true,
        image: pizzaImage,
        logo: pizzaLogo,
        status: Status.Archived,
        stack: [Tech.JavaScript, Tech.NodeJS, Tech.React],
    },
    {
        title: "Sweet Release",
        description: "Text Adventure Game.",
        madeWith: "Java",
        link: "https://github.com/danmsto/sweet-release",
        linkActive: true,
        image: gameImage,
        logo: gameLogo,
        status: Status.Archived,
        stack: [Tech.Java],
    },
    {
        title: "poolpool",
        description: "Tracker for head-to-head scores.",
        madeWith: "JavaScript",
        link: "https://danmsto.github.io/poolpool/",
        linkActive: true,
        image: poolPoolImage,
        logo: poolPoolLogo,
        status: Status.Archived,
        stack: [Tech.JavaScript, Tech.HTML, Tech.CSS],
    },
];

export default projects;
