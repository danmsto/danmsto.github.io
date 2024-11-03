import badgeDealer from "./badgeDealer";

const content = {
    siteHeader: "Daniel Stoddart",
    siteSubheader: "Coding Academy Graduate & Former Industrial R&D Chemist",
    siteHeaders: {
        uni: "MChem in Chemistry => Industrial R&D Chemist",
        // rnd: "Former Industrial R&D Chemist",
        cod: "Coding Academy Graduate => Software Developer",
        // dev1: "Software Developer",
    },
    homeHeading: "Graduate of the EyUp Full Stack Development Academy",
    homeBody:
        "Target-oriented team player who delivers to a high standard and works well under pressure," +
        " has delivered impactful projects within budget and to deadline, and has a proven track record of process and systems improvement." +
        " Quick learner keen to gain new skills and expand knowledge.",
    experienceIntro: "Here is a brief overview of my experience",
    experience: [
        {
            heading: "Software Developer",
            subtitle: "Laboratory instrumentation and software company",
            bulletPoints: [
                "Using the .NET Framework to write and maintain laboratory inventory management systems for radiopharmaceutical applications",
                "Engaging with private and public sector clients to deploy bespoke software with client-specific features",
                "Complying with stringent regulatory standards and business logic",
                "Refactoring legacy code and ensuring performance on older hardware",
            ],
            image: badgeDealer.lablogic,
            location: "LabLogic Systems Ltd",
            dates: "2024 to date",
        },
        {
            heading: "Graduate Software Developer",
            subtitle: "Low Code Automation consultancy and software company",
            bulletPoints: [
                "Writing production code for the front-end codebase with CI/CD practices",
                "Using low code automation platforms and API services for client-facing work",
                "TypeScript and .NET",
                "Building B2B Service Automation Software",
                "Event-driven Architecture",
            ],
            image: badgeDealer.ferrio,
            location: "Ferrio Ltd",
            dates: "2023",
        },
        {
            heading: "Full Stack Software Development Student",
            subtitle: "Software Development bootcamp launched by Sheffield-based firm WANdisco",
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
            image: badgeDealer.eyup,
            location: "EyUp Skills Ltd",
            dates: "2022",
        },
        {
            heading: "Industrial R&D Chemist",
            subtitle: "World-leading Engine Oil Additives and Specialty Chemicals company",
            bulletPoints: [
                "Designing and executing experimental programmes in external labs across Europe and North America for novel Product Development as well as performing proprietary experimentation for data generation",
                "Processing test data using JMP Statistical Modelling software",
                "Providing customer technical support for Daimler AG and later on the Shell International Account",
                "Managing projects in Product Development, Test Problem Understanding and Solution, and Systems Improvement while managing stakeholder expectations and budgets up to £210,000",
                "Authoring two published Technical Reports",
            ],
            image: badgeDealer.infineum,
            location: "Infineum UK Ltd",
            dates: "2018 to 2022",
        },
        {
            heading: "Chemistry Student",
            subtitle: "MChem in Chemistry",
            bulletPoints: [
                "First-class degree awarded",
                "Master's Project in Synthetic Chemistry under Prof Peter O'Brien",
            ],
            image: badgeDealer.mchem,
            location: "The University of York",
            dates: "2014 to 2018",
        },
    ],
};

export default content;
