import { Button, ButtonClasses } from '@mui/material';
import React from 'react';

interface SquareProps {
    x: number
    y: number
    handleClick: Function
    player: '' | 'X' | 'O'
}

export class Square extends React.Component<SquareProps> {
    xCoord: number
    yCoord: number
    state: {
        content: '' | 'X' | 'O',
        clicked: boolean
    }

    constructor(props: SquareProps) {
        super(props)
        this.xCoord = props.x
        this.yCoord = props.y

        this.state = {
            content: '',
            clicked: false
        }
    }

    private squareClicked = () => {
        this.setState({ content: this.props.player, clicked: true })
        this.props.handleClick(this.xCoord, this.yCoord)
    }

    componentDidMount() {
        console.log(`square-${this.xCoord}-${this.yCoord}`)
    }

    render() {
        return (
            <Button
                color={this.state.content === '' ? 'info' :
                    this.state.content === 'X' ?
                        'primary' : 'secondary'
                }
                variant="outlined"
                title="square button"
                className="square-button"
                key={`square-${this.xCoord}-${this.yCoord}`}
                onClick={this.squareClicked}
            >
                {this.state.content}
            </Button >
        )
    }

}