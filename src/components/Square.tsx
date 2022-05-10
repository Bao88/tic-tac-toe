export function Square(x: number, y: number) {
    const xCoord = x
    const yCoord = y
    console.log(x, y)
    return (
        <button className="square" key={`square-${xCoord}-${yCoord}`}>
            {`${xCoord}-${yCoord}`}
        </button>
    )
}