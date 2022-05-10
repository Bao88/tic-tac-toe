import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import React from 'react';

type SquareState = '' | 'X' | 'O'

interface SquareProps {
    x: number
    y: number
}

export class Square extends React.Component {
    xCoord: number
    yCoord: number
    state: {
        content: SquareState
    }

    constructor(props: SquareProps) {
        super(props)
        this.xCoord = props.x
        this.yCoord = props.y

        this.state = {
            content: ''
        }
    }

    private squareClicked = () => {
        this.setState({ content: 'X' })
        console.log(this.setState)
    }

    componentDidMount() {
        console.log('hello word'+this.xCoord)
    }

    render() {
        return (
            <ButtonUnstyled title="square button" className="square" key={`square-${this.xCoord}-${this.yCoord}`} onClick={this.squareClicked} >
                {this.state.content}
            </ButtonUnstyled >
        )
    }

}