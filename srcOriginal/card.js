import card from "./card"

function card(props){
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>{props.description} || </p>

        </div>
    )
}
export default card;