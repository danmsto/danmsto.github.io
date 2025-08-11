import { Svg } from "./svgDealer";
import { Experience } from "../types.ts"

const Title = {
    LabLogic: "Software Developer",
    Ferrio: "Graduate Developer",
    EyUp: "Full Stack Software Development Student",
    Infineum: "Industrial R&D Chemist",
    York: "Chemistry Student",
}

const Location = {
    LabLogic: "LabLogic Systems Ltd",
    Ferrio: "Ferrio Ltd",
    EyUp: "EyUp Skills Ltd",
    Infineum: "Infineum UK Ltd",
    York: "University of York",
}

const experience: Experience[] = [
    {
        heading: Title.LabLogic,
        subtitle: "Laboratory instrumentation and software company",
        bulletPoints: [
            "Launch new product developments using modern web technologies and interoperability with existing legacy products",
            "Using the .NET Framework to write and maintain laboratory inventory management systems for radiopharmaceutical applications",
            "Engaging with private and public sector clients to deploy bespoke software with client-specific features",
            "Complying with stringent regulatory standards and business logic",
            "Refactoring legacy code and ensuring performance on older hardware",
        ],
        image: Svg.LabLogic,
        location: Location.LabLogic,
        dates: "2024-date",
    },
    {
        heading: Title.Ferrio,
        subtitle: "Low Code Automation consultancy and software company",
        bulletPoints: [
            "Writing production code for the front-end codebase with CI/CD practices",
            "Using low code automation platforms and API services for client-facing work",
            "TypeScript and .NET",
            "Building B2B Service Automation Software",
            "Event-driven Architecture",
        ],
        image: Svg.Ferrio,
        location: Location.Ferrio,
        dates: "2023",
    },
    {
        heading: Title.EyUp,
        subtitle:
            "Software Development bootcamp launched by Sheffield-based firm WANdisco",
        bulletPoints: [
            "Building functional Web Apps as part of Project Teams using Scrum methodology",
            "Running Unit Testing using Jest/JUnit frameworks and API endpoint testing",
            "Producing web apps using the Spring Java framework and the MERN stack",
            "Structuring APIs in accordance to REST constraints",
            "Version control using Git and back-end tools such as Node.js, Express, and Maven",
            "Producing a Score Tracking Web App using JavaScript and HTML/CSS",
            "Building a Text Adventure Game fully in Java",
            "Using relational and document-oriented databases to manage practice data for library loans and social media posts",
        ],
        image: Svg.EyUp,
        location: Location.EyUp,
        dates: "2022",
    },
    {
        heading: Title.Infineum,
        subtitle:
            "World-leading Engine Oil Additives and Specialty Chemicals company",
        bulletPoints: [
            "Designing and executing experimental programmes in external labs across Europe and North America for novel Product Development as well as performing proprietary experimentation for data generation",
            "Processing test data using JMP Statistical Modelling software",
            "Providing customer technical support for Daimler AG and later on the Shell International Account",
            "Managing projects in Product Development, Test Problem Understanding and Solution, and Systems Improvement while managing stakeholder expectations and budgets up to £210,000",
            "Authoring two published Technical Reports",
        ],
        image: Svg.Infineum,
        location: Location.Infineum,
        dates: "2018-2022",
    },
    {
        heading: Title.York,
        subtitle: "MChem in Chemistry",
        bulletPoints: [
            "First-class degree awarded",
            "Master's Project in Synthetic Chemistry under Prof Peter O'Brien",
        ],
        image: Svg.UofYork,
        location: Location.York,
        dates: "2014-2018",
    },
];

export default experience;
