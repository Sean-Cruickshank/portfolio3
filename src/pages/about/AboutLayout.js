import { NavLink, Outlet } from 'react-router-dom'

export default function AboutLayout() {
  
  const styles = {
    color: "dimgrey",
    textDecoration: "underline"
  }
  
  return (
    <div>
      <div className='about-layout-nav'>

        <NavLink
          style={({ isActive }) => isActive ? styles : null}
          to='/about/'
          end>
            Who Am I?
        </NavLink>

        <NavLink
          style={({ isActive }) => isActive ? styles : null}
          to='experience'>
            Experience
        </NavLink>

        <NavLink
        style={({ isActive }) => isActive ? styles : null}
        to='skills'>
          Skills
        </NavLink>

      </div>
      <Outlet />
    </div>
  )
}