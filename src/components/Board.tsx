import React from "react"
import { Square } from "./Square"

/* export function Board(size: number) {
    let row = []
    const rowArray = Array.from(Array(size).keys())
    for (let x = 0; x < size; x++) {
        row.push(
            <div className="board-row" key={`row-${x}`}>
                {rowArray.map(y => new Square({x, y}).render())}
            </div>
        )
    }
    
    return row
} */

interface BoardProps {
    size: number
}

class Board extends React.Component {
    size: number
    constructor(props: BoardProps) {
        super(props)
        this.size = props.size
    }
    
    componentDidMount () {
        console.log("App mounted")
    }

    render() {
        return (
            <div className="App" >
                <Square />
            </div>
        );
    }
}

export default Board;