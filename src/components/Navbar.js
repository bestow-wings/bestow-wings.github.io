import {Link} from 'react-router-dom'

import "../index.css"

const Navbar = ({links}) => {
    return (
        <>
        <div className="navbar">
            {links.map((links) => (
                // <a key={links.key} href={links.link} target="_blank" rel="noreferrer"><button className="navbar-btn">{links.text}</button></a>
                <Link key= {links.key} to={links.link} className="navbar-btn">{links.text}</Link>
            ))}
        </div>
        </>
    )
}

export default Navbar
