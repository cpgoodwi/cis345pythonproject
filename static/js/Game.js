// PetIcon Component
function PetIcon(props) {
    console.log(props.petData.name);
    return React.createElement(
        "div",
        { className: "pet" },
        React.createElement(
            "h3",
            null,
            props.petData.name
        ),
        React.createElement("img", { src: props.petData.img_url }),
        React.createElement(
            "div",
            { className: "petStats" },
            React.createElement(
                "div",
                { className: "petAP" },
                props.petData.ap,
                " ap"
            ),
            React.createElement(
                "div",
                { className: "petHP" },
                props.petData.hp,
                " hp"
            )
        )
    );
}