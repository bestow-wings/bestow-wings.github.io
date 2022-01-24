import { Outlet, Link } from 'react-router-dom'

import Navbar from "./components/Navbar"

const nav_links = [
  {
    key: 1,
    text: "Home",
    link: "/"
  },
  {
    key:2,
    text: "About",
    link: "/"
  },
  {
    key:3,
    text: "Contact",
    link: "/"
  }
]

function Header() {
  return (
      <>
        <div className="banner">
          <div className="logo"><Link to="/">a</Link></div>
          <Navbar links={nav_links} />
        </div>
        <Outlet />
      </>
  );
}

export default Header;
