import React from "react";
import Board from "./Board";

interface GameState {
    size: number
    player: '' | 'X' | 'O'
}

class Game extends React.Component {
    state: GameState = {
        size: 3,
        player: 'X'
    }

    componentDidMount() {
        console.log("Game mounted")
    }

    boardClicked = () => {
        this.setState({ player: this.state.player == 'X' ? 'O' : 'X' })
    }

    render() {
        const props = { ...this.state, handleClick: this.boardClicked }

        return (
            <div className="game">
                <div className="game-board">
                    <Board {...props} />
                </div>
                <div className="game-info">
                    <div>{'Scoreboard'}</div>
                    <ol>{`Player ${this.state.player}`}</ol>
                </div>
            </div>
        )
    }
}

export default Game