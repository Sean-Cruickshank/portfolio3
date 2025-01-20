import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import SocialNav from './SocialNav';
import Footer from './Footer';

export default function Layout() {
  
  const [aboutLink, setAboutLink] = React.useState()
  const location = useLocation();
  const splitter = location.pathname.split("/");
  if (splitter[1] === "about") {
    if (aboutLink !== splitter[2]) {
      setAboutLink(splitter[2])
    }
    
  }

  return (
    <div className='layout'>
      
      <SocialNav />

      <Navbar aboutLink={aboutLink} />

      <div className='layout-outlet'>
        <Outlet />
      </div>
      
      <Footer />

    </div>
    
  )
}