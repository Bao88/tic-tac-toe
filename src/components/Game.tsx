import { Board } from "./Board";

export function Game() {
    return (
        <div className="game">
            <div className="game-board">
                {Board(3)}
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}