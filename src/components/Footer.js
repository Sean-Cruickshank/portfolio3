import { Link } from 'react-router-dom'

export default function Footer() {
  
  function toTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  
  return (
    <footer>
      <div className='footer-nav'>
        <Link
          onClick={toTop}
          className='footer-nav-link'
          to='/'
        >Home</Link>

        <Link
          onClick={toTop}
          className='footer-nav-link'
          to='/about/'
        >About Me</Link>

        <Link
          onClick={toTop}
          className='footer-nav-link'
          to='/portfolio/'
        >My Projects</Link>

        <Link
          onClick={toTop}
          className='footer-nav-link'
          to='/contact/'
        >Contact</Link>
      </div>

      <p>Website created by Sean Cruickshank © 2024</p>
      
      <a onClick={toTop} className='footer-totop'>Back to top</a>
      
    </footer>
  )
}