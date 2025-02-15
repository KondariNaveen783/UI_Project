import Animations from "../Topics/Animations";
import AsyncAwait from "../Topics/AsyncAwait";
import Closure from "../Topics/Closure";
import Components from "../Topics/Components";
import FlexBox from "../Topics/Flexbox";
import Forms from "../Topics/Forms";
import Grid from "../Topics/Grid";
import Hooks from "../Topics/Hooks";
import Promises from "../Topics/Promises";
import SemanticTags from "../Topics/SemanticTags";
import Seo from "../Topics/Seo";
import StateManagement from "../Topics/StateManagement";

export const logos = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];

export const topics = {
  HTML: ["SEO", "Semantic Tags", "Forms"],
  CSS: ["Flex-box", "Grid", "Animations"],
  JavaScript: ["Promises", "Closures", "Async/Await"],
  React: ["Hooks", "Components", "State Management"],
};

export const componentsMap = {
  "Semantic Tags": <SemanticTags />,
  Forms: <Forms />,
  SEO: <Seo />,
  "Flex-box": <FlexBox />,
  Grid: <Grid />,
  Animations: <Animations />,
  Closures: <Closure />,
  Promises: <Promises />,
  "Async/Await": <AsyncAwait />,
  Components: <Components />,
  Hooks: <Hooks />,
  "State Management": <StateManagement />,
};
