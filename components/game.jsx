import Board from './board';
import React from 'react';
import * as Minesweeper from '../minesweeper';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9, 10);
        this.state = { board: board };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged) {
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board });
    }

    render() {
        if (this.state.board.lost() || this.state.board.won) {
            const text = this.state.board.won() ? "Ok ok, you win!" : "Oh oh, you lose!";
            return (
                <div>
                    <Board board={this.state.board} updateGame={this.state.updateGame} />
                    <p>{text}</p>
                </div>
            )
        }
    }
}