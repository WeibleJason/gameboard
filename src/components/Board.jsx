import React, { useState }from 'react';
import './Board.css'
import './BoardTile.css'
import BoardTile from './BoardTile';
import ButtonContainer from './ButtonContainer';
import {RED, GREEN, BLUE, BLACK, WHITE} from '../utils/strings.js';

const BOARD_WIDTH = 600;
const BOARD_HEIGHT = 600;
const TILES_PER_ROW = 8;
const TILES_PER_COLUMN = 8;

const X_STEP = BOARD_WIDTH / TILES_PER_ROW;
const Y_STEP = BOARD_HEIGHT / TILES_PER_COLUMN;

let tiles = [];

function isWhite(i, j) {
    return (i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)
}

class BoardTileObject {
    constructor(x_index, y_index, height, width, position_x, position_y, color){
        this.x_index = x_index;
        this.y_index = y_index;
        this.height = height;
        this.width = width;
        this.position_x = position_x;
        this.position_y = position_y;
        this.color = color;
    }

    draw(color) {
        // return <BoardTile color={color} position_x={this.position_x} position_y={this.position_y} />;
        if (isWhite(this.x_index, this.y_index)){
            return <BoardTile color={WHITE} position_x={this.position_x} position_y={this.position_y} />;
        } else {
            return <BoardTile color={color} position_x={this.position_x} position_y={this.position_y} />;
        }
        
    }
}


for(var i = 0; i < TILES_PER_ROW; i++){
    for(var j= 0; j < TILES_PER_COLUMN; j++){
        if (isWhite(i,j)){
            // tiles.push(<BoardTile className="white-tile" position_x={X_STEP * i} position_y={Y_STEP * j} />);
            tiles.push(new BoardTileObject(i, j, 75,75,X_STEP*i,Y_STEP*j,WHITE))
        } else {
            // tiles.push(<BoardTile className="black-tile" position_x={X_STEP * i} position_y={Y_STEP * j} />);
            tiles.push(new BoardTileObject(i, j, 75,75,X_STEP*i,Y_STEP*j,BLACK))
        }
        
    }
}

function Board(props) {
    const [color, setColor] = useState(BLACK);

    function onGreenClickHandler() {
        setColor(GREEN);
    }

    function onBlueClickHandler() {
        setColor(BLUE);
    }

    function onRedClickHandler() {
        setColor(RED);
    }

    function onResetClickHandler() {
        setColor(BLACK);
    }

    return <div>
    <div className="board">
        {tiles.map(tile => tile.draw(color))}
    </div>
    <ButtonContainer 
        greenCallback={onGreenClickHandler}  
        blueCallback={onBlueClickHandler}
        redCallback={onRedClickHandler}
        resetCallback={onResetClickHandler}
    />
    </div>

}
export default Board;