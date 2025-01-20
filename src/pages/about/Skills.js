import { Link } from 'react-router-dom';
import { skillsData } from '../../data/skillsData';

export default function HardSkills() {
  
  const skillElement = skillsData.map((skill) => {
    return (
      <div className='about-skills-card' key={skill.id}>
        <Link onClick={toTop} className='button-linktext' to={skill.url}>
          {skill.title}
        </Link>
      </div>
    )
  })

  function toTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  return (
    <div className='about-skills container'>
      <h1>Technical Skills</h1>
      <Link
        className='button-linktext'
        onClick={toTop}
        to='..'>
          Learn More
      </Link>
      <div className='about-skills-intro'>
        <p>I have compiled a list of all the skills I have worked with enough to feel confident using. Some of these are further along than others, but I would be happy to work with any of them.</p>
        <p>Each skills has it's own seperate page where you can learn more about my experience and what I have planned for the future!</p>
        <p>I hope to expand this list as much as possible over the next few years!</p>
      </div>
      
      <div className='about-skills-container'>
        {skillElement}
      </div>

      <div className='about-skills-misc'>
        <h2>Miscellaneous</h2>
        <p>A few extra things that couldn't fill out a page by themselves, but I thought were worth mentioning:</p>
        <div className='about-skills-list'>
          <p>Versioning with Git and GitHub</p>
          <p>Mobile App Development with Android Studio</p>
          <p>Networking - CCNA Level 6</p>
          <p>IT Service Management - ITIL</p>
          <p>Experience with Agile methodology</p>
        </div>
        
      </div>
      
      <div className='about-skills-softskills'>
        <h1>Personal Skills</h1>
        <p>I enjoy working in a team and have been told I do a good job of communicating my ideas with others.</p>
        <p>I love to learn new things, and am always pushing myself to improve and learn.</p>
        <p>During the final year project for my degree I took on a lot of the leadership roles for my team. I actually ended up being team leader for the second half of the project!</p>
        <p>I consider myself very punctual and take pride in showing up on time.</p>
      </div>
      
    </div>
    
  )
}