from flask import Flask, render_template
from game_modules.Players import *

app = Flask(__name__)
p = Player(team=[Ant(), Ant(), None, Ant(), Beaver()])  # dummy player for gui testing


def main():
    app.run()


@app.route("/")
def base():
    return render_template("base.html")


@app.route("/player")
def get_player():
    # print(p.to_dict)
    return p.to_dict


@app.route("/team")
def get_team():
    print("team:")
    print({i: p.team[i].to_dict for i in range(len(p.team))})
    return {f"team{_}": p.team[_].to_dict for _ in range(len(p.team))}


if __name__ == "__main__":
    main()
