import "../index.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div style={{margin:"auto"}}>
                L O G O
            </div>
            <button className="navbar-btn">Home</button>
            <button className="navbar-btn">About</button>
            <button className="navbar-btn">Contact</button>
        </div>
    )
}

export default Navbar
