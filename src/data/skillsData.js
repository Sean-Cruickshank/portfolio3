import { nanoid } from 'nanoid'

export const skillsData = [
  {
    id: 0,
    url: "html-css",
    title: "HTML & CSS",
    description: [
      <p>Like a lot of people, I started web developement with HTML and CSS in notepad when I was in school, when it was just something to do for fun.</p>,
      <p>I feel I have a decent understanding of how these languages work and can usually get the visual style I want out of them. There are definitely still places I can improve, but overall I feel confident writing with HTML and CSS.</p>,
      <h3>SASS / SCSS</h3>,
      <p>I have yet to use SASS in a project, but would like that to change in the near future. I am a big fan of a lot of the features it adds and intend to utilise it a lot more in future projects</p>,
      <h3>Bootstrap</h3>,
      <p>I have used bootstrap in a lot of my projects, and most of the syntax feels natural at this point. It has taken an important role in helping me build dynamic websites!</p>
    ]
  },
  {
    id: 1,
    url: "javascript",
    title: "JavaScript",
    description: [
      <p>My main goal since graduating has been to improve my knowledge of JavaScript as much as possible.</p>,
      <p>I feel I still have a lot to learn, but I have a lot of fun with it and I'm excited to learn new concepts and become more familiar with different libraries and frameworks.</p>,
      <p>"Cool Space Facts" was the first full website I ever made, and was built entirely with vanilla JavaScript. I wanted to ensure I had a solid understanding of the language before moving on to other frameworks</p>,
      <h3>TypeScript</h3>,
      <p>I am familiar with much of the syntax of TypeScript and wish to learn more about it in the future</p>,
      <p>As of writing this I haven't used it in  a project yet but this will hopefully change in the near future!</p>,
      <h3>React</h3>,
      <p>React is the JavaScript library I am most familiar with, and the library I currently spend the most time on.</p>,
      <p>In fact, I used it to make this website!</p>,
      <p>I see myself using it a lot more in the coming years and would like to build as much experience with it as possible.</p>
    ]
  },
  {
    id: 2,
    url: "c-sharp",
    title: "C#",
    description: [
      <p>C# was the main programming language used during my degree. While I haven't used it as much since then I have the general knowledge to get most things done.</p>,
      <h3>ASP .NET Core</h3>,
      <p>A lot of my degree projects were focused on ASP.NET Core, and involved using C# for handling the Model-View-Controller and data fetching.</p>
    ]
  },
  {
    id: 3,
    url: "database-management",
    title: "Database Management",
    description: [
      <h3>SQL</h3>,
      <p>Most of the work in databases I have done has been with SQL.</p>,
      <p>I am familiar with the syntax, but most of my work has been on the front-end, or with local data files (like this website!)</p>,
      <p>I definitely feel I have room to improve with SQL and database design in general!</p>,
      <h3>Jade</h3>,
      <p>I spent a semester using Jade during the second year of my degree. While I don't see many picking it over SQL, I enjoyed using it and am familiar with how it works</p>
    ]
  },
  {
    id: 4,
    url: "azure",
    title: "Azure",
    description: [
      <img src='/images/az900_cert.svg'/>,
      <p>I attained my Azure Fundamentals (AZ-900) certification in early 2025 and hope to push for further certifications as my career develops.</p>,
      <p>I have a solid understanding of cloud concepts, services, and governance, which I hope to utilise at some point either through my career or on here!</p>,
    ]
  }
]

export const tableData = [
  {name: "HTML", score: 5, tag: "html-css"},
  {name: "CSS", score: 5, tag: "html-css"},
  {name: "JavaScript", score: 4, tag: "javascript"},
  {name: "React", score: 4, tag: "react"},
  {name: "Vue.js", score: 2, tag: "vue"},
  {name: "WordPress", score: 3, tag: "wordpress"},
  {name: "C#", score: 3, tag: "c-sharp"},
  {name: "Java", score: 2, tag: "java"},
  {name: "SQL", score: 3, tag: "database-management"},
  {name: "Jade", score: 2, tag: "database-management"},
]