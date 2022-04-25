
// Login screen

function Login(props) {
    // TODO: Implement check in server to load or rewrite game of saved name or play as guest
    function handleLogin() {
        props.playerHandler('guest');
        props.statusHandler('turn');
    }

    var username_field = React.createRef();

    return React.createElement(
        'div',
        { id: 'login' },
        React.createElement('input', { type: 'text', ref: username_field, placeholder: 'Enter Username or Play as Guest...', spellCheck: 'false' }),
        React.createElement(
            'div',
            { id: 'bottom' },
            React.createElement(
                'button',
                { onClick: handleLogin },
                'Continue Previous Game'
            ),
            React.createElement(
                'button',
                { onClick: handleLogin },
                'Start New Game'
            ),
            React.createElement(
                'button',
                { onClick: handleLogin },
                'Continue as Guest'
            )
        )
    );
}

// Turn Screen

function Turn(props) {
    var team_disp = props.teamData.map(function (pet, i) {
        return React.createElement(PetIcon, { petData: pet, key: i });
    });
    var shop_disp = props.teamData.map(function (item, i) {
        return React.createElement(PetIcon, { petData: item, key: i });
    });

    return React.createElement(
        'div',
        { id: 'turn' },
        React.createElement(
            'div',
            { id: 'info' },
            React.createElement(
                'div',
                { id: 'coin' },
                'Coins: ',
                props.coinData
            ),
            React.createElement(
                'div',
                { id: 'life' },
                'Lives: ',
                props.lifeData
            ),
            React.createElement(
                'div',
                { id: 'wins' },
                'Wins: ',
                props.winsData
            ),
            React.createElement(
                'div',
                { id: 'turn' },
                'Turn: ',
                props.turnData
            )
        ),
        React.createElement(
            'div',
            { id: 'team' },
            team_disp
        ),
        React.createElement(
            'div',
            { id: 'shop' },
            shop_disp
        ),
        React.createElement(
            'div',
            { id: 'buttons' },
            React.createElement(
                'button',
                null,
                'Roll'
            ),
            React.createElement(
                'button',
                null,
                'End Turn'
            )
        )
    );
}