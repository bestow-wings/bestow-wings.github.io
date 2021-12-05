import "../index.css"
import chess_ai_image from "../img/chess_ai.gif"

const Card = ({ title, description, imgsrc, link }) => {
    return (
        <a href={link} target="_blank" className="card-image" style={{backgroundImage: `url("${imgsrc}")`}}>
            <div className="card-background" >
                <div className="card-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}

export default Card
