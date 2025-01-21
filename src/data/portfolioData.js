import { nanoid } from 'nanoid'

export const portfolioData = [
  {
    id: "1",
    title: "Cool Space Facts",
    downloadLink: 'coolspacefacts',
    description: "A website about space, with different pages listing facts about various objects in space, ordered from smallest to largest.",
    yearShort: "2023 - 2024",
    yearLong: "December 2023 - January 2024",
    tags: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    thumbnail: '/images/thumbnails/csf.jpg',
    screenshotsFilesize: "24.3 MB",
    screenshotsDescription: "23 images of the website at different pages and resolutions",
    projectFilesize: "5.9 MB",
    projectDescription: "Visual Studio project file",
    pageText: [
      <p key={nanoid()}>My main goal with making this website was to improve my knowledge of JavaScript. Primarily, it was to generate as much of the HTML on the website as possible by reusing code.</p>,
      <p key={nanoid()}>The website consists of four themed pages, where each page runs through a list of space objects ordered by that theme (size, distance, temperature, and speed). Information about each object is stored in a JavaScript array, where it is fed through a for loop to generate the content for the page.</p>,
      <p key={nanoid()}>This website was also a good oppourtunity for me to learn more about content attribution and licencing. The website features an attributions page, where sources for all the images and facts used on the website can be found. All images were sourced through either public domain, or creative commons.</p>
    ],
    images: [
      "/images/coolspacefacts/md_size.png",
      "/images/coolspacefacts/md_distance.png",
      "/images/coolspacefacts/md_temp.png",
      "/images/coolspacefacts/md_speed.png",
      "/images/coolspacefacts/xl_size_card.png",
      "/images/coolspacefacts/xl_sources.png",
      "/images/coolspacefacts/sm_speed.png"
    ],
    imageTitles: [
      "A section about the International Space Station on the 'Size' page",
      "A section about Mercury on the 'Distance' page",
      "A section about Titan on the 'Temperature' page",
      "A section about Mercury on the 'Speed' page",
      "A section about the Milky Way Galaxy on the 'Size' page at XL screen resolution",
      "The sources page",
      "A section about the rotation of Jupiter on the 'Speed' page at mobile resolution"
    ],
    link: 'https://coolspacefacts.com/'
  },
  {
    id: "2",
    title: "Tenzies",
    downloadLink: "tenzies",
    description: "A recreation of the Tenzi dice game. Can track and update highscores.",
    yearShort: "2024",
    yearLong: "February 2024",
    tags: [
      "HTML",
      "CSS",
      "React"
    ],
    thumbnail: '/images/thumbnails/tenzies.png',
    screenshotsFilesize: "129.4 KB",
    screenshotsDescription: "Contains the three screenshots shown above",
    projectFilesize: "591.2 KB",
    projectDescription: "React app project folder. Will require some quick installs to start (README included!)",
    pageText: [
      <p>This project was created as the final part of an online React tutorial.</p>,
      <p>The project built in the tutorial covered the gameplay of the game, but I have added a few extra touches to make it more interactive!</p>
    ],
    images: [
      "/images/tenzies/newgame.png",
      "/images/tenzies/midgame.png",
      "/images/tenzies/victory.png",
    ],
    imageTitles: [
      "A new game, with an existing high score already set",
      "Mid-game with 9 rolls made and 5 dice selected",
      "A victory celebration with all dice selected"
    ],
    link: ''
  }
]

export const filterData = ['HTML','CSS','JavaScript','React']

/*

  --- Project Template ---

  {
    id: "",
    title: "",
    downloadLink: "",
    description: "",
    yearShort: "",
    yearLong: "",
    tags: [
      "",
      "",
      ""
    ],
    thumbnail: ,
    screenshotsFilesize: "",
    screenshotDescription: "",
    projectFilesize: "",
    projectDescription: "",
    pageText: [
      <p key={nanoid()}></p>,
      <p key={nanoid()}></p>,
      <p key={nanoid()}></p>
    ],
    images: [
      "",
      "",
      "",
    ],
    imageTitles: [
      "",
      "",
      "",
    ]
  },
*/