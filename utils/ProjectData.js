import { assets } from '../utils/Assets.js';

export const projects = [
  {
    title: "Chronos",
    font: "Caesar Dressing, serif",
    tools: [
      assets.htmlIcon,
      assets.cssIcon,
      assets.jsIcon,
      assets.mongoIcon,
      assets.expressIcon,
      assets.reactIcon,
      assets.nodeIcon,
      assets.materializeIcon
    ],
    description:
      "A calendar app designed for creating, planning, and tracking events.",
    picture: [assets.chronosPic],
    link: "https://chronos-b9mn.onrender.com/",
    repository: "https://github.com/m-beke/chronos"
  },
  {
    title: "StreamScape",
    font: 'Faculty Glyphic, sans-serif',
    tools: [
      assets.htmlIcon,
      assets.cssIcon,
      assets.jsIcon,
      assets.handlebarsIcon,
      assets.sequelIcon,
      assets.sqlIcon,
      assets.nodeIcon,
      assets.materializeIcon
    ],
    description:
      "A search tool that you can use to check if your favorite movie/show is streaming.",
    picture: [assets.streamScapePic],
    link: "https://still-oasis-92537-ca9b2c9be51c.herokuapp.com/",
    repository: "https://github.com/m-beke/StreamScape"
  },
  {
    title: "Flavor Trail",
    font: "Prata, serif",
    tools: [
      assets.htmlIcon,
      assets.cssIcon,
      assets.jsIcon,
      assets.materializeIcon
    ],
    description:
      "A search tool for finding the best rated restaurants in the area you search for.",
    picture: [assets.flavorTrailPic],
    link: "https://shawki45.github.io/Flavor-Trail/",
    repository: "https://github.com/Shawki45/Flavor-Trail"
  },
  {
    title: "Weather Dashboard",
    font: 'DM Serif Text, serif',
    tools: [
      assets.htmlIcon,
      assets.cssIcon,
      assets.jsIcon
    ],
    description:
      "An app for looking up the current weather by city.",
    picture: [assets.weatherDashPic],
    link: "https://m-beke.github.io/weather-dashboard/",
    repository: "https://github.com/m-beke/weather-dashboard"
  },
  {
    title: "Code Quiz",
    font: "Oswald, serif",
    tools: [
      assets.htmlIcon,
      assets.cssIcon,
      assets.jsIcon
    ],
    description:
      "A timed quiz on coding knowledge that stores the user's high scores.",
    picture: [assets.codeQuizPic],
    link: "https://m-beke.github.io/code-quiz/",
    repository: "https://github.com/m-beke/code-quiz"
  },
  {
    title: "Password Generator",
    font: "doto, serif",
    tools: [
      assets.htmlIcon,
      assets.cssIcon,
      assets.jsIcon
    ],
    description:
      "A tool for randomly generating a unique password.",
    picture: [assets.passwordGenPic],
    link: "https://m-beke.github.io/password-generator/",
    repository: "https://github.com/m-beke/password-generator"
  },
];