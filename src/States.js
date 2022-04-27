
// Login screen

function Login(props) {
    // TODO: Implement check in server to load or rewrite game of saved name or play as guest
    function handleLogin() {
        props.playerHandler('guest')
        props.statusHandler('turn')
    }

    var username_field = React.createRef()

    return (
        <div id="login">
            <input type="text" ref={username_field} placeholder="Enter Username or Play as Guest..." spellCheck="false" />
            <div id="bottom">
                <button onClick={handleLogin}>Continue Previous Game</button>
                <button onClick={handleLogin}>Start New Game</button>
                <button onClick={handleLogin}>Continue as Guest</button>
            </div>
        </div>
    )
}

// Turn Screen

function Turn(props) {
    // TODO: allow empty spots in the team
    const team_disp = props.teamData.map((pet, i) => <PetIcon petData={pet} key={i}/>)
    const shop_disp = props.shopData.map((item, i) => <PetIcon petData={item} key={i}/>)

    console.log("team data:", props.teamData)

    return (
        <div id="turn">
            <div id="info">
                <div id="coin">Coins: {props.coinData}</div>
                <div id="life">Lives: {props.lifeData}</div>
                <div id="wins">Wins: {props.winsData}</div>
                <div id="turn">Turn: {props.turnData}</div>
            </div>
            <div id="team">
                {team_disp}
            </div>
            <div id="shop">{shop_disp}</div>
            <div id="buttons">
                <button>Roll🎲</button>
                <button>End Turn</button>
            </div>
        </div>
    )
}