import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Draggable from './Draggable';
import Dropzone from 'react-dropzone';

const DropZone = ({children}) => {
    const [items, setItems] = useState([]);

    const handleDrop = (files) => {
        console.log({files})
        const seas = files.map( G => <Draggable key={Math.random()} name={G.name}/> )
        setItems( e => [...e, ...seas ] );
    }

    const dropSection = ({getRootProps, getInputProps}) => {
        return (
          <section style={{ height:'100%', borderStyle:'dotted', textAlign: 'center', fontSize: 19 }}>
            <div {...getRootProps()} style={{height:'100%'}} >
                <input {...getInputProps()} />
                <b>Arrastra y suelta tus archivos aqui :P</b>
                <Grid container  style={{paddingTop:10}}>
                    {items}
                </Grid> 
            </div>
          </section>
        )
    }

    return (
        <Dropzone key={Math.random()} onDrop={handleDrop} noClick={true} >
            {dropSection}
        </Dropzone>
    )
};

export default DropZone;