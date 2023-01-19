import yorkimage from "./universityofyork.png";
import infineumimage from "./infineum.png";
import eyupimage from "./eyup.png";


const content = {
  siteHeader: "Daniel Stoddart",
  siteSubheader: "Coding Academy Graduate & Former Industrial R&D Chemist",
  homeHeading: "Former Industrial Research & Development Chemist pursuing a career in Software Development",
  homeBody: "Welcome to my Portfolio site, which has been built using React Bootstrap and Javascript, enjoy!",
  experienceIntro: "Here is a brief overview of my experience",
  experience: [
    {
      heading: "Full Stack Developer Student",
      body: `16 weeks experience with HTML, CSS, JavaScript, React, 
      React Bootstrap, Java, OOP, Express, Spring Boot, etc.`,
      image: eyupimage,
      location: "EyUp Skills Ltd",
      dates: "2022"
    }, {
      heading: "Industrial R&D Chemist",
      body: `Worked within Product Development and in the Shell International 
      Account, with two internal technical publications, on synergistic 
      interactions of detergents and antioxidant componentry, and on 
      the industry-standard turbocharger deposits test`,
      image: infineumimage,
      location: "Infineum UK Ltd",
      dates: "2018-2022"
    }, {
      heading: "MChem Student",
      body: `I completed my MChem project on Fragment Elaboration Synthesis of 
      Functionalised Piperidines under Prof Peter O'Brien`,
      image: yorkimage,
      location: "The University of York",
      dates: "2014-2018"
    }
  ]


};

export default content;