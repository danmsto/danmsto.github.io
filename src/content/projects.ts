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

const Status = {
    Archived: "Archived",
    Active: "Active",
    Ferrio: "@ Ferrio",
    LabLogic: "@ LabLogic",
};

const projects = [
    {
        title: "Duels",
        description: "Full-stack web app remake of poolpool",
        madeWith: "Next.js TypeScript",
        link: "https://duels-danmsto.vercel.app/",
        linkActive: false,
        image: wip,
        logo: duelsLogo,
        status: Status.Active,
    },
    {
        title: "bHook",
        description: "Avalonia WPF application for displaying system information",
        madeWith: "Avalonia/WPF",
        link: "https://github.com/danmsto/bhook",
        linkActive: false,
        image: wip,
        logo: bHookLogo,
        status: Status.Active,
    },
    {
        title: "ThinkLink",
        description: "Simple console application for accessing large media files over a local area network",
        madeWith: "TBD",
        link: "https://github.com/danmsto/thinklink",
        linkActive: false,
        image: wip,
        logo: thinklinkLogo,
        status: Status.Active,
    },
    {
        title: "LabLogic SPECTra",
        description: "SPECT radiopharmacy Laboratory Inventory Management System (LIMS) software",
        madeWith: "WinForms",
        link: "https://lablogic.com/nuclear-medicine-and-pet/software/spectra",
        linkActive: true,
        image: labLogicImage,
        logo: labLogicLogo,
        status: Status.LabLogic,
    },
    {
        title: "Ferrio Connect",
        description: " Low-code Automation & Integration platform",
        madeWith: "TypeScript, React, and .NET",
        link: "https://ferrio.com/",
        linkActive: true,
        image: ferrioImage,
        logo: ferriologo,
        status: Status.Ferrio,
    },
    {
        title: "poolpool",
        description: "Tracker for Zero-sum 1-v-1 games",
        madeWith: "JavaScript",
        link: "https://danmsto.github.io/poolpool/",
        linkActive: true,
        image: poolPoolImage,
        logo: poolPoolLogo,
        status: Status.Archived,
    },
    {
        title: "DoughJoe Pizza",
        description: "A mock pizza vendor website, made alongside the rest of my EyUp Skills cohort",
        madeWith: "JavaScript React",
        link: "https://danmsto.github.io/doughjoe-pizza",
        linkActive: true,
        image: pizzaImage,
        logo: pizzaLogo,
        status: Status.Archived,
    },
    {
        title: "Deskotech",
        description: "Hot-desk Booking App, made with the rest of the EyUp Skills Cohort",
        madeWith: "JavaScript React and Java Spring Boot with MySQL",
        link: "https://github.com/danmsto/deskotech",
        linkActive: true,
        image: deskotechImage,
        logo: deskotechLogo,
        status: Status.Archived,
    },
    {
        title: "Sweet Release",
        description: "Text Adventure Game, made with the rest of the EyUp Skills Cohort",
        madeWith: "Java",
        link: "https://github.com/danmsto/sweet-release",
        linkActive: true,
        image: gameImage,
        logo: gameLogo,
        status: Status.Archived,
    },
];

export default projects;
