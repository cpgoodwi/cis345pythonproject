var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            status: "login",
            name: "",
            coin: 0,
            life: 10,
            wins: 0,
            turn: 1,
            team: [],
            shop: []
        };
        _this.statusHandler = _this.statusHandler.bind(_this);
        _this.playerHandler = _this.playerHandler.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "statusHandler",
        value: function statusHandler(newStatus) {
            this.setState({ status: newStatus });
        }
    }, {
        key: "playerHandler",
        value: function playerHandler(playerName) {
            var _this2 = this;

            var clientPlayer = {};
            // TODO: make this check server for player of given name and return that player
            fetch("/player").then(function (res) {
                return res.json();
            }).then(function (serverPlayer) {
                _this2.setState({ name: serverPlayer.name });
                _this2.setState({ coin: serverPlayer.coin });
                _this2.setState({ team: serverPlayer.team });
                console.log("serverPlayerTeam", serverPlayer.team);
                _this2.setState({ shop: serverPlayer.shop });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var header = React.createElement(
                "header",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.state.status
                )
            );
            var stateContents;

            if (this.state.status === 'login') stateContents = React.createElement(Login, { statusHandler: this.statusHandler, playerHandler: this.playerHandler });else if (this.state.status === 'turn') stateContents = React.createElement(Turn, { statusHandler: this.statusHandler, coinData: this.state.coin, lifeData: this.state.life, winData: this.state.wins, turnData: this.state.turn, teamData: this.state.team, shopData: this.state.shop });else stateContents = React.createElement(
                "h1",
                null,
                "404"
            );

            return React.createElement(
                "div",
                null,
                header,
                stateContents
            );
        }
    }]);

    return App;
}(React.Component);

var root = document.getElementById('root');
ReactDOM.render(React.createElement(App, null), root);