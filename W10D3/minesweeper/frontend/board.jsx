import React from 'react'
import Tile from './tile'

class Board extends React.Component {
    constructor(props){
        // console.log("board-constructing")
        super(props)
        console.log(this);
    }

    render() {
        // console.log("board-rendering")
        return (
            <div id='board'>
                {this.renderRow()};
            </div>
        )
    }

    renderRow() {
        // console.log("row-rendering")
        const board = this.props.board;
        return board.grid.map((row) => {
            return(
            <div>
                {this.renderTile(row)}
            </div>
            )
        })
    }

    renderTile(row) {
        // console.log("tile-rendering")
        return row.map((tile) => {
            return (<div>
                <Tile tile={tile} updateGame={this.props.updateGame}/>
            </div>
            )
        })
    }
}

export default Board;