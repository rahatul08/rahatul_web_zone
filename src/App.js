import './App.css';
import React from "react";
import { Container  } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";



function App() {
  return (
    <Container >
        <Grid item xs={12} sm={12} md={4} lg={3}>
            hello
        </Grid>
        <Grid item xs>
            world
        </Grid>

    </Container>
  );
}

export default App;
