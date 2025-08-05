import poolPoolImage from "./image/poolpool.png";
import poolPoolLogo from "./image/poolpoollogo.png";
import pizzaImage from "./image/doughjoe.png";
import pizzaLogo from "./image/doughjoepizzalogo.png";
import gameImage from "./image/sweetrelease.png";
import gameLogo from "./image/sweetreleaselogo.png";
import deskotechImage from "./image/deskotech.png";
import deskotechLogo from "./image/deskotechlogo.png";
import roundRobinImage from "./image/roundRobin.png";
import roundRobinLogo from "./image/roundRobinLogo.png"
import { Tech } from "./techDealer";

const Status = {
  Archived: "Archived",
  Active: "Active",
};

const projects = [
  {
    title: "RoundRobin",
    description: "Full-stack NextJS remake of poolpool.",
    madeWith: "Next.js TypeScript",
    link: "https://round-robin.vercel.app/",
    linkActive: false,
    image: roundRobinImage,
    logo: roundRobinLogo,
    status: Status.Active,
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
    status: Status.Archived,
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
