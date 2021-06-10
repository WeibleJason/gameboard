import React from 'react';
import './BoardTile.css';

function BoardTile(props) {

    const styles = {
        marginLeft: props.position_x,
        marginTop: props.position_y,
        backgroundColor: props.color
    };

    const classes = 'board-tile ' + props.className;
    return <div className={classes} style={styles}>
    </div>;
}

export default BoardTile;