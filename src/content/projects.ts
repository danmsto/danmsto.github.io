import poolPoolImage from "../asset/image/poolpool.png";
import poolPoolLogo from "../asset/image/poolpoollogo.png";
import pizzaImage from "../asset/image/doughjoe.png";
import pizzaLogo from "../asset/image/doughjoepizzalogo.png";
import gameImage from "../asset/image/sweetrelease.png";
import gameLogo from "../asset/image/sweetreleaselogo.png";
import deskotechImage from "../asset/image/deskotech.png";
import deskotechLogo from "../asset/image/deskotechlogo.png";
import roundRobinImage from "../asset/image/roundRobin.png";
import roundRobinLogo from "../asset/image/roundRobinLogo.png"
import { Tech } from "../util/enums.ts";
import { Project } from "../util/types.ts"

const projects: Project[] = [
    {
        title: "RoundRobin",
        description: "Full-stack NextJS remake of poolpool.",
        madeWith: "Next.js TypeScript",
        link: "https://tryroundrobin.vercel.app/",
        linkActive: false,
        image: roundRobinImage,
        logo: roundRobinLogo,
        active: true,
        stack: [
            Tech.TypeScript,
            Tech.NodeJS,
            Tech.NextJS,
            Tech.Tailwind,
            Tech.PostgreSQL,
        ],
    },
    {
        title: "Deskotech",
        description: "Hot-desk Booking App",
        madeWith: "JavaScript React and Java Spring Boot with MySQL",
        link: "https://github.com/danmsto/deskotech",
        linkActive: true,
        image: deskotechImage,
        logo: deskotechLogo,
        active: false,
        stack: [
            Tech.Java,
            Tech.Spring,
            Tech.MySQL,
            Tech.JavaScript,
            Tech.NodeJS,
            Tech.React,
            Tech.Bootstrap,
        ],
    },
    {
        title: "DoughJoe Pizza",
        description: "Mock pizza vendor website.",
        madeWith: "JavaScript React",
        link: "https://danmsto.github.io/doughjoe-pizza",
        linkActive: true,
        image: pizzaImage,
        logo: pizzaLogo,
        active: false,
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
        active: false,
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
        active: false,
        stack: [Tech.JavaScript, Tech.HTML, Tech.CSS],
    },
];

export default projects;
