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
    title: "Flavor Trail",
    font: "Prata, serif",
    tools: [
      assets.htmlIcon,
      assets.cssIcon,
      assets.jsIcon,
      assets.jQueryIcon,
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
    font: "Sulphur Point, serif",
    tools: [
      assets.htmlIcon,
      assets.cssIcon,
      assets.jsIcon,
      assets.jQueryIcon,
      assets.bootstrapIcon
    ],
    description:
      "An app for looking up the current weather by city.",
    picture: [assets.weatherDashPic],
    link: "https://m-beke.github.io/weather-dashboard/",
    repository: "https://github.com/m-beke/weather-dashboard"
  },
  {
    title: "Code Quiz",
    font: "Monoton, sans-serif",
    tools: [
      assets.htmlIcon,
      assets.cssIcon,
      assets.jsIcon,
      assets.bootstrapIcon
    ],
    description:
      "A timed quiz on coding knowledge that stores the user's high scores.",
    picture: [assets.codeQuizPic],
    link: "https://m-beke.github.io/code-quiz/",
    repository: "https://github.com/m-beke/code-quiz"
  },
  {
    title: "Password Generator",
    font: "VT323, serif",
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