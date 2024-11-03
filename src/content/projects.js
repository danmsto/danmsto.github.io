import collectorImage from "./projects/poolpool.jpg";
import collectorImage1 from "./projects/poolpool1.png";
import collectorImage2 from "./projects/poolpool2.png";
import collectorLogo from "./projects/poolpoollogo.png";
import pizzaImage from "./projects/doughjoe.jpg";
import pizzaImage1 from "./projects/doughjoe1.png";
import pizzaImage2 from "./projects/doughjoe2.png";
import pizzaLogo from "./projects/doughjoepizzalogo.png";
import gameImage from "./projects/sweetrelease.jpg";
import gameImage1 from "./projects/sweetrelease1.png";
import gameImage2 from "./projects/sweetrelease2.png";
import gameLogo from "./projects/sweetreleaselogo.png";
import deskotechImage from "./projects/deskotech.jpg";
import deskotechImage1 from "./projects/deskotech1.png";
import deskotechImage2 from "./projects/deskotech2.png";
import deskotechLogo from "./projects/deskotechlogo.png";
import ferriologo from "./projects/ferriologo.png";
import ferrioImage from "./projects/ferrioimage.png";
import ferrioImage1 from "./projects/ferrioimage1.png";
import ferrioImage2 from "./projects/ferrioimage2.png";
import labLogicLogo from "./projects/lablogiclogo.png";
import labLogicImage from "./projects/lablogicimage.png";
import labLogicImage1 from "./projects/lablogicimage1.jpg";
import labLogicImage2 from "./projects/lablogicimage2.png";
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
        description: "A feature rich reinvention of poolpool as a full-stack web app",
        functionality: "Targets dynamic user icons, restoreable sessions, and potential database support",
        madeWith: "Next.js TypeScript",
        link: "https://duels-danmsto.vercel.app/",
        linkText: "Duel",
        linkActive: false,
        image: wip,
        image1: wip,
        image2: wip,
        logo: duelsLogo,
        status: Status.Active,
    },
    {
        title: "bHook",
        description: "An Avalonia WPF desktop application for displaying system information",
        functionality: "Targets a clean UI design language and hardware monitoring",
        madeWith: "Avalonia/WPF and LibreHardwareMonitor",
        link: "https://github.com/danmsto/bhook",
        linkText: "Repository",
        linkActive: false,
        image: wip,
        image1: wip,
        image2: wip,
        logo: bHookLogo,
        status: Status.Active,
    },
    {
        title: "ThinkLink",
        description: "A simple C# server application for accessing large media files over a local area network",
        functionality: "Large file streaming and management over LAN",
        madeWith: "C# .NET",
        link: "https://github.com/danmsto/thinklink",
        linkText: "Repository",
        linkActive: false,
        image: wip,
        image1: wip,
        image2: wip,
        logo: thinklinkLogo,
        status: Status.Active,
    },
    {
        title: "LabLogic SPECTra",
        description: "A SPECT radiopharmacy Laboratory Inventory Management System (LIMS)",
        functionality: "SPECTra is a true Radiopharmacy LIMS, designed to improve efficiency and compliance",
        madeWith: "Made with the .NET Framework",
        link: "https://lablogic.com/nuclear-medicine-and-pet/software/spectra",
        linkText: "Inspect",
        linkActive: true,
        image: labLogicImage,
        image1: labLogicImage1,
        image2: labLogicImage2,
        logo: labLogicLogo,
        status: Status.LabLogic,
    },
    {
        title: "Ferrio Connect",
        description: "Automation & Integration platform",
        functionality:
            "Low-code development platform with a visual drag-and-drop workflow designer, powerful task automation, and pre-built integrations",
        madeWith: "Made with TypeScript, React, and .NET",
        link: "https://ferrio.com/",
        linkText: "Visit",
        linkActive: true,
        image: ferrioImage,
        image1: ferrioImage1,
        image2: ferrioImage2,
        logo: ferriologo,
        status: Status.Ferrio,
    },
    {
        title: "poolpool",
        description: "Tracker for Zero-sum 1-v-1 games (widescreen only)",
        functionality:
            "This web app tracks Wins and Losses for different players, as well as providing ranking functionality to rank by Win % and total Wins, entries are editable and the list of players is stored between sessions",
        madeWith: "Made using JS",
        link: "https://danmsto.github.io/poolpool/",
        linkText: "Have a Look!",
        linkActive: true,
        image: collectorImage,
        image1: collectorImage1,
        image2: collectorImage2,
        logo: collectorLogo,
        status: Status.Archived,
    },
    {
        title: "DoughJoe Pizza",
        description: "A mock pizza vendor website, made alongside the rest of my EyUp Skills cohort",
        functionality:
            "This mock B2C web app for 'Dough Joe Pizza' provides a customisable pizza menu, nutrition calculation functionality, a persistent shopping basket, and the ability to review orders made",
        madeWith: "Made using JS, React Boot, and Axios",
        link: "https://danmsto.github.io/doughjoe-pizza",
        linkText: "Hungry?",
        linkActive: true,
        image: pizzaImage,
        image1: pizzaImage1,
        image2: pizzaImage2,
        logo: pizzaLogo,
        status: Status.Archived,
    },
    {
        title: "Deskotech",
        description: "A Hot-desk Booking App, made with the rest of the EyUp Skills Cohort",
        functionality:
            "This app provides desk booking functionality on a per-day basis, with limits on regular users and additional permissions for admins. The desk layout is visual and interactive to make selection clearer.",
        madeWith: "Made using JS, Java, Spring Boot, JPA, JDBC, and MySQL",
        link: "https://github.com/danmsto/deskotech",
        linkText: "Check It Out",
        linkActive: true,
        image: deskotechImage,
        image1: deskotechImage1,
        image2: deskotechImage2,
        logo: deskotechLogo,
        status: Status.Archived,
    },
    {
        title: "Sweet Release",
        description: "A Text Adventure Game, made with the rest of the EyUp Skills Cohort",
        functionality:
            "A fully Java game, this produces a pop up window in which you can see the game text, input your commands, and have a map of your location on the ship as well as previously explored locations. Player actions can impact accessible areas.",
        madeWith: "Made using Java",
        link: "https://github.com/danmsto/sweet-release",
        linkText: "Play",
        linkActive: true,
        image: gameImage,
        image1: gameImage1,
        image2: gameImage2,
        logo: gameLogo,
        status: Status.Archived,
    },
];

export default projects;
