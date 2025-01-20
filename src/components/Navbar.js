import { NavLink } from 'react-router-dom'

export default function Navbar({ aboutLink }) {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => isActive ? "nav-active" : ""}
        to="."
        title='Home'>
          Home
      </NavLink>

      <NavLink
        className={({ isActive }) => isActive ? "nav-active" : ""}
        to={aboutLink ? `about/${aboutLink}` : "about/"}
        title='About Me'>
          About Me
      </NavLink>

      <NavLink
        className={({ isActive }) => isActive ? "nav-active" : ""}
        to="portfolio"
        title='My Projects'>
          Projects
      </NavLink>
    </nav>
  )
}