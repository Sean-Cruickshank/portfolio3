import portrait from '../../images/portrait.png'
import { Link } from 'react-router-dom'
import toTop from '../../utilities/toTop'

export default function About() {
  return (
    <div className="container about-index">

      <h1>Who Am I?</h1>
      
      <div>
        <img
          className='about-index-image'
          src={portrait}
          alt='A picture of me'
          title='A picture of me'
          />
      </div>
      <div className="about-index-section about-index-intro">
          
          <p>My name is Sean Cruickshank and I am a graduate web developer based in Auckland, New Zealand.</p>

          <p>I was born in Wellsford, a small town about an hour north of Auckland in 1997. I spent my early years growing up in the Northland/Auckland area but have moved around a fair bit since then!</p>

          <p>I began working on online courses for Web Development in 2018, and in 2019 I moved to Invercargill to study and complete my Bachelor's degree in IT.</p>

      </div>

      <div className='about-index-section'>
        <h1>What I'm Looking for</h1>

        <p>I am mostly focused on working with JavaScript and React at the moment, but would like to pick up as many new skills as I can. Somewhere I can use what I know, alongside something new would be a great challenge for me!</p>
        <p>My ideal job at the moment would be somewhere I can grow my skills while I become familiar with the day to day activities of a web developer.</p>
        <p>If you think I could make a good addition to your team, feel free to reach out!</p>
        <div
            className='button-learnmore'
            title='Contact Page'>
              <Link
                className='button-linktext'
                onClick={toTop}
                to='/contact'>
                  Learn More
              </Link>
          </div>
      </div>

      <div className='about-index-section'>
        <h1>Plans for the Future</h1>

        <p>Most of my experience with Web Development so far has been on the front-end, and this is where I am most comfortable, but I would like to improve my back-end skills and become a full stack developer one day!</p>
        <p>I am open to new ideas, and always willing to learn and challenge myself!</p>
      </div>

      <div className='about-index-section'>
        <h1>Personal</h1>

        <p>Growing up I spent a lot of time surrounded by tech and have always wanted to get more involved with learning about the hardware side of things. As of right now I do most of my work off my old notebook, but I would love to build my own computer someday!</p>

        <p>Outside of IT my favourite hobbies are astronomy and video games. Before getting into web design, I actually wanted to try game design as a career. But I've found myself more drawn towards building websites and apps since leaving high school. I still love the idea of creating my own game at some point!</p>
      </div>
    </div>
  )
}