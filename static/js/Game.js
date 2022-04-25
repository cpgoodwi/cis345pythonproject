// PetIcon Component
function PetIcon(props) {
    return React.createElement(
        "div",
        { className: "pet" },
        React.createElement(
            "p",
            null,
            props.name
        ),
        React.createElement("img", { src: props.petData.img_url, width: "100", height: "100" })
    );
}