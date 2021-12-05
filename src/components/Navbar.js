import "../index.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="favicon.png" style={{margin: "auto", height:"75%", cursor: "default"}}></img>
            <div style={{marginTop:"auto", marginBottom:"auto"}}>
                <button className="navbar-btn">Home</button>
                <button className="navbar-btn">About</button>
                <button className="navbar-btn">Contact</button>
            </div>
        </div>
    )
}

export default Navbar
