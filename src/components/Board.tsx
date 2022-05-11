import React from "react"
import { Square } from "./Square"

interface BoardProps {
    size: number
    player: '' | 'X' | 'O'
    handleClick: Function
}

class Board extends React.Component<BoardProps> {
    size: number
    constructor(props: BoardProps) {
        super(props)
        this.size = props.size
    }

    componentDidMount() {
        console.log("App mounted")
    }

    squareClicked = (x: number, y: number) => {
        console.log(x, y)
        this.props.handleClick()
    }

    render() {
        let row = []
        const rowArray = Array.from(Array(this.size).keys())
        for (let x = 0; x < this.size; x++) {
            row.push(
                <div className="board-row" key={`row-${x}`}>
                    {rowArray.map(y => <Square {...{ x, y, handleClick: this.squareClicked, player: this.props.player }} key={`square-${x}-${y}`} />)}
                </div>
            )
        }

        return (
            <div className="App" >
                {row}
            </div>
        );
    }
}

export default Board;