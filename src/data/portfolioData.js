import CSF from '../images/coolspacefacts/csf_logo.jpg'
import portrait from '../images/portrait.png'
import { nanoid } from 'nanoid'

export const portfolioData = [
  {
    id: "1",
    title: "Cool Space Facts",
    downloadLink: 'coolspacefacts',
    description: "A website about space, with different pages listing facts about various objects in space, ordered from smallest to largest. I tried to make the website as visually appealling as possible.",
    yearShort: "2023 - 2024",
    yearLong: "December 2023 - January 2024",
    tagsFront: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    tagsBack: [
      "html",
      "css",
      "javascript"
    ],
    thumbnail: CSF,
    screenshotsFilesize: "24.3 MB",
    screenshotsDescription: "23 images of the website at different pages and resolutions",
    projectFilesize: "5.9 MB",
    projectDescription: "Visual Studio project file",
    pageText: [
      <p key={nanoid()}>My main goal with making this website was to improve my knowledge of JavaScript. Primarily, it was to generate as much of the HTML on the website as possible, by reusing code.</p>,
      <p key={nanoid()}>The website consists of four themed pages, where each page runs through a list of space objects ordered by that theme (size, distance, temperature, and speed). Information about each object is stored in a JavaScript array, where it is fed through a for loop to generate the content for the page.</p>,
      <p key={nanoid()}>This website was also a good oppourtunity for me to learn more about content attribution and licencing. The website features an attributions page, where sources for all the images and facts used on the website can be found. All images were sourced through either public domain, or creative commons.</p>
    ],
    images: [
      "https://d2ep14lbls2qwm.cloudfront.net/md_size.png",
      "https://d2ep14lbls2qwm.cloudfront.net/md_distance.png",
      "https://d2ep14lbls2qwm.cloudfront.net/md_temp.png",
      "https://d2ep14lbls2qwm.cloudfront.net/md_speed.png"
    ],
    imageTitles: [
      "A section about the International Space Station on the 'Size' page",
      "A section about Mercury on the 'Distance' page",
      "A section about Titan on the 'Temperature' page",
      "A section about Mercury on the 'Speed' page"
    ]
  },
  {
    id: "2",
    title: "Tenzies",
    downloadLink: "tenzies",
    description: "A game",
    yearShort: "2024",
    yearLong: "February 2024",
    tagsFront: [
      "HTML",
      "CSS",
      "React"
    ],
    tagsBack: [
      "html",
      "css",
      "react"
    ],
    thumbnail: portrait,
    screenshotsFilesize: "",
    projectFilesize: ""
  },
  {
    id: "3",
    title: "Shop",
    downloadLink: "shop",
    description: "Buy things here",
    yearShort: "2024",
    yearLong: "2024",
    tagsFront: [
      "HTML",
      "CSS",
      "C#"
    ],
    tagsBack: [
      "html",
      "css",
      "c-sharp"
    ],
    thumbnail: portrait,
    screenshotsFilesize: "",
    projectFilesize: ""
  }
]

export const filterData = [
  {
    front: "HTML",
    back: "html"
  },
  {
    front: "CSS",
    back: "css"
  },
  {
    front: "JavaScript",
    back: "javascript"
  },
  {
    front: "React",
    back: "react"
  }
]

/*
  {
    front: "Vue.js",
    back: "vue"
  },
  {
    front: "Wordpress",
    back: "wordpress"
  },
  {
    front: "C#",
    back: "c-sharp"
  },
  {
    front: "Java",
    back: "java"
  },
  {
    front: "SQL",
    back: "sql"
  },
  {
    front: "Jade",
    back: "jade"
  },
*/

/*

  --- Project Template ---

  {
    id: "",
    title: "",
    downloadLink: "",
    description: "",
    yearShort: "",
    yearLong: "",
    tagsFront: [
      "",
      "",
      ""
    ],
    tagsBack: [
      "",
      "",
      ""
    ],
    thumbnail: ,
    screenshotsFilesize: "",
    projectFilesize: "",
    pageText: [
      <p key={nanoid()}></p>,
      <p key={nanoid()}></p>,
      <p key={nanoid()}></p>
    ]
  },
*/