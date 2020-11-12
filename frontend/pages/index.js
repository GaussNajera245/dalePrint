import React, {useState, useRef} from 'react';
import Layout from '../components/layout';
import { Grid, Paper, Button } from '@material-ui/core';
import Dropzone from '../components/dragNdrop/Dropzone';

function Home() {
  const [items, setItems] = useState([]);
  const [number, setNumber] = useState(1);
  const [drag, setDrag] = useState(0);
  const files = useRef('');

  const onStart = () => {
    // const {activeDrags} = setState;
    setDrag( B => B + 1);
  };

  const onStop = () => {
    // const {activeDrags} = setState;
    setDrag( C => C - 1);
  };


  const HI = () => {
      console.log({see: files.current.value});
      send(files.current.value)
        .then(x=>{  console.log({x}) })
        .catch(k=>{ console.log({k}) });
  };

  const eventLogger = (event, data) => {
    console.log({event, data});
  };

  const handleDrop = (files) => {
    const H = number +1;
    setNumber(H);
    
    if(number===5){
      setNumber(1);
    }
    const seas = files.map( L => <Photo name={L.name}/> )

    setItems(e=>[...e, ...seas ]);
    console.log({items})
  }

  const Photo = ({name}) => {
    const img = `/images/fondo_foto_${number}.jpg`;
    return <>
      <Grid item xs={3} key={`${name}${number}`} >
        <Paper style={{margin:5, textAlign:'center', backgroundImage: `url(${img})`, backgroundSize:'contain', height:'15vw'}}>
          <br />
          <br />
          <h3>{name}</h3>
        </Paper>
      </Grid>
    </>
  }

  const values = [
    <h3 style={{fontSize:22, textAlign: 'center'}}> Datos de Usaurio:</h3>,
    <p style={{fontSize:18, margin:8}}> <b>Nombre:</b> Manuel de los Santos</p>,
    <p style={{fontSize:18, margin:8}}> <b>Correo:</b>  demo@gmail.com</p>,
    <p style={{fontSize:18, margin:8}}> -------------------------------------------------------------------</p>,
  ]

  const changeNdrag= ({ isDragActive, isDragReject }) => {
    if (isDragActive) {
      return <p className="drop-message">Omnomnom, let me have those videos!</p>;
    } else if (isDragReject) {
      return <p className="drop-message">Uh oh, I don't know how to deal with that type of file!</p>;
    } else {
      return <p className="drop-message">Drag and drop some files on me, or click to select.</p>
    }
  }

  // const configDraggable = { axis:"x",
  //   handle=".handle"
  //   defaultPosition={{x: 0, y: 0}}
  //   position={null}
  //   grid={[25, 25]}
  //   scale={1}
  //   onDrag={handleDrag}
  // }
 
  return (
    <div className="App">
      <Layout>
        <Grid container  style={{paddingTop:10}}>
          <Grid item xs={8}>
            <Paper style={{height:'80vh', margin:10, padding:12}} >
              <Dropzone />
            </Paper>
          </Grid>


          <Grid item xs={4} style={{marginTop:14}}>
            <Paper style={{height:'80vh', padding:14}}>
              <Grid container  style={{paddingTop:10}}>
                { values.map( K => <Grid key={Math.random()} item xs={12}> {K}</Grid> )}
              </Grid>

              <Grid container  style={{paddingTop:10, textAlign:'center'}}>
                <Button variant="contained" size="large"  style={{maxWidth: '250px', minWidth: '250px',margin:'auto' }} disableElevation>
                  Enviar
                </Button>,
              </Grid>

              <Grid container  style={{paddingTop:10, textAlign:'center'}}>
                <Button variant="contained" size="large"  style={{maxWidth: '250px', minWidth: '250px',margin:'auto' }} color="secondary" disableElevation>
                  Borrar
                </Button>
                
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default Home;
