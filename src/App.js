import './App.css';
import { Toolbar,Button, AppBar, Grid } from '@mui/material';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <iframe src="http://localhost:3000/d-solo/MMOZx0xVk/gauge?orgId=1&panelId=4" width="450" height="200" title='Graph' frameborder="0"/>
    </div>
    
  );
}

export default App;
