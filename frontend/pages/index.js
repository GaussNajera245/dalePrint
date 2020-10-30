import React, {useState, useRef} from 'react';
import Layout from '../components/layout';
import { Grid, Paper, Button } from '@material-ui/core';

import Dropzone from 'react-dropzone';

// import send from './send2Axios';
//KEYYY

function Home() {
  const [items, setItems] = useState([]);
  const [number, setNumber] = useState(1)
  const files = useRef('');

  const HI = () => {
      console.log({see: files.current.value});
      send(files.current.value)
        .then(x=>{  console.log({x}) })
        .catch(k=>{ console.log({k}) });
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
 
  return (
    <div className="App">
      <Layout>
        <Grid container  style={{paddingTop:10}}>
          <Grid item xs={8}>
            <Paper style={{height:'80vh', margin:10}} >
              <Dropzone onDrop={handleDrop}>
                {({getRootProps, getInputProps}) => (
                  <section style={{textAlign: 'center',fontSize: 19,paddingTop: 15}}>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <b>Drag 'n' drop some files here, or click to select files</b>
                    </div>
                  </section>
                )}
              </Dropzone>
              <Grid container  style={{paddingTop:10}}>
                {items}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4} style={{marginTop:14}}>
            <Paper style={{height:'80vh', padding:14}}>
              <Grid container  style={{paddingTop:10}}>
                { values.map((K,i) => <Grid key={i} item xs={12}> {K}</Grid> )}
              </Grid>

              <Grid container  style={{paddingTop:10, textAlign:'center'}}>
                <Button variant="contained" size="large"  style={{maxWidth: '250px', minWidth: '250px',margin:'auto' }} color="" disableElevation>
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
