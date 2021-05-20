import React from 'react';
import Board from './board'
import * as Minesweeper from "../minesweeper"

class Game extends React.Component {
    constructor(props) {
        
        super(props);
        const board = new Minesweeper.Board(9, 10);
        this.state = {
            board: board
        };
        console.log("game-constructing")
        // this.updateGame.bind(this)
    }

    updateGame() {

    }

    render() {
        console.log("game-rendering")
        return (
            <div>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }
}

export default Game;


