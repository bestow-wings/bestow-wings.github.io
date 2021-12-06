import "../index.css"

const Navbar = ({names}) => {
    return (
        <div className="navbar">
            {names.map((names) => (
                <button className="navbar-btn">{names}</button>
            ))}
        </div>
    )
}

export default Navbar
