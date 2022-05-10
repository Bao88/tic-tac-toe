import React from "react";
import Board from "./Board";

class Game extends React.Component {
    state = {
        size: 3
    }


    componentDidMount () {
        console.log("Game mounted")
    }

    render() {
        const props = { size: 3 }

        return (
            <div className="game">
                <div className="game-board">
                    <Board {...this.state} />
                </div>
                <div className="game-info">
                    <div>{'Something'}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}

export default Game