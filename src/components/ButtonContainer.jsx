import React from 'react';
import './ButtonContainer.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


function ButtonContainer(props) {

    return <div className="button-container">
        <div className="button-stack">
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
                >   
                <Button onClick={props.greenCallback}>Green</Button>
                <Button onClick={props.blueCallback}>Blue</Button>
                <Button onClick={props.redCallback}>Red</Button>
                <Button onClick={props.resetCallback}>Reset</Button>
            </ButtonGroup>
        </div>
    </div>;

}

export default ButtonContainer;