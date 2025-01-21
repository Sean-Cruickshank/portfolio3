import { Link, useParams } from 'react-router-dom'
import { skillsData, tableData } from '../../data/skillsData';
import { nanoid } from 'nanoid'
import { FaArrowLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export default function HardSkillsDetails() {
  
  let skillData = {};
  let skillDataParagraph;
  const params = useParams();
  skillsData.forEach((skill) => {
    if (skill.url === params.id) {
      skillData = skill
      skillDataParagraph = skillData.description.map((para) => {
        return (
          <div key={nanoid()}>
            {para}
          </div>
          
        )
      })
    }
  })

  //Assigns the 5 th elements for the table based on the value of the "score" value
  //If score is lower than 5 the remaining th are populated empty
  function tickCount(num) {
    if (num >5) {num = 5}
    let arr = []
    for(let i = 0; i < num; i++) {
      arr.push(<th key={nanoid()}>&#10003;</th>)
    }
    const fill = 5 - num
    for(let i = 0; i < fill; i++) {
      arr.push(<th key={nanoid()}></th>)
    }
    return arr
  }

  const tableElement = tableData.map((item) => {
    const tick = tickCount(item.score)
    return (
    <tr key={nanoid()} className={params.id === item.tag ? "about-skilldetails-selected" : ""}>
      <td><Link to={`/about/skills/${item.tag}`} >{item.name}</Link></td>
      {tick}
    </tr>
    )
  }) 

  if (skillData.id === undefined) {
    return (
      <div className='container about-skilldetails'>
        <Link to='/about/skills'><FaArrowLeft /> Back to Skills</Link>

        <div className='about-skilldetails-container'>
        <h1>Skill not found</h1>
        <p>The skill you entered doesn't have an entry. Coming soon? Maybe?</p>
      </div>
      </div>
    )
  }
  
  return (
    <div className='container about-skilldetails'>
      <Link to='/about/skills'><FaArrowLeft /> Back to Skills</Link>

      <div className='about-skilldetails-container'>
        <h1>{skillData.title}</h1>
        {skillDataParagraph}
      </div>
    </div>
  )
}