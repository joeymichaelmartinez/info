import Pokeball from "../../public/images/Pokeball.svg";
import DatabaseIcon from '../../public/images/DatabaseIcon.png';
import UsabilityStudy from '../../public/images/Usability-Test.svg';
import Search from '../../public/images/search.svg';
import spaceIcon from '../../public/images/spaceIcon.svg'
import Gears from '../../public/images/gears.png';

export const projectInfo = [
  {
    title: `Space Listing Full Stack Project`,
    description: `Full-Stack GraphQL, Apollo Server, & React Application`,
    fullDescription: `A full-stack application enabling users to add and 
    remove space listings through a React frontend integrated with a GraphQL API 
    using Apollo Server. Designed GraphQL mutations and queries 
    to support dynamic content updates, demonstrating strong understanding of API design, 
    state management, and component-driven architecture in TypeScript.`,
    image: spaceIcon,
    link: "https://github.com/joeymichaelmartinez/Space-Listings-GraphQL-React-Full-Stack-Project"
  },
  {
    title: `Mini ERP Project`,
    description: `Java Spring Boot & MySQL Application`,
    fullDescription: `This project is a lightweight ERP system built with Spring Boot, Java, and MySQL 
    that manages customers, products, and orders. It includes features like stock tracking, order 
    lifecycle management, and automatic calculation of order totals. The system enforces rules around 
    order status, ensuring data integrity while providing full CRUD operations through a RESTful API.`,
    image: Gears,
    link: "https://github.com/joeymichaelmartinez/MiniERP"
  },
  {
    title: `Web Front-end API`,
    description: `A front-end design integrated with a pre-existing API`,
    fullDescription: `Constructed front-end web apps that used a pre-existing web 
                      service API to learn best practices for UI design`,
    image: Pokeball,
    link: "https://github.com/joeymichaelmartinez/Web-Front-end-Design"
  },
  {
    title: `AudiophyleDB`,
    description: `A MySQL database used to store audio files and related info`,
    fullDescription: `A database project meant to demonstrate how to store audio files and related 
                      information in a normalized MySQL database with CRUD functionality. Set up a 
                      simple front-end to handle accessing and manipulating this information`,
    image: DatabaseIcon,
    link: "https://github.com/joeymichaelmartinez/AudiophyleDB/"
  },
  {
    title: `Usability Study`,
    description: `A study that scores mobile apps on user experience metrics`,
    fullDescription: `A study meant to gather statistics that would inform the overall effectiveness of 
                      various mobile apps based on certain usability metrics`,
    image: UsabilityStudy,
    link: "https://github.com/joeymichaelmartinez/Usability-Study"
  },
  {
    title: `Autocomplete`,
    description: `An implementation of autocomplete using ternary trees`,
    fullDescription: `While learning Java and Data Structures, I put together a project that would demonstrate how 
                      ternary trees are the perfect candidate to implement the common tasks necessary to perform autocomplete`,
    image: Search,
    link: "https://github.com/joeymichaelmartinez/Autocompleter"
  }
];