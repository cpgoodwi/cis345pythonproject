// PetIcon Component
function PetIcon(props) {
    return (
        <div className="pet">
            <p>{props.name}</p>
            <img src={props.petData.img_url} width="100" height="100"/>
        </div>
    )
}