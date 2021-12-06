import "../index.css"

const Navbar = ({names}) => {
    return (
        <div className="navbar">
            {names.map((names) => (
                <a href="http://www.google.com"><button className="navbar-btn">{names}</button></a>
            ))}
        </div>
    )
}

export default Navbar
