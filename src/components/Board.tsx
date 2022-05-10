import { Square } from "./Square"

export function Board(size: number) {
    let row = []
    const rowArray = Array.from(Array(size).keys())
    console.log(rowArray)
    for (let x = 0; x < size; x++) {
        row.push(
            <div className="board-row" key={`row-${x}`}>
                {rowArray.map(y => Square(x, y))}
            </div>
        )
    }
    console.log(row)
    return row
}