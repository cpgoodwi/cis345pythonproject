class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "login",
            name: "",
            coin: 0,
            life: 10,
            wins: 0,
            turn: 1,
            team: [],
            shop: [],
        }
        this.statusHandler = this.statusHandler.bind(this)
        this.playerHandler = this.playerHandler.bind(this)
    }

    statusHandler(newStatus) {
        this.setState({status: newStatus})
    }

    playerHandler(playerName) {
        var clientPlayer = {}
        // TODO: make this check server for player of given name and return that player
        fetch("/player").then(res => res.json()).then(
            serverPlayer => {
                this.setState({name: serverPlayer.name})
                this.setState({coin: serverPlayer.coin})
                this.setState({team: serverPlayer.team})
                console.log("serverPlayerTeam", serverPlayer.team)
                this.setState({shop: serverPlayer.shop})
            }
        )
    }

    render() {
        const header = <header><h1>{this.state.status}</h1></header>
        var stateContents

        if (this.state.status === 'login')
            stateContents = <Login statusHandler={this.statusHandler} playerHandler={this.playerHandler} />
        else if (this.state.status === 'turn')
            stateContents = <Turn statusHandler={this.statusHandler} coinData={this.state.coin} lifeData={this.state.life} winData={this.state.wins} turnData={this.state.turn} teamData={this.state.team} shopData={this.state.shop}/>
        else
            stateContents = <h1>404</h1>

        return (
            <div>
                {header}
                {stateContents}
            </div>
        )
    }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)