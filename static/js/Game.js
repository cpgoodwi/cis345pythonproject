// PetIcon Component
function PetIcon(props) {
    if (props.petData === null) return React.createElement("div", { className: "pet" });else {
        return React.createElement(
            "div",
            { className: "pet" },
            React.createElement(
                "h6",
                null,
                props.petData.tier
            ),
            React.createElement("img", { src: props.petData.img_url }),
            React.createElement(
                "div",
                { className: "petStats" },
                props.petData.ap,
                "\u2694\uFE0F ",
                props.petData.hp,
                "\uD83D\uDC96"
            )
        );
    }
}