import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const CSS = {
  root: { flexGrow: 1 },
  title: {
    flexGrow: 1,
    fontFamily: `'Yellowtail', cursive`,
    fontSize: '2.35rem'
  },
  toolbar: {
    overflow:'hidden', height:75
  },
  img:{
    height:102, width:'auto',
    marginRight: '-12px'
  }
}

export default function ButtonAppBar() {

  return (
    <div style={CSS.root}>
      <AppBar position="static">
        <Toolbar style={CSS.toolbar} >
          <img src='/images/pink_logo.jpg' style={CSS.img} title="Homepage Logo" />
          <Typography variant="h6" style={CSS.title}>
            Dale Print
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
