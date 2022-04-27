// PetIcon Component
function PetIcon(props) {
    if (props.petData === null)
        return <div className="pet"></div>
    else {
        return (
            <div className="pet">
                <h6>{props.petData.tier}</h6>
                <img src={props.petData.img_url}/>
                <div className="petStats">{props.petData.ap}⚔️ {props.petData.hp}💖</div>
            </div>
        )
    }
}