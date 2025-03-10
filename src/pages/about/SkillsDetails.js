import { Link, useParams } from 'react-router-dom'
import { skillsData, tableData } from '../../data/skillsData';
import { nanoid } from 'nanoid'
import { FaArrowLeft } from "react-icons/fa";

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

  if (skillData.id === undefined) {
    return (
      <div className='about-skilldetails-text'>
        <h1>Skill not found</h1>
        <p>The skill '<span>{params.id}</span>' doesn't have an entry. Coming soon? Maybe?</p>
      </div>
    )
  }
  
  return (
    <div className='about-skilldetails-text'>
      <h2>{skillData.title}</h2>
      {skillDataParagraph}
    </div>
  )
}