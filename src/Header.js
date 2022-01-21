import { Outlet } from 'react-router-dom'

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
    link: "/titanic-survivor"
  },
  {
    key:3,
    text: "Contact",
    link: "https://www.google.com/"
  }
]

function Header() {
  return (
      <>
        <div className="banner">
          <div className="logo">aukibit</div>
          <Navbar links={nav_links} />
        </div>
        <Outlet />
      </>
  );
}

export default Header;
