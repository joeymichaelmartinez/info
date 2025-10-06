import Pokeball from "../../public/images/Pokeball.svg";
import DatabaseIcon from '../../public/images/DatabaseIcon.png';
import UsabilityStudy from '../../public/images/Usability-Test.svg';
import Search from '../../public/images/search.svg';
import J4Icon from '../../public/images/J4-Icon.png';
import BallBreaking from '../../public/images/BallBreaking.png';

export const projectInfo = [
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
    title: `Direct Manipulation UI`,
    description: `A ball breaker game using gyroscope movement`,
    fullDescription: `A simple ball breaker game meant to demonstrate UI design that uses direct manipulation. 
                      Users can drag or create more balls, create walls for the balls to break, or delete anything 
                      they've created so far. All of these actions use various different gestures that are all 
                      some form of direct manipulation.`,
    image: BallBreaking,
    link: "https://github.com/joeymichaelmartinez/Direct-Manipulation"
  },
  {
    title: `Autocomplete`,
    description: `An implementation of autocomplete using ternary trees`,
    fullDescription: `While learning Java and Data Structures, I put together a project that would demonstrate how 
                      ternary trees are the perfect candidate to implement the common tasks necessary to perform autocomplete`,
    image: Search,
    link: "https://github.com/joeymichaelmartinez/Autocompleter"
  },
  {
    title: `J4 Lang`,
    description: `A scripting language that emphasizes readability`,
    fullDescription: `J4 is a scripting language built for LMU's compilers course. It is meant to simplify basic coding constructs 
                      so that they are more readable and more easily understood. It is a statically and strongly typed language based
                      on Python and Javascript`,
    image: J4Icon,
    link: "https://github.com/joeymichaelmartinez/J4-Lang"
  }
];