// PetIcon Component
function PetIcon(props) {
    console.log(props.petData.name)
    return (
        <div className="pet">
            <h3>{props.petData.name}</h3>
            <img src={props.petData.img_url}/>
            <div className="petStats">
                <div className="petAP">{props.petData.ap} ap</div>
                <div className="petHP">{props.petData.hp} hp</div>
            </div>
        </div>
    )
}