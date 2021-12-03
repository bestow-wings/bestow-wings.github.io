import Card from "./Card"
import "../index.css"

const Cards = ({ data }) => {
    return (
        <div className="cards">
        {data.map((data) => (
            <Card key={data.id} title={data.title} description={data.description} />
        ))}
        </div>
    )
}

export default Cards
