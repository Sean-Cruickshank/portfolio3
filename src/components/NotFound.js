import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
  
  const location = useLocation();
  const pathname = location.pathname.substring(1);
  const returnpath = pathname.split('/')[0];
  
  return(
    <div>

      <h1 className='notfound-title'>404 ERROR</h1>
      <h2 className='notfound-subtitle'>page not found :(</h2>

      <p className='notfound-text'>Sorry, <span className='notfound-pathname'>{pathname}</span> doesn't exist! I hope you are just testing the page and I haven't made a typo!</p>

      {returnpath === 'about' 
        ? <Link className='notfound-link' to='/about/'>Return to About Me</Link>
        : <Link className='notfound-link' to='/'>Return to Home</Link>}
    </div>
    
  )
}