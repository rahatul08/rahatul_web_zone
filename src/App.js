import './App.css';

import { Browser as Routers , Router} from ''
function App() {
  return (
    <Container >
        <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={3} style={{background : 'red'}}>
               <Profile/>
            </Grid>
            <Grid item xs>
                <Header>
                    
                </Header>
            </Grid>
        </Grid>
    </Container>
  );
}



export default App;
