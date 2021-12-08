import "../index.css"

const Navbar = ({links}) => {
    return (
        <div className="navbar">
            {links.map((links) => (
                <a href={links.link} target="_blank"><button className="navbar-btn">{links.text}</button></a>
            ))}
        </div>
    )
}

export default Navbar
