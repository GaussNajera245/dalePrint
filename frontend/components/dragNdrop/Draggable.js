import React, {useState} from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import Draggable from 'react-draggable';

function Drag({name}) {
  const [drag, setDrag] = useState(0);
  const number = Math.floor(Math.random()*5 + 1);

  function onStart() { 
    setDrag( B => B + 1); 
  };

  function onStop() {
    setDrag( C => C - 1);
  };

  const img = `/images/fondo_foto_${number}.jpg`;
  const stiles = {  
      textAlign:'center',           margin:5,
      backgroundSize:'contain',     height:'15vw',
      backgroundImage: `url(${img})`, 
  }

  return (
    <Draggable onStart={onStart}  onStop={onStop} >
        <Grid item xs={3} key={`${Math.random}`} >
            <Paper style={stiles}>
            <br />
            <h3 style={{fontSize:'2vw'}} >{name}</h3>
            </Paper>
        </Grid>
    </Draggable>
  );
}

export default Drag;
