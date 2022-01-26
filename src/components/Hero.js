import "../index.css"

import icon from "../pages/img/magic-book.png"
/* https://www.flaticon.com/packs/magic-138?style_id=1225&family_id=333&group_id=1837 */

const Hero = () => {
    return (
        <div  className="hero">
            <div style={{margin:"auto"}}>
                <span className="hero-logo">
                    aukibit
                </span>
            </div>
            <div className="hero-body">
                <div className="hero-text">
                    <h1>Let your people do people work.</h1>
                    <h3> We have robots for the robot work.</h3>
                    <button>Contact</button>
                </div>
                <div className="hero-card">
                    <div className="hero-icon">
                            <img alt="icon" src={icon} height={100} ></img>
                    </div>
                    <div style={{margin:"auto", paddingLeft:"2rem", paddingRight:"2rem"}}>
                        <h2>Works like magic.</h2>
                        <h3>Tech that makes your barriers to growth <span className="hero-gradient-text">disappear</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
